import Thumbnail from '@/assets/images/team/thumbnail.png';
import { CustomDivider, ImageHover } from '@/components';
import { DESCRIPTION } from '@/constants/people';
import { Box, Typography } from '@mui/material';

import Grid from '@mui/material/Grid';
import Image from 'next/image';

const CONTENT_THUMBNAIL = {
  title: 'Together we are one',
  content:
    'At The Ark Studio, we believe in the power of unity and collaboration. Our team is a tapestry of diverse talents, backgrounds, and perspectives, woven together by a shared passion for innovation and creativity.The Ark Studio is more than just a workplace; it’s a community. A place where collaboration isn’t just encouraged—it’s ingrained in everything we do. We support one another, learn from each other, and celebrate our achievements together. Our studio is a sanctuary for creativity, where the seeds of great ideas are nurtured by the collective wisdom of our team. ',
};

const OurTeamPage = () => {
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
              alt="our-team"
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
              fontSize={{ xs: '14px', lg: '18px', whiteSpace: 'pre-wrap' }}
              variant="subtitle1">
              {CONTENT_THUMBNAIL.content}
            </Typography>
          </Grid>
        </Grid>
        <Grid container item xs={12}>
          <CustomDivider title={'How we work'} />
          <Grid item mt={3} py={1}>
            {DESCRIPTION.map((item, index) => {
              return (
                <Box
                  key={item.id}
                  mb={{ xs: 4, lg: 8 }}
                  sx={{
                    display: { xs: 'block', lg: 'flex' },
                    flexDirection: index % 2 && 'row-reverse',
                    width: '100%',
                  }}>
                  <Box sx={{ width: { xs: '100%', lg: '50%' } }}>
                    <Grid
                      container
                      item
                      sx={{
                        overflow: 'hidden',
                        borderRadius: '2rem',
                        mb: '1rem',
                      }}>
                      <ImageHover
                        alt="people"
                        height={700}
                        imgSrc={item.img}
                        overrideStyles={{
                          width: '100%',
                          height: '22rem',
                          objectFit: 'cover',
                        }}
                        width={700}
                      />
                    </Grid>
                  </Box>
                  <Box
                    sx={{
                      width: { xs: '100%', lg: '50%' },
                      my: 'auto',
                      pl: { lg: index % 2 ? '0' : '5em' },
                      pr: { lg: index % 2 ? '5em' : '0' },
                    }}>
                    <Typography
                      fontSize={{ xs: '24px', lg: '36px' }}
                      fontWeight="600"
                      lineHeight="2em"
                      variant="h4">
                      {item.title}
                    </Typography>
                    <Typography
                      fontSize={{ xs: '14px', lg: '18px' }}
                      variant="subtitle1">
                      {item.content}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
            <Typography
              fontSize={{ xs: '14px', lg: '24px' }}
              sx={{ fontStyle: 'italic' }}
              variant="h1">
              Join us at The Ark Studio, where together, we are one—and
              together, we are unstoppable.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OurTeamPage;
