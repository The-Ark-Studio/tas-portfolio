import Logo from '@/assets/images/logo.svg';
import { NavigationPath } from '@/constants';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Image from 'next/image';
import NextLink from 'next/link';

export default function NotFound() {
  return (
    <Grid
      container
      spacing={1}
      sx={{
        marginTop: '10%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}>
      <Grid
        item
        sx={{
          height: '100%',
          flexDirection: 'column',
        }}>
        <Image
          alt={'logo'}
          height={300}
          width={300}
          loading="lazy"
          src={Logo}
        />
        <h1>404 - Page Not Found</h1>
        <NextLink href={NavigationPath.HOME} legacyBehavior passHref>
          <Link
            sx={{
              textDecoration: 'none',
              fontWeight: 600,
              color: '#F44061',
            }}>
            Return home
          </Link>
        </NextLink>
      </Grid>
    </Grid>
  );
}
