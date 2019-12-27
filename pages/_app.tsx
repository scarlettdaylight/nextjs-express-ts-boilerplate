import React from 'react';
import App from 'next/app';
import { Helmet } from 'react-helmet';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import Theme from '../assets/styles/theme';
import '../assets/styles/app.scss';
import LayoutSelector from '../layouts/LayoutSelector';

class MyApp extends App {
  render() {
    const currLang = 'en';

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
        <ThemeProvider theme={Theme}>
          <LayoutSelector {...this.props} />
        </ThemeProvider>
      </IntlProvider>
    );
  }
}

export default MyApp;
