module.exports = {
    "extends": [
        "eslint:all",
        "plugin:react/all"
    ],
    "plugins": [
        "@typescript-eslint",
        "react-hooks",
        "react",
        "simple-import-sort"
    ],
    "parser": "@typescript-eslint/parser",
    "overrides": [
        {
            "files": [
                "*.ts",
                "*.tsx"
            ],
            "parserOptions": {
                "project": ["tsconfig.json"],
                "tsconfigRootDir": __dirname
            },
            "rules": {
                "@typescript-eslint/no-unused-vars": [
                    "error",
                    {
                        "argsIgnorePattern": "^_",
                        "varsIgnorePattern": "^_",
                        "caughtErrorsIgnorePattern": "^_"
                    }
                ],
                "indent": [
                    "error",
                    2,
                    {"SwitchCase": 1}
                ],
                "no-unused-vars": "off",
                "no-console": "error",
                "semi": "error",
                "object-curly-spacing": [
                    "error",
                    "always"
                ],
                "array-bracket-spacing": [
                    "error",
                    "never"
                ],
                "space-in-parens": [
                    "error",
                    "never"
                ],
                "space-before-blocks": "error",
                "space-before-function-paren": [
                    "error",
                    {
                        "anonymous": "never",
                        "named": "never",
                        "asyncArrow": "always"
                    }
                ],
                "keyword-spacing": [
                    "error",
                    {"before": true,
                        "after": true}
                ],
                "comma-dangle": [
                    "error",
                    "always-multiline"
                ],
                "max-len": [
                    "error",
                    {"code": 100,
                        "tabWidth": 2,
                        "ignoreComments": true,
                        "ignoreStrings": true}
                ],
                "arrow-parens": [
                    "error",
                    "as-needed"
                ],
                "@typescript-eslint/no-floating-promises": "error",
                "jsx-quotes": [
                    "error",
                    "prefer-single"
                ],
                "no-multiple-empty-lines": [
                    "error",
                    {"max": 1}
                ],
                "comma-spacing": "error",
                "simple-import-sort/imports": [
                    "error",
                    {
                        "groups": [
                            // Side effect imports.
                            ["^\\u0000"],

                            // React, all other
                            [
                                "^react$",
                                "^@?react-native",
                                "^@?\\w"
                            ],

                            /*
                             * Relative imports.
                             * Anything that starts with a dot.
                             */
                            [
                                "^\\.\\.",
                                "^\\./(?=.*/)(?!/?$)",
                                "^\\.(?!/?$)",
                                "^\\./?$"
                            ]
                        ]
                    }
                ],
                "simple-import-sort/exports": "error",

                // React Hooks rules
                "react-hooks/rules-of-hooks": "error",
                "react-hooks/exhaustive-deps": "error",
                "react/prop-types": "off"
            }
        }
    ]
};
