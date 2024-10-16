import { ELocales } from '@/constants/common';
import en from '@/locales/en.json';
import vi from '@/locales/vi.json';

const useTrans = () => {
  const locale = ELocales.VI;
  const translation = locale === ELocales.VI ? vi : en;

  return translation;
};

export default useTrans;
