import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import eslintConfigPrettier from "eslint-config-prettier";
import testingLibrary from "eslint-plugin-testing-library";
import jestDom from "eslint-plugin-jest-dom";

export default [
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  eslintConfigPrettier,
  {
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
  {
    files: ["**/*.[jt]s?(x)"],
    plugins: {
      "testing-library": testingLibrary,
      "jest-dom": jestDom,
    },
    rules: {
      // Gave up on extending recommended React rules with ESLint flat config.
      "testing-library/await-async-events": [
        "error",
        { eventModule: "userEvent" },
      ],
      "testing-library/await-async-queries": "error",
      "testing-library/await-async-utils": "error",
      "testing-library/no-await-sync-events": [
        "error",
        { eventModules: ["fire-event"] },
      ],
      "testing-library/no-await-sync-queries": "error",
      "testing-library/no-container": "error",
      "testing-library/no-debugging-utils": "warn",
      "testing-library/no-dom-import": ["error", "react"],
      "testing-library/no-global-regexp-flag-in-query": "error",
      "testing-library/no-manual-cleanup": "error",
      "testing-library/no-node-access": "error",
      "testing-library/no-promise-in-fire-event": "error",
      "testing-library/no-render-in-lifecycle": "error",
      "testing-library/no-unnecessary-act": "error",
      "testing-library/no-wait-for-multiple-assertions": "error",
      "testing-library/no-wait-for-side-effects": "error",
      "testing-library/no-wait-for-snapshot": "error",
      "testing-library/prefer-find-by": "error",
      "testing-library/prefer-presence-queries": "error",
      "testing-library/prefer-query-by-disappearance": "error",
      "testing-library/prefer-screen-queries": "error",
      "testing-library/render-result-naming-convention": "error",
      "jest-dom/prefer-in-document": "error",
    },
  },
];
