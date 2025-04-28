import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginImport from "eslint-plugin-import";
import { defineConfig } from "eslint/config";

export default defineConfig([
	{
		files: ["**/*.{js,mjs,cjs,jsx}"],
		plugins: {
			js,
			react: pluginReact,
			import: pluginImport,
		},
		languageOptions: {
			globals: globals.browser,
		},
		rules: {
			...js.configs.recommended.rules,
			...pluginReact.configs.recommended.rules,
			...pluginImport.configs.recommended.rules,
			"import/no-named-as-default": "error",
			"import/no-named-as-default-member": "error",
		},
	},
]);
