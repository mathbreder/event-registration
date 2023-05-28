// eslint-disable-next-line no-undef
module.exports = {
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: [ 'react', 'react-refresh', '@typescript-eslint', 'simple-import-sort', 'import' ],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/jsx-closing-bracket-location': 1,
    indent: [ 'error', 2 ],
    'linebreak-style': 0,
    quotes: [ 'error', 'single' ],
    semi: [ 'error', 'always' ],
    'comma-dangle': [ 'error', 'never' ],
    'react/react-in-jsx-scope': 'off',
    'max-len': [ 'error', { 'code': 120 } ],
    'object-curly-spacing': [ 'error', 'always' ],
    'arrow-parens': [ 'error', 'always' ],
    'import/no-unresolved': [ 2, { 'commonjs': true, 'amd': true } ],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages `react` related packages come first.
          [ '^react', '^@?\\w' ],
          // Internal packages.
          [ '^(@|components)(/.*|$)' ],
          // Side effect imports.
          [ '^\\u0000' ],
          // Parent imports. Put `..` last.
          [ '^\\.\\.(?!/?$)', '^\\.\\./?$' ],
          // Other relative imports. Put same-folder imports and `.` last.
          [ '^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$' ],
          // Style imports.
          [ '^.+\\.?(css)$' ]
        ]
      }
    ],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        extensions: [ '.js', '.jsx', '.ts', '.tsx' ]
      },
      typescript: true
    }
  }
};
