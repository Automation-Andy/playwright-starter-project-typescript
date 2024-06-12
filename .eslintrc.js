module.exports = {
    "env": {
        "node": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended", // https://eslint.org/docs/latest/rules/
        "plugin:@typescript-eslint/recommended",
        "plugin:playwright/recommended" // https://www.npmjs.com/package/eslint-plugin-playwright
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            files: ['*.ts', '*.tsx'],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "prettier", "@typescript-eslint"
    ],
    "rules": {
        // you can customize rules in this section.  See https://www.npmjs.com/package/eslint-plugin-playwright
        // for rule configuration details.
        "playwright/expect-expect": [
            "error",
        ]
    }
}
