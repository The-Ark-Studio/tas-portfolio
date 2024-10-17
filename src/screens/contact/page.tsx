'use client';
import React from 'react';
import {Box, Card, CardContent, Paper, Stack, Typography} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {FaFacebookF, FaInstagram, FaTiktok, FaPhoneAlt} from 'react-icons/fa';

import {MdEmail} from 'react-icons/md';
import {IoHomeSharp} from 'react-icons/io5';
import Link from 'next/link';

import styled, {keyframes} from 'styled-components';
import {Colors} from '@/constants/common/colors';

const ContactScreen = () => {
  return (
    <Grid
      container
      py={2}
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
      }}
      sx={{paddingX: {xs: 1, md: 20}}}
    >
      <Grid xs={12} sx={{marginBottom: '80px'}}>
        <Box>
          {/* <h3>Location</h3> */}
          <Paper
            sx={{backgroundColor: Colors.blackColor, borderRadius: '10px'}}
          >
            <Grid container>
              {/* left content */}
              <Grid laptop={8} xs={12}>
                <Paper
                  sx={{padding: '28px', backgroundColor: Colors.blackColor}}
                >
                  <Card
                    sx={{
                      // backgroundColor: '#267883',
                      backgroundColor: '#26788380',
                      color: 'white',
                      padding: '28px 36px',
                    }}
                  >
                    <CardContent>
                      <Box>
                        <Typography
                          variant="h2"
                          fontSize={'36px'}
                          fontWeight={'600'}
                        >
                          The Ark Studio.
                        </Typography>
                        <Typography
                          variant="body1"
                          fontSize={'17px'}
                          fontWeight={'400'}
                          mt="10px"
                        >
                          How to contact with us
                        </Typography>
                      </Box>

                      <Stack rowGap={3} mt="40px">
                        <CardItem>
                          <MdEmail size={24} />
                          <Link
                            className="linkItem"
                            href={'mailTo: admin@theark.studio'}
                          >
                            <Typography variant="body1" fontSize="18px">
                              admin@theark.studio
                            </Typography>
                          </Link>
                        </CardItem>

                        <CardItem>
                          <FaPhoneAlt size={23} />
                          <Link className="linkItem" href={'tel: +84974602424'}>
                            <Typography variant="body1" fontSize="18px">
                              0974602424
                            </Typography>
                          </Link>
                        </CardItem>

                        <CardItem>
                          <IoHomeSharp size={24} />
                          <Link
                            className="linkItem"
                            href={'https://maps.app.goo.gl/kMjvGeDbyjEkUfaH9'}
                            target="_blank"
                          >
                            <Typography variant="body1" fontSize="18px">
                              145 Tran Dinh Xu street, Nguyen Cu Trinh ward,
                              District 1, HCM City
                            </Typography>
                          </Link>
                        </CardItem>
                      </Stack>

                      <Stack
                        flexDirection="row"
                        alignItems="center"
                        columnGap={1}
                        mt="60px"
                      >
                        <CardItemIcon>
                          <Link className="linkItemIcon" href={''}>
                            <FaFacebookF size={22} />
                          </Link>
                        </CardItemIcon>

                        <CardItemIcon>
                          <Link className="linkItemIcon" href={''}>
                            <FaInstagram size={22} />
                          </Link>
                        </CardItemIcon>

                        <CardItemIcon>
                          <Link className="linkItemIcon" href={''}>
                            <FaTiktok size={22} />
                          </Link>
                        </CardItemIcon>
                      </Stack>
                    </CardContent>
                  </Card>
                </Paper>
              </Grid>
              {/* right content */}
              <Grid laptop={4} xs={12} sx={{color: 'white', padding: '28px'}}>
                <Box>
                  <Typography
                    variant="h2"
                    fontSize="28px"
                    fontWeight="600"
                    mb="30px"
                  >
                    Suggestions and Questions
                  </Typography>
                  <Typography variant="body1" sx={{lineHeight: '32px'}}>
                    If you send us suggestions or questions regarding The Ark
                    Studio, we will actively consider them to provide better
                    services.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          <Box>
            <Paper
              sx={{
                backgroundColor: Colors.blackColor,
                borderRadius: '10px',
                marginTop: '60px',
              }}
            >
              <Grid laptop={12}>
                <MapStyles>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3906.067618506796!2d106.68462095237558!3d10.763088574626389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f19f0e81c25%3A0xdd47cb2189c57ef0!2zMTQ1IFRy4bqnbiDEkMOsbmggWHUsIFBoxrDhu51uZyBOZ3V54buFbiBDxrAgVHJpbmgsIFF14bqtbiAxLCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1729160760319!5m2!1sen!2s"
                    loading="lazy"
                  ></iframe>
                </MapStyles>
              </Grid>
            </Paper>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ContactScreen;

const CardItem = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 8px;

  .linkItem {
    text-decoration: none;
    display: inline-block;
    position: relative;
    color: ${Colors.whiteColor};
  }

  .linkItem::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 0;
    height: 1px;
    background-color: ${Colors.primaryColor};
    transition: all 0.3s ease-in-out;
  }
  .linkItem:hover::after {
    width: 100%;
  }
`;

const Pulse = keyframes`
  0% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
    }
`;

const CardItemIcon = styled(Box)`
  display: flex;
  justify-content: 'center';
  align-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  padding: 20px;
  .linkItemIcon svg path {
    color: ${Colors.whiteColor};
  }

  &:hover {
    background: #ffffff33;
    border-radius: 20px;
    animation: ${Pulse} 1s infinite;
  }
`;

const MapStyles = styled(Box)`
  iframe {
    width: 100%;
    height: 500px;
    display: block;
    margin-bottom: 100px;
  }
`;
