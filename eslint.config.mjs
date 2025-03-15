import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// This array is your entire ESLint config
const eslintConfig = [
  // Bring in the default Next.js + TypeScript ESLint settings
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add your own custom rules here
  {
    rules: {
      "react/no-unescaped-entities": "warn",
      // You can override other rules here if needed
    },
  },
];

export default eslintConfig;
