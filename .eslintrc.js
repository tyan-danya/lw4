module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    node: true
  },
  extends: [
    "airbnb-base",
    'prettier'
  ],
  plugins: [
    "prettier"
  ],
  parserOptions: {
    ecmaVersion: 2017
  },
  rules: {
    'linebreak-style': 0,
    'no-plusplus': 0,
    'prettier/prettier': ['error', {
      "endOfLine": "auto"
    }]
  }
};