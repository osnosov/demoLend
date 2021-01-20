module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'script'
  },
  env: {
    browser: true,
    node: true,
    es2020: true
  },
  extends: ['prettier', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {}
}
