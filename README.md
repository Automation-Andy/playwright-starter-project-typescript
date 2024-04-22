# Playwright Typescript Starter Project

Starter project for Playwright using TypeScript.  Includes eslint, prettier, and husky pre-commit hooks for staged files.

## Install Node and VS Code (unless already installed)
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
* Run `npm init playwright@latest` and accept the defaults to the prompts and install the browers when asked.

### Pre-Commit Hook
Reasons to use pre-commit hooks:
* **Consistency**: Pre-commit hooks help enforce coding standards and practices, leading to consistent code throughout your project.
* **Error Prevention**: They help catch issues early, recuding the likelihood of defects and errors making their way into your codebase.
* **Efficiency**: Automating checks and tests saves time by identifying problems before they impact your project.
* **Automated Code Formatting**: Enforce code formatting and standards, saving hours of development time time and ensuring the code is consistent and easy to understand across the codebase. 

This project utilizes [Husky](https://www.npmjs.com/package/husky) as the pre-commit tool, which automatically runs whenever a `git commit` is executed and [lint-staged](https://www.npmjs.com/package/lint-staged) which will run specified scripts on matching staged files.



The [pre-commit](.husky/pre-commit) file does three things:
1. Writes to the terminal that it is going to check style, formatting etc.\
    `🏗️👷 -- Check styling, formatting, and Typescript code before committing -- 👷🏗️`
2. It will then execute `lint-staged` which is configed within the [package.json](package.json) file.
3. Output lint/typescript errors and stop, or that everything is fine\
    `🏗️👷 -- Check styling, formatting, and Typescript code before committing -- 👷🏗️`

### Lint Staged Configuration
The [package.json](package.json) file contains the following:
```
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