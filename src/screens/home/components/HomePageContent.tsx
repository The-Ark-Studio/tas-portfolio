import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { ImageIntroHover } from './ImageIntro';

export const HomePageContent = () => {
  return (
    <Grid
      container
      item
      mt="5%"
      p={2}
      sx={{
        display: { xs: 'flex', md: '' },
        justifyContent: { xs: '', md: 'space-between' },
        flexFlow: { xs: 'column', md: 'row' },
      }}
      xs={12}>
      <Grid
        container
        item
        md={6}
        spacing={0}
        sx={{
          height: '70%',
          display: { xs: 'flex', md: 'block' },
          flexFlow: { xs: 'column', md: 'row' },
          textAlign: { xs: 'center', md: 'left' },
        }}
        xs={12}>
        <Grid
          container
          item
          sx={{
            height: 'fit-content',
            display: { xs: 'flex', md: '' },
            flexFlow: { xs: 'column', md: '' },
          }}
          xs={12}>
          <Grid item xs={12}>
            <Typography
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                height: { xs: '100%', md: 'auto' },
                justifyContent: { xs: 'center', md: 'left' },
                fontSize: { xs: '1.5rem', md: '3rem', lg: '4rem' },
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
              variant="h1">
              the adventure
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{
                margin: 0,
                fontSize: { xs: '4rem', md: '7rem', lg: '8rem' },
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
              variant="h1">
              begins
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          item
          rowSpacing={0}
          sx={{ textAlign: { xs: 'center', md: 'left' } }}
          xs={12}>
          <Grid item md={8} xs={12}>
            <Typography
              style={{ margin: 0 }}
              sx={{ fontSize: { xs: '14px', md: '20px' } }}>
              “From Reasoned Insight to 5-Star Impact:
              <br />
              Enriching Lives with Accountable Excellence.”
            </Typography>
            <Grid
              item
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'left' },
                paddingY: 3,
              }}
              xs={12}>
              <Grid
                item
                sx={{
                  display: 'flex',

                  alignItems: 'center',
                }}>
                <Typography
                  style={{
                    color: '#F44061',
                    fontWeight: 700,
                  }}
                  sx={{ fontSize: { xs: '14px', lg: '1rem' } }}>
                  A
                </Typography>
                <Typography sx={{ fontSize: { xs: '14px', lg: '1rem' } }}>
                  ccountable
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: 'flex',
                  ml: { xs: 1, md: 2 },
                  alignItems: 'center',
                }}>
                <Typography
                  style={{
                    color: '#F44061',
                    fontWeight: 700,
                  }}
                  sx={{ fontSize: { xs: '14px', lg: '1rem' } }}>
                  R
                </Typography>
                <Typography sx={{ fontSize: { xs: '14px', lg: '1rem' } }}>
                  easonable
                </Typography>
              </Grid>
              <Grid
                item
                sx={{
                  display: 'flex',
                  ml: { xs: 1, md: 2 },
                  alignItems: 'center',
                }}>
                <Typography
                  style={{
                    color: '#F44061',
                    fontWeight: 700,
                  }}
                  sx={{ fontSize: { xs: '14px', lg: '1rem' } }}>
                  K
                </Typography>
                <Typography sx={{ fontSize: { xs: '14px', lg: '1rem' } }}>
                  nowledgeable
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            height: { xs: '100%', md: 'auto' },
            mb: { xs: 2, md: 0 },
          }}
          xs={12}>
          <Button
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: '#F44161',
              borderRadius: '35px',
              paddingX: '1.5rem',
              paddingY: '0.5rem',
              marginTop: { xs: 0, md: '2rem' },
              marginRight: '5px',
              color: 'white',
              '&:hover': {
                backgroundColor: '#911A3A',
              },
            }}>
            <Typography sx={{ mr: 1, fontWeight: 600 }}>
              Create your project
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        item
        lg={6}
        md={5}
        sx={{
          height: { xs: '100%', md: '70%' },
          mb: { xs: 18, md: 0 },
        }}
        xs={12}>
        <ImageIntroHover />
      </Grid>
    </Grid>
  );
};
