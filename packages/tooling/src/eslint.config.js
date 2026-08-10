import js from "@eslint/js";
import boundaries from "eslint-plugin-boundaries";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tseslint from "typescript-eslint";

export function createEslintConfig({
  tsconfig = "./tsconfig.json",
  boundaryElements = [],
} = {}) {
  return tseslint.config(
    { ignores: ["dist", "node_modules", "*.d.ts"] },
    {
      extends: [js.configs.recommended, ...tseslint.configs.recommended],
      files: ["**/*.{ts,tsx}"],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
      },
      plugins: {
        "react-hooks": reactHooks,
        "react-refresh": reactRefresh,
        boundaries,
      },
      settings: {
        "import/resolver": {
          typescript: {
            project: tsconfig,
          },
        },
        "boundaries/elements": boundaryElements,
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        "react-refresh/only-export-components": [
          "warn",
          { allowConstantExport: true },
        ],
      },
    },
  );
}
