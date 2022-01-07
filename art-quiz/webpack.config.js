const path = require('path');

module.exports = {
  entry: {
    app: './src/app.js',
    main: './src/index.js',
    menu: './src/menu.js',
    photo: './src/photo.js',
    score: './src/score.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'eval-source-map',
};
