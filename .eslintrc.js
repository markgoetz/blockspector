module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@emotion',
        '@typescript-eslint'
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    env: {
        "browser": true,
        "amd": true,
        "node": true
    },
    rules: {
        "@emotion/jsx-import": "error",
        '@emotion/syntax-preference': [2, "object"],
    }
};
