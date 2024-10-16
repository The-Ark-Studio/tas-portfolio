export class DeviceTypes {
  static readonly MOBILE = 'mobile';
  static readonly TABLET = 'tablet';
  static readonly DESKTOP = 'desktop';
}
export class NavigationPath {
  static readonly HOME = '/';
  static readonly PROJECT = '/projects';
  static readonly TECH = '/technologies';
  static readonly PEOPLE = '/people';
  static readonly CONTACT = '/contacts';
}

export class ELocales {
  static readonly VI = 'vi';
  static readonly EN = 'en';
  static readonly SCHEME_SET = new Set([this.VI, this.EN]);

  static isValid(scheme: string): boolean {
    return this.SCHEME_SET.has(scheme);
  }
}

export class LimitRecords {
  static readonly LIMIT_100 = 100;
  static readonly LIMIT_500 = 500;
  static readonly LIMIT_1000 = 1_000;
  static readonly LIMIT_5000 = 5_000;
}

export class Statuses {
  static readonly UNKNOWN = '000_UNKNOWN';
  static readonly ACTIVATED = '100_ACTIVATED';
  static readonly DEACTIVATED = '101_DEACTIVATED';
  static readonly BLOCKED = '102_BLOCKED';
  static readonly DRAFT = '103_DRAFT';
  static readonly ARCHIVE = '104_ARCHIVE';
  static readonly SUCCESS = '105_SUCCESS';
  static readonly FAIL = '106_FAIL';
  static readonly SENT = '107_SENT';

  static readonly SCHEME_SET = new Set([
    this.UNKNOWN,
    this.ACTIVATED,
    this.DEACTIVATED,
    this.BLOCKED,
    this.DRAFT,
    this.ARCHIVE,
    this.SUCCESS,
    this.FAIL,
    this.SENT,
  ]);

  static isValid(scheme: string): boolean {
    return this.SCHEME_SET.has(scheme);
  }
}
