module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  plugins: ['eslint-plugin-prettier'],
  extends: ['get-off-my-lawn', 'eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'prettier/prettier': 'warn',
    'sort-keys': 'off',
    'import/order': 'off', // we use prettier for that
    'node/no-sync': 'off',
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/string-content': 'off', // get-off-my-lawn suggests https usage with bugged auto-fix
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  overrides: [
    {
      files: '**/*.spec.js',
      globals: {
        chance: false,
      },
    },
  ],
};
