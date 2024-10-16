import { Box, Divider } from '@mui/material';
import { useCallback } from 'react';

export const CustomDivider = (props: {
  title: string;
  isLeftTitle?: boolean;
}) => {
  const { title, isLeftTitle = true } = props;
  const titleByPosition = useCallback(() => {
    if (isLeftTitle) {
      return {
        '&::before': {
          width: 0,
        },
        '&::after': {
          width: '100%',
        },
      };
    }

    return {
      '&::before': {
        width: '100%',
      },
      '&::after': {
        width: 0,
      },
    };
  }, [isLeftTitle]);

  return (
    <Box sx={{ width: '100%' }}>
      <Divider
        sx={{
          ...titleByPosition(),
          fontSize: { xs: '1rem', md: '1.5rem' },
          '&::before, &::after': {
            borderColor: '#687380',
            borderWidth: 2,
          },
          '.MuiDivider-wrapper': {
            paddingLeft: '0',
          },
        }}
        textAlign={isLeftTitle ? 'left' : 'right'}>
        {title}
      </Divider>
    </Box>
  );
};
