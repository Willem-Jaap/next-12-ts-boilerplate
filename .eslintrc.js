module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021, // Version of ECMAScript
        sourceType: 'module', // Enables ECMAScript modules
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    extends: [
        'plugin:react/recommended', // Specify rules for React
        'plugin:react-hooks/recommended', // Specify rules for React hooks
        'plugin:@typescript-eslint/recommended', // Specify rules for Typescript
        'plugin:prettier/recommended', //Specify rules for Prettier
    ],
    // End of line fix for windows CRLF | LF, Disable react/proptypes. this is done via FC.
    rules: { 'prettier/prettier': ['error', { endOfLine: 'auto' }], 'react/prop-types': 0 },
};
