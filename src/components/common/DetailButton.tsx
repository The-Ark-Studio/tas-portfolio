import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';

const DetailButton = (props: { href: string; text: string }) => {
  const { href, text } = props ?? {};

  return (
    <Grid
      container
      item
      alignItems="flex-start"
      justifyContent="flex-end"
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 5,
        width: 'fit-content',
      }}>
      <NextLink
        passHref
        href={href}
        rel="noopener"
        style={{ textDecoration: 'none' }}
        target="_blank">
        <Link
          sx={{
            display: 'flex',
            backgroundColor: '#0f1b25',
            alignItems: 'center',
            color: '#F2F4F5',
            textDecoration: 'none',
            border: '1px solid #F2F4F5',
            borderRadius: '30px',
            padding: '10px 15px',
            '&:hover': {
              borderColor: '#F44061',
              color: '#F44061',
            },
          }}>
          <Typography sx={{ mr: 1 }}>{text}</Typography>
          <ArrowForwardIcon />
        </Link>
      </NextLink>
    </Grid>
  );
};

export default DetailButton;
