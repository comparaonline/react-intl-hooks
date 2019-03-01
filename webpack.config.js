const { resolve } = require('path');
const { tsConfig } = require('@comparaonline/ui-config-webpack');

module.exports = tsConfig({
  output: {
    path: resolve(__dirname, 'dist')
  }
});
