/* eslint-disable indent */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:unicorn/recommended',
    'airbnb',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'unicorn',
  ],
  settings: {
		react: {
			version: 'detect',
		},
	},
  rules: {
    semi: 'off',
    indent: 'off',
    'no-tabs': 'off',
		'@typescript-eslint/semi': 'error',
		'react/prop-types': 'warn',
		'no-restricted-syntax': 'off',
		'no-console': 'error',
    'no-prototype-builtins': 'off',
		'promise/always-return': 'off',
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor': 'error',
    'import/prefer-default-export': 'off',
	'import/no-default-export': 'off',
    'import/extensions': 'off',
    'linebreak-style': 'off',
    'import/no-unresolved': 'off',
    'padded-blocks': 'off',
    'eol-last': 'off',
    'comma-dangle': 'off',
    'react/jsx-filename-extension': 'off',
    'no-restricted-exports': 'off',
	'unicorn/filename-case': 'off',
	'unicorn/prefer-module': 'off',
	'react/function-component-definition': 'off',
	'react/destructuring-assignment': 'off',
	'react/button-has-type': 'off',
	'react/jsx-no-useless-fragment': 'off'
	// 'unicorn/prevent-abbreviations': 'off'
  },
  overrides: [
		{
			files: ['**/*-test.ts', '**/*-test.tsx'],
			env: {
				jest: true,
			},
		},
		{
			files: ['**/*.ts', '**/*.tsx'],
			plugins: ['@typescript-eslint'],
			rules: {
				'no-use-before-define': 'off',
				'@typescript-eslint/no-use-before-define': ['error'],
				'@typescript-eslint/explicit-module-boundary-types': ['off'],
				'@typescript-eslint/typedef': [
					'error',
					{
						parameter: true,
					},
				],
				'@typescript-eslint/no-inferrable-types': [
					'warn',
					{
						ignoreParameters: true,
					},
				],
			},
		},
	],
};
