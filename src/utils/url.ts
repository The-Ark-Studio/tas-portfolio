import { NavigationPath } from '@/constants';
import { TAnyType } from '@/types';
import isEmpty from 'lodash/isEmpty';

export const stringify = (params: Record<string | symbol, any>) => {
  const normalizedParams: Record<string | symbol, TAnyType> = {};

  for (const key in params) {
    switch (typeof params[key]) {
      case 'number':
      case 'string': {
        normalizedParams[key] = params[key];
        break;
      }

      default: {
        normalizedParams[key] = JSON.stringify(params[key]);
        break;
      }
    }
  }
  const rs = new URLSearchParams(normalizedParams);

  return rs.toString();
};

export class EndPoints {
  static getPath(opts: {
    locale?: string;
    path: string;
    params?: Record<string, string | number>;
  }) {
    const { locale = '', path, params = {} } = opts;

    const basePath = `/${locale}${path}`;

    return isEmpty(params) ? basePath : `${basePath}?${stringify(params)}`;
  }

  static getI18nPathnames() {
    const pathnames: Record<string, string> = {};
    const appPaths = Object.values(NavigationPath);

    for (const path of appPaths) {
      pathnames[path] = path;
    }

    return pathnames;
  }
}
