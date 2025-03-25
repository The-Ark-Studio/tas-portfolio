'use client';
import React, { useState } from 'react';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import emailjs from 'emailjs-com';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      // Use your provided EmailJS credentials
      const serviceID = 'service_td2273r';
      const templateID = 'template_2l6ax2f';
      const userID = 'xpE_5II2EoPZ086Y6';

      await emailjs.send(serviceID, templateID, formData, userID);
      setSuccessMessage('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      setErrorMessage('Failed to send your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <form style={{ width: '100%' }} onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{ style: { color: '#B0BEC5' } }}
                InputProps={{
                  style: {
                    color: '#FFFFFF',
                    backgroundColor: '#2D3748',
                  },
                }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{ style: { color: '#B0BEC5' } }}
                InputProps={{
                  style: {
                    color: '#FFFFFF',
                    backgroundColor: '#2D3748',
                  },
                }}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                InputLabelProps={{ style: { color: '#B0BEC5' } }}
                InputProps={{
                  style: {
                    color: '#FFFFFF',
                    backgroundColor: '#2D3748',
                  },
                }}
                required
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
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </Button>
            </Grid>
            {successMessage && (
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  textAlign="center"
                  sx={{ color: '#4CAF50', mt: 2 }}
                >
                  {successMessage}
                </Typography>
              </Grid>
            )}
            {errorMessage && (
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  textAlign="center"
                  sx={{ color: '#FF5252', mt: 2 }}
                >
                  {errorMessage}
                </Typography>
              </Grid>
            )}
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default ContactUsPage;