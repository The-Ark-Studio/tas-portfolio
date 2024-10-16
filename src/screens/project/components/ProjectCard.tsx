import { ImageHover } from '@/components';
import DetailButton from '@/components/common/DetailButton';
import { NavigationPath } from '@/constants';
import { IProject } from '@/types';
import Grid from '@mui/material/Grid';

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';

export const ProjectCard = (props: { item: IProject }) => {
  const { item } = props;

  return (
    <Grid container item xs={12} lg={6}>
      <Grid item xs={12}>
        <Grid
          container
          item
          sx={{
            width: '95%',
            marginRight: 'auto',
            marginLeft: 'auto',
            paddingBottom: '2rem',
          }}
          xs={12}>
          <Grid
            item
            sx={{
              overflow: 'hidden',
              borderRadius: '20px',
              position: 'relative',
              '&:hover': {
                cursor: 'pointer',
              },
            }}
            xs={12}>
            <NextLink
              key={item.id}
              href={`${NavigationPath.PROJECT}/${item.id}`}>
              <ImageHover
                alt="project"
                imgSrc={item.thumbNail}
                overrideStyles={{
                  width: '100%',
                  height: '400px',
                }}
              />
            </NextLink>
            <DetailButton href={item.href} text="See detail" />
          </Grid>
          <Grid item mt="5%">
            <Grid item xs={12}>
              <Typography
                sx={{
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  width: '80%',
                  fontWeight: 600,
                  fontSize: '18px',
                }}>
                {item.clientName}
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                textDecoration: 'none',
              }}
              xs={12}>
              <NextLink
                key={item.id}
                passHref
                href={`${NavigationPath.PROJECT}/${item.id}`}
                rel="noopener"
                style={{ textDecoration: 'none' }}>
                <Link
                  sx={{
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    color: '#F2F4F5',
                    width: '98%',
                    fontWeight: 700,
                    fontSize: { xs: '20px', md: '24px' },
                    '&:hover': {
                      cursor: 'pointer',
                      opacity: 0.75,
                    },
                  }}
                  underline="hover">
                  {item.projectName}
                </Link>
              </NextLink>
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: '2',
                  WebkitBoxOrient: 'vertical',
                  fontWeight: 300,
                  fontSize: { xs: '14px', md: '1rem' },
                }}>
                {item.description}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
