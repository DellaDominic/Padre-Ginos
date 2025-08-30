import js from "@eslint/js"; // why @? - cuz eslint is scoped package i.e. it belongs to the organization, eslint
import globals from "globals";
import prettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
//explains the type of the below export.
// This helps with editor autocomplete, type checking, and documentation when writing your ESLint config.

export default [
  js.configs.recommended,
  {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      // your custom rules
    },
  },
  prettier, // make sure to put prettier at the end so it can override other conflicting eslint rules or configs
  //   If you put prettier before other configs, those configs might re-enable rules that Prettier disables, causing formatting conflicts and unnecessary lint errors.
];
// https://eslint.org/docs/latest/use/configure/configuration-files
