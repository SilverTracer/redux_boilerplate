module.exports = {
  extends: ['airbnb-typescript'],
  root: true,
  env: {
    es6: true,
    browser: true
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js', 'webpack.config.js'],
}