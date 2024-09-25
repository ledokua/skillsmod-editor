import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import legacy from "@vitejs/plugin-legacy"
import { VitePWA } from "vite-plugin-pwa"


// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		svelte(),
		legacy({
			targets: ["defaults"]
		}),
		VitePWA({
			manifest: false
		})
	],
	build: {
		rollupOptions: {
			output: {
				entryFileNames: "assets/[name].js",
				chunkFileNames: "assets/[name].js",
				assetFileNames: "assets/[name].[ext]"
			}
		}
	},
	base: "./"
})
