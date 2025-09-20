// compat
import tsParser from "@typescript-eslint/parser";
import compat from "eslint-plugin-compat";

export default [
  { plugins: { compat } },
  {
    files: ["**/*.ts"],
    languageOptions: { parser: tsParser, sourceType: "module" },
    rules: { "compat/compat": "error" },
    settings: {
      // Adjust targets as you like; setting older targets makes toSorted more likely to be flagged
      browsers: ["> 0.5%, last 2 versions, Firefox ESR, not dead"],
    },
  },
];
