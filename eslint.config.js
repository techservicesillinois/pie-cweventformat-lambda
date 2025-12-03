const {
    defineConfig,
} = require("eslint/config");
const js = require("@eslint/js");


const globals = require("globals");

module.exports = defineConfig([
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                ...globals.commonjs,
                ...globals.node,
            },

            ecmaVersion: "latest",
            parserOptions: {},
        },

        rules: {},
    },
]);
