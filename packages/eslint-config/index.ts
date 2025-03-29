import * as js from "@eslint/js";
import * as solid from "eslint-plugin-solid";
import * as globals from "globals";
import ts from "typescript-eslint";

export const config = ts.config(
	js.configs.recommended,
	...ts.configs.recommended,
	{
		...solid,
		files: ["**/*.{ts,tsx}"],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
		rules: {
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/no-namespace": "off",
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					varsIgnorePattern: "^_",
					argsIgnorePattern: "^_",
					destructuredArrayIgnorePattern: "^_",
				},
			],
		},
	},
	{
		ignores: ["**/build/**", "**/dist/**", "**/node_modules/**"],
	}
);
