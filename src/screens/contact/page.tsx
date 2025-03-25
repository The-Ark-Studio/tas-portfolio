'use client';
import React from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';

const ContactUsPage = () => {
  return (
    <Grid
      container
      sx={{
        height: '100vh',
        backgroundColor: '#101B25', // Dark background for good contrast
        color: '#FFFFFF', // White text for readability
        px: { xs: '1rem', lg: '10rem' },
        py: '2rem',
      }}
    >
      <Grid item xs={12} mb={4}>
        <Typography
          variant="h3"
          fontWeight="600"
          textAlign="center"
          sx={{ color: '#FFFFFF' }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="center"
          sx={{ color: '#B0BEC5', mt: 1 }}
        >
          We'd love to hear from you! Fill out the form below to get in touch.
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        md={8}
        lg={6}
        sx={{
          margin: '0 auto',
          backgroundColor: '#1E293B', // Slightly lighter background for the form
          borderRadius: '1rem',
          padding: '2rem',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
        }}
      >
        <form style={{ width: '100%' }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                InputLabelProps={{ style: { color: '#B0BEC5' } }}
                InputProps={{
                  style: {
                    color: '#FFFFFF',
                    backgroundColor: '#2D3748',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                InputLabelProps={{ style: { color: '#B0BEC5' } }}
                InputProps={{
                  style: {
                    color: '#FFFFFF',
                    backgroundColor: '#2D3748',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                InputLabelProps={{ style: { color: '#B0BEC5' } }}
                InputProps={{
                  style: {
                    color: '#FFFFFF',
                    backgroundColor: '#2D3748',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: '#4CAF50',
                  color: '#FFFFFF',
                  '&:hover': {
                    backgroundColor: '#388E3C',
                  },
                  fontWeight: '600',
                  textTransform: 'none',
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default ContactUsPage;