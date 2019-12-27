import React from 'react';
import App, { AppContext, AppInitialProps } from 'next/app';
import { Helmet } from 'react-helmet';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import { createRootStore, InitialStoreData, StoreProvider } from '../stores';
import Theme from '../assets/styles/theme';
import '../assets/styles/app.scss';
import LayoutSelector from '../layouts/LayoutSelector';

interface AppProps extends AppInitialProps {
  initialStore: InitialStoreData;
}

class MyApp extends App<AppProps> {
  static async getInitialProps({ Component, ctx }: AppContext): Promise<AppProps> {
    let pageProps = {};

    const initStore = {};

    const initialStore = createRootStore(initStore);

    // Provide the store to getInitialProps of pages
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ...ctx, initialStore });
    }

    return {
      pageProps,
      initialStore,
    };
  }

  render() {
    const currLang = 'en';

    const { initialStore, ...restProps } = this.props;

    return (
      <IntlProvider locale={currLang}>
        <Helmet
          htmlAttributes={{ lang: currLang }}
          title="nextjs-express-ts-boilerplate"
          meta={[
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
            { property: 'og:title', content: 'nextjs-express-ts-boilerplate' },
          ]}
          link={[{ rel: 'shortcut icon', href: '/favicon.ico' }]}
        />
        <StoreProvider initialData={initialStore}>
          <ThemeProvider theme={Theme}>
            <LayoutSelector {...restProps} />
          </ThemeProvider>
        </StoreProvider>
      </IntlProvider>
    );
  }
}

export default MyApp;
