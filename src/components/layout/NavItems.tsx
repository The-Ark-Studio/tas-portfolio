'use client';
import {TITLE_NAV} from '@/constants';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import {usePathname} from 'next/navigation';
import React from 'react';

export const NavItems = () => {
  const pathName = usePathname();

  return (
    <React.Fragment>
      {TITLE_NAV.map((i) => (
        <NextLink key={i.id} legacyBehavior passHref href={i.href}>
          <Link
            className="link-hover"
            sx={{
              textDecoration: 'none',
              color:
                pathName === i.href ||
                (pathName.includes('projects') && i.href.includes('projects'))
                  ? '#F44061'
                  : '#F2F4F5',
              fontWeight:
                pathName === i.href ||
                (pathName.includes('projects') && i.href.includes('projects'))
                  ? 600
                  : 300,
              '&:hover': {
                color: '#F44061',
              },
            }}
          >
            {i.title}
          </Link>
        </NextLink>
      ))}
    </React.Fragment>
  );
};
