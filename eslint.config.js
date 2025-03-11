import tsEslint from "@typescript-eslint/parser";
import pluginTypescript from "typescript-eslint";
import pluginPrettier from "eslint-plugin-prettier";
import pluginSolid from "eslint-plugin-solid";
import pluginMDX from "eslint-plugin-mdx";
import globals from "globals";

export default [
	{
		ignores: ["**/build/**", "**/dist/**", "**/node_modules/**"],
	},
	...pluginTypescript.configs.recommended,
	pluginPrettier,
	{
		files: ["**/*.ts", "**/*.tsx"],
		languageOptions: {
			parser: tsEslint.parser,
			parserOptions: {
				sourceType: "module",
				project: "./tsconfig.json",
				ecmaFeatures: {
					jsx: true,
				},
			},
			globals: {
				...globals.browser,
				...globals.es2022,
			},
		},
		plugins: pluginSolid.plugins,
		rules: {
			...pluginSolid.rules,
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
];
