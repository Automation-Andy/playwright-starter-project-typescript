module.exports = {
    "env": {
        "node": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:playwright/recommended"
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
        // playwright/recommended default rule set https://www.npmjs.com/package/eslint-plugin-playwright
    }
}
