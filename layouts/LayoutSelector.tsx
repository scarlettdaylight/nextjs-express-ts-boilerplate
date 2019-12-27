import React, { FC } from 'react';
import { AppInitialProps } from 'next/app';
import { useRouter } from 'next/router';
import LayoutBasic from './LayoutBasic';
import LayoutError from './LayoutError';

export interface LayoutSelectorProps {
  Component: React.ComponentType;
  pageProps: AppInitialProps['pageProps'];
}

// select layout base on route
const LayoutSelector: FC<LayoutSelectorProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  switch (router.route) {
    case '/':
    case '/user/profile':
      return (
        <LayoutBasic>
          <Component {...pageProps} />
        </LayoutBasic>
      );
    default:
      console.warn(`${router.route} has no layout selected!`);
      return (
        <LayoutError>
          <Component {...pageProps} />
        </LayoutError>
      );
  }
};

export default LayoutSelector;
