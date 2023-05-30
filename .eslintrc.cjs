/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-strongly-recommended',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:cypress/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: ['vue'],
  rules: {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'comma-spacing': ['error', {
      before: false, after: true,
    }],
    'vue/no-multi-spaces': 1,
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
    'brace-style': [2, 'stroustrup', {
      allowSingleLine: true,
    }],
    'vue/max-attributes-per-line': 1,

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    '@typescript-eslint/no-unused-vars': 'off',
    'import/first': 'off',
    'vue/component-tags-order': ['error', {
      order: [ 'script', 'template', 'style' ]
    }],
  },
  
};
