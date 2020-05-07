module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ["airbnb-base"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    rules: {
        "import/extensions": 0,
        "no-plusplus": 0,
        "import/prefer-default-export": 0,
        "class-methods-use-this": 0,
        quotes: 0,
        "operator-linebreak": 0,
        "no-restricted-globals": 0,
        "no-return-await": 0,
    },
};