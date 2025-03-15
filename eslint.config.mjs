import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/** 
 * Here we pull in the default Next.js + TS settings,
 * then add our own overrides in a second object.
 */
const eslintConfig = [
  // 1. Bring in the standard Next.js core-web-vitals + TypeScript checks
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 2. Add/override specific rules here
  {
    rules: {
      // Convert no-unescaped-entities from "error" -> "warn"
      "react/no-unescaped-entities": "warn",
      // Add other custom rule overrides here if you need them
    },
  },
];

export default eslintConfig;
