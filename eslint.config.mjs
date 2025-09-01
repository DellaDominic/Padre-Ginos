import js from "@eslint/js"; // why @? - cuz eslint is scoped package i.e. it belongs to the organization, eslint
import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
//explains the type of the below export.
// This helps with editor autocomplete, type checking, and documentation when writing your ESLint config.

export default [
  js.configs.recommended,
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: "detect", // Automatically detect the react version
      },
    },
  },
  reactPlugin.configs.flat["jsx-runtime"], // to enable the new jsx transform - react 17+ - does not require import React from 'react' for every file with jsx
  {
    files: ["**/*.js", "**/*.ts", "**/*.jsx", "**/*.tsx"], // lint these files
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
      "react/prop-types": "off", // we are not using prop types, we can use typescript for type checking
      "react/no-unescaped-entities": "off", // to allow ' in jsx, else you have to use &apos; or &#39;
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // warn for unused vars, but ignore those starting with _
      "react/jsx-key": "warn", // warn if key prop is missing in iterated jsx elements
  },
  prettier, // make sure to put prettier at the end so it can override other conflicting eslint rules or configs
  //   If you put prettier before other configs, those configs might re-enable rules that Prettier disables, causing formatting conflicts and unnecessary lint errors.
];
// https://eslint.org/docs/latest/use/configure/configuration-files
