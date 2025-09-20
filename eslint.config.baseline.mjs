// Baseline
import tsParser from "@typescript-eslint/parser";
import baselineJs from "eslint-plugin-baseline-js";

export default [
  { plugins: { "baseline-js": baselineJs } },
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: { project: ["./tsconfig.json"] }
    },
  },
  // Set Baseline to 2022 so Array by copy (2023) exceeds the threshold
  baselineJs.configs["recommended-ts"]({ available: 2022, level: "error" }),
];
