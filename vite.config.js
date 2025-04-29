import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@components": path.resolve(__dirname, "src/components"),
			"@hooks": path.resolve(__dirname, "src/hooks"),
			"@systems": path.resolve(__dirname, "src/systems"),
			"@data": path.resolve(__dirname, "src/data"),
			"@city": path.resolve(__dirname, "src/components/City"),
		},
	},
});
