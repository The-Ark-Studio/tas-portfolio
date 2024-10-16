import Grid from '@mui/material/Grid';
import React from 'react';

import { Header } from './Header';

const MainLayout = (props: {
  children: React.ReactNode;
  isMobile: boolean;
}) => {
  const { children, isMobile } = props;

  return (
    <React.Fragment>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Header isMobile={isMobile} />
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: '#0F1B25',
            height: '100vh',
            color: '#F2F4F5',
            overflow: 'auto',
          }}
          xs={12}>
          {children}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MainLayout;
