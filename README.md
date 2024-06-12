# Playwright Typescript Starter Project

Starter project for Playwright using TypeScript.  Includes eslint, prettier, and husky pre-commit hooks for staged files.

# Table of Contents
1. [Install Node and VS Code](#install-node-and-vs-code)
2. [Create a Folder For Your Starter Project](#create-a-folder-for-your-starter-project)
3. [Clone The Repository](#clone-the-repository)
4. [Install The Project Dependencies](#install-the-project-dependencies)
5. [Pre-Commit Hook](#pre-commit-hook)
6. [ESLint](#eslint)
7. [Lint Staged Configuration](#lint-staged-configuration)


## Install Node and VS Code
1. Make sure you have the latest version of [Node](https://nodejs.org/en/download) installed.
2. Download and install [VS Code](https://code.visualstudio.com/download).
3. Install [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Create a Folder For Your Starter Project
* Using a Command Prompt `WindowsKey+R` and `cmd`
* Create a folder to clone this repo into - eg; `mkdir playwright`
* Go into that folder `cd playwright`

## Clone The Repository
* Run `git clone http:github.com/automation-andy/playwright-starter-project-typescript`
* Open folder in VS Code `code .`

## Install The Project Dependencies
* In VS Code, open a terminal `Ctrl+Shift+'`
* Run `npm i`
* Run `npm init playwright@latest` and accept the defaults to the prompts and install the browsers when asked.

### Pre-Commit Hook
Reasons to use pre-commit hooks:
* **Consistency**: Pre-commit hooks help enforce coding standards and practices, leading to consistent code throughout your project.
* **Error Prevention**: They help catch issues early, reducing the likelihood of defects and errors making their way into your codebase.
* **Efficiency**: Automating checks and tests saves time by identifying problems before they impact your project.
* **Automated Code Formatting**: Enforce code formatting and standards, saving hours of development time time and ensuring the code is consistent and easy to understand across the codebase. 

This project utilizes [Husky](https://www.npmjs.com/package/husky) as the pre-commit tool, which automatically runs whenever a `git commit` is executed and [lint-staged](https://www.npmjs.com/package/lint-staged) which will run specified scripts on matching staged files.


The [pre-commit](.husky/pre-commit) file does three things:
1. Writes to the terminal that it is going to check style, formatting etc.\
    `🏗️👷 -- Check styling, formatting, and Typescript code before committing -- 👷🏗️`
2. It will then execute `lint-staged` which is configured within the [package.json](package.json) file.
3. Output lint/typescript errors and stop, or that everything is fine\
    `🏗️👷 -- Check styling, formatting, and Typescript code before committing -- 👷🏗️`

### ESLint
[ESLint](https://eslint.org/) is designed to find and fix problems in your Javascript code.

Reasons to use ESLint:
* **Static Analysis**: ESLint statically analyzes your code to quickly find problems or code that doesn't adhere to certain guidelines.
* **Customizable**: Rules are configurable, and customized rules can be defined and loaded. Those rules can be turned on or off.
* **Automatic Fixes**: Many problems found can be automatically fixed.

If you are unfamiliar with ESLint, follow the steps below for a simple demonstration.
1. Open [.eslintrc.js](.eslintrc.js) and at the bottom you will see the `playwright/expect-expect` set to `error`, which is a default configuration.
2. Open [example.spec.ts](tests\example.spec.ts) and comment out line 17 `// await expect`...

The entire test will now have an error denoted by red lines.  Hover over the red lines and you will see '**Test has no assertions eslintplaywright/expect-expect**'

3. Save the test file and in the terminal, run `npm run lint`

You will see the following error:
```
playwright-starter-project-typescript\tests\example.spec.ts
  10:1  error  Test has no assertions  playwright/expect-expect

✖ 1 problem (1 error, 0 warnings)
```

The [pre-commit](.husky/pre-commit) hook would also catch and stop these changes from being committed.


### Lint Staged Configuration
The [package.json](package.json) file contains the following:
```json
"lint-staged": {
    "**/*.ts": [
      "npm run check-typescript",
      "npm run lint",
      "npm run pretty-quick"
    ]
  },
```

This indicates that the specified scripts will be executed against TypeScript files. However, this configuration can be modified to suit your specific requirements.

Each command executed via `npm run` corresponds to a script defined in the [package.json](package.json) file. These scripts are designed to perform checks for TypeScript errors, linting errors, and to execute Prettier on the staged files.