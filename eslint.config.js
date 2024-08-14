import js from "@eslint/js";
import ts from "typescript-eslint";
import prettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
    js.configs.recommended,
    ...ts.configs.recommended,
    prettier,
    // {
    //     languageOptions: {
    //         globals: {
    //             ...globals.browser,
    //             ...globals.node,
    //         },
    //     },
    // },
    {
        files: ["**/*.ts", "**/*.js"],
        languageOptions: {
            parserOptions: {
                parser: ts.parser,
            },
        },
        rules: {
            "prefer-const": [
                "error",
                {
                    destructuring: "any",
                    ignoreReadBeforeAssign: false,
                },
            ],
            curly: ["error", "all"],
            "no-console": ["error", { allow: ["warn", "error", "info"] }],
        },
    },
    {
        ignores: ["build/", "dist/"],
    },
];