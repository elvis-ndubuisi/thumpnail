import {defineConfig} from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  outDir: "./dist",
  format: ["cjs", "esm"],
  legacyOutput: true,
  sourcemap: true,
  clean: true,
  splitting: false,
  dts: false,
  minify: true,
});
