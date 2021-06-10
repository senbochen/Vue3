module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
    'plugin:import/typescript',
  ],

  settings: {
    'import/ignore': ['.ts$'],
  },
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'arrow-parens': ['error', 'always'],
    'vue/html-closing-bracket-newline': 'off',
    'no-tabs': 'off',
    'no-console': 'off',
    'vue/no-v-model-argument': 'off',
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 'off',
    'trailingComma': 'off',
  },
}
