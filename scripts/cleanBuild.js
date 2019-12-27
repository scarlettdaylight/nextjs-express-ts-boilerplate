/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const rimraf = require('rimraf');

const BUILD_FOLDERS = [
  path.join(__dirname, '..', '/.next'),
  path.join(__dirname, '..', '/lang/.messages'),
];

rimraf(`{${BUILD_FOLDERS.join(',')}}`, (error) => {
  console.error('Failed to remove folders!');
  console.error(error);
});
