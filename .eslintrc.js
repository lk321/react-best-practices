module.exports = {
    env: {
        browser: true,
        es2021: true,
        es6: true,
        jest: true,
    },
    extends: ["airbnb", "prettier"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": "error",
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    },
};
