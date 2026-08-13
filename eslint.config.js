import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),

  {
    files: ["**/*.{js,jsx}"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      ...js.configs.recommended.rules,

      ...react.configs.flat.recommended.rules,

      ...reactHooks.configs.recommended.rules,

      // React 17+ / Vite uses the automatic JSX transform
      "react/react-in-jsx-scope": "off",

      // This project does not use PropTypes
      "react/prop-types": "off",

      // Unused variables
      "no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^[A-Z_]",
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],

      // React Fast Refresh
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],
    },
  },
]);