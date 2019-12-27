// Detect current environment
const dev = process.env.NODE_ENV !== 'production';

// Handle environment settings for non-production environments
if (dev) {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

const compression = require('compression');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const express = require('express');
const helmet = require('helmet');
const next = require('next');

// Polyfill DOMParser for react-intl
global.DOMParser = require('xmldom').DOMParser;

// Setup application port
const port = parseInt(process.env.PORT, 10) || 3000;

const app = next({ dev });
const nextHandler = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(helmet());
  server.use(compression());
  server.use(cookieParser());
  server.use(csrf({ cookie: true }));

  // --------------------- health check
  server.get('/health', (req, res) => res.sendStatus(200));

  server.all('*', (req, res) => nextHandler(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
