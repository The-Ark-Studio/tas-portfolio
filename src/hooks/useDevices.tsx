import theme from '@/theme';
import useMediaQuery from '@mui/material/useMediaQuery';

export type TDevices = 'mobile' | 'tablet' | 'desktop';

export const useDevice = (deviceType: TDevices) => {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.up('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  switch (deviceType) {
    case 'mobile': {
      return isMobile;
    }

    case 'tablet': {
      return isTablet;
    }

    default: {
      return isDesktop;
    }
  }
};
