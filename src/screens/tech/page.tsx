import Thumbnail from '@/assets/images/tech/thumbnail.png';
import { CustomDivider, ImageHover } from '@/components';
import { DESIGN_TOOLS, TECHNOLOGIES } from '@/constants/tech';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';

const CONTENT_THUMBNAIL = {
  title: 'We know everything!',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

const TechPage = () => {
  return (
    <Grid
      container
      item
      py={2}
      sx={{
        height: '100%',
        overflow: 'auto',
        backgroundColor: '#101B25',
        px: { xs: '1rem', lg: '10rem' },
      }}>
      <Grid item xs={12}>
        <Grid
          container
          item
          sx={{
            overflow: 'hidden',
            mb: '3rem',
          }}
          xs={12}>
          <Grid
            container
            item
            sx={{
              overflow: 'hidden',
              borderRadius: '2rem',
            }}
            xs={12}>
            <ImageHover
              alt="tech-thumbnail"
              height={3000}
              width={3000}
              overrideStyles={{ height: '25rem', width: '100%' }}
              imgSrc={Thumbnail}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              fontSize={{ xs: '24px', lg: '36px' }}
              fontWeight="600"
              lineHeight="3em"
              variant="h4">
              {CONTENT_THUMBNAIL.title}
            </Typography>
            <Typography
              fontSize={{ xs: '14px', lg: '18px' }}
              variant="subtitle1">
              {CONTENT_THUMBNAIL.content}
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <CustomDivider title={'Design tools'} />
          <Grid container item py={{ xs: 2, lg: 4 }}>
            {DESIGN_TOOLS.map((item) => {
              return (
                <Grid key={item.id} item xs={4} lg={2} columnSpacing={3}>
                  <Box
                    height={{ xs: 110, lg: 180 }}
                    bgcolor={'#000000'}
                    m={2}
                    sx={{
                      borderRadius: { xs: '1rem', lg: '2rem' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}>
                    <Image
                      alt="design-tool"
                      src={item.img}
                      style={{
                        width: '50%',
                        height: '50%',
                        marginBottom: '8px',
                      }}
                    />
                    <Typography variant="body1" fontSize={{ xs: 12, lg: 16 }}>
                      {item.name}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <CustomDivider title={'Our technologies'} />
          <Grid container item py={{ xs: 2, lg: 4 }} mb={8}>
            {TECHNOLOGIES.map((item) => {
              return (
                <Grid key={item.id} item xs={4} lg={2}>
                  <Box
                    height={{ xs: 110, lg: 180 }}
                    bgcolor={'#000000'}
                    m={2}
                    sx={{
                      borderRadius: { xs: '1rem', lg: '2rem' },
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                    }}>
                    <Image
                      alt="technology"
                      src={item.img}
                      style={{
                        width: '50%',
                        height: '50%',
                        marginBottom: '8px',
                      }}
                    />
                    <Typography variant="body1" fontSize={{ xs: 12, lg: 16 }}>
                      {item.name}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TechPage;
