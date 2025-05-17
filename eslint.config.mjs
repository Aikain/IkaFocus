import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import ts from 'typescript-eslint';

export default ts.config(
    {
        files: ['**/*.{mjs,ts,tsx}'],
        settings: {
            react: {
                version: 'detect',
            },
        },
    },

    js.configs.recommended,
    ts.configs.recommended,
    react.configs.flat.recommended,
    react.configs.flat['jsx-runtime'],
    reactHooks.configs['recommended-latest'],

    {
        rules: {
            '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
        },
    },

    // Oltava viimeinen tässä listassa!
    prettier,
);
