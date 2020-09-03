module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/essential'
  ],
  plugins: ['vue'],
  rules: {
    quotes: ['warn', 'single'],
    semi: [2, 'never'],
    'no-console': 'off',
    'vue/max-attributes-per-line': 'off'
  }
}
