module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
    'plugin:react/recommended',
  ],
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'no-console': 'off',
    'require-jsdoc': 0,
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],//fixed linter issue
    'max-len': ['error', {
      code: 200,
      tabWidth: 2,
      ignoreUrls: true,
      ignorePattern: 'goog\.(module|require)',
    }],
  },
};
