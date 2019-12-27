/* eslint-disable import/no-extraneous-dependencies */
const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');
const glob = require('glob');

const defaultMessages = glob
  .sync('./lang/.messages/**/*.json')
  .map((filename) => readFileSync(filename, 'utf8'))
  .map((file) => JSON.parse(file))
  .reduce((messages, descriptors) => {
    const outputMessages = messages;
    descriptors.forEach(({ id, defaultMessage }) => {
      if (Object.prototype.hasOwnProperty.call(outputMessages, id)) {
        throw new Error(`Duplicate message id: ${id}`);
      }
      outputMessages[id] = defaultMessage;
    });
    return outputMessages;
  }, {});

writeFileSync('./lang/en.json', JSON.stringify(defaultMessages, null, 2));
console.log(`> Wrote default messages to: "${resolve('./lang/en.json')}"`);
