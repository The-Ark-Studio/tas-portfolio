import Grid from '@mui/material/Grid';

import BackgroundImage from '@/assets/images/background.png';

import { HomePageContent } from './components/HomePageContent';

const HomePage = () => {
  return (
    <Grid
      container
      style={{
        background: `url(${BackgroundImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
      }}
      sx={{ paddingX: { xs: 1, md: 10 } }}>
      <HomePageContent />
    </Grid>
  );
};

export default HomePage;
