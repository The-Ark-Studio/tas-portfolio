import { ImageHover } from '@/components';
import { NavigationPath } from '@/constants';

import BackgroundImage from '@/assets/images/background.png';
import ImageIntro from '@/assets/images/home-page-img.png';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';

export const ImageIntroHover = () => {
  return (
    <Grid
      item
      mx="auto"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '2rem',
      }}>
      <ImageHover
        alt="intro"
        imgSrc={ImageIntro}
        overrideStyles={{
          marginLeft: 'auto',
          marginRight: 'auto',
          height: '100%',
        }}
      />
      <Grid
        item
        sx={{
          background: `url(${BackgroundImage.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          p: '8px',
          borderRadius: '30px',
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}>
        <NextLink legacyBehavior passHref href={NavigationPath.PROJECT}>
          <Link
            sx={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 15px',
              color: '#F2F4F5',
              borderRadius: '2rem',
              textDecoration: 'none',
              border: '2px solid #F2F4F5',
              '&:hover': {
                borderColor: '#F44061',
                color: '#F44061',
              },
            }}>
            <Typography sx={{ mr: 2 }}>View all projects</Typography>
            <ArrowForwardIcon />
          </Link>
        </NextLink>
      </Grid>
    </Grid>
  );
};
