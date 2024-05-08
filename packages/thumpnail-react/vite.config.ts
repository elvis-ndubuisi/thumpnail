import path from "node:path";
import react from "@vitejs/plugin-react-swc";
import {defineConfig} from "vite";
import dts from "vite-plugin-dts";

import {peerDependencies} from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: true,
    target: "esnext",
    lib: {
      entry: path.resolve(__dirname, path.join("src", "index.ts")),
      formats: ["es", "cjs"],
      fileName: "index",
    },
    rollupOptions: {
      // Exclude peer dependencies from the bundle to reduce bundle size
      external: ["react/jsx-runtime", ...Object.keys(peerDependencies)],
    },
  },
  plugins: [react(), dts({rollupTypes: true})], // Outputs .d.ts files
});
