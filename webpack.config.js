const path = require('path');

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};