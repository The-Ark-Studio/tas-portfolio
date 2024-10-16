import { ELocales } from '@/constants';
import { EndPoints } from '@/utils';
import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from 'next-intl/navigation';

export const localePrefix = 'always';

export const locales = [ELocales.VI, ELocales.EN];

export const pathnames = EndPoints.getI18nPathnames() satisfies Pathnames<
  typeof locales
>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({
    locales,
    localePrefix,
    pathnames,
  });
