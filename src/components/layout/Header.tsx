'use client';
import BurgerIcon from '@/assets/icons/burger-icon.svg';
import Logo from '@/assets/images/logo.svg';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import NextLink from 'next/link';
import {usePathname} from 'next/navigation';
import React, {useCallback} from 'react';

import {NavigationPath, TITLE_NAV} from '@/constants';

import dynamic from 'next/dynamic';

const NavItems = dynamic(
  () => import('./NavItems').then((module) => module.NavItems),
  {ssr: false}
);

export const Header = ({isMobile}: {isMobile: boolean}) => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = useCallback((open: boolean) => {
    setIsOpen(open);
  }, []);
  const ListDrawer = () => (
    <Box
      role="presentation"
      sx={{
        width: 250,
        background: '#101B25',
        height: '100vh',
        color: '#F2F4F5',
        p: 2,
      }}
      onClick={() => toggleDrawer(false)}
    >
      <List>
        <CloseIcon sx={{float: 'right'}} onClick={() => toggleDrawer(false)} />
        {TITLE_NAV.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{
                textDecoration: 'none',
                color:
                  pathName === item.href ||
                  (pathName.includes('projects') &&
                    item.href.includes('projects'))
                    ? '#F44061'
                    : '#F2F4F5',
                fontWeight:
                  pathName === item.href ||
                  (pathName.includes('projects') &&
                    item.href.includes('projects'))
                    ? 600
                    : 300,
                '&:hover': {
                  color: '#F44061',
                },
              }}
              onClick={() => toggleDrawer(false)}
            >
              <NextLink key={item.id} legacyBehavior passHref href={item.href}>
                <ListItemText primary={item.title} />
              </NextLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Grid
      container
      sx={{
        backgroundColor: '#101B25',
        p: 2,
      }}
    >
      <Grid
        container
        item
        sx={{
          width: isMobile ? '100%' : '80%',
          marginX: 'auto',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Grid
          container
          item
          lg={4}
          md={5}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: isMobile ? 'none' : null,
            color: '#F2F4F5',
          }}
          xs={isMobile ? 6 : 3}
        >
          <Image
            alt="logo"
            height={isMobile ? 20 : 32}
            loading="lazy"
            src={Logo}
            style={{marginRight: '1rem'}}
            width={isMobile ? 20 : 32}
          />
          <NextLink legacyBehavior passHref href={NavigationPath.HOME}>
            <Link
              sx={{
                color: '#F2F4F5',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: isMobile ? '1rem' : '2rem',
              }}
            >
              The Ark Studio.
            </Link>
          </NextLink>
        </Grid>
        <Grid
          container
          item
          lg={4}
          md={7}
          sx={
            isMobile
              ? {justifyContent: 'flex-end'}
              : {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  color: '#F2F4F5',
                }
          }
          xs={isMobile ? 6 : 5}
        >
          {isMobile ? (
            <React.Fragment key={'right'}>
              <Button onClick={() => toggleDrawer(true)}>
                <Image
                  alt="burger-icon"
                  height={24}
                  src={BurgerIcon}
                  width={24}
                />
              </Button>
              <Drawer
                anchor={'right'}
                open={isOpen}
                onClose={() => toggleDrawer(false)}
              >
                <ListDrawer />
              </Drawer>
            </React.Fragment>
          ) : (
            <NavItems />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
