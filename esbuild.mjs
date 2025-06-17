import esbuild from "esbuild";

esbuild.buildSync({
  outdir: "dist",
  minify: true,
  sourcemap: true,
  target: "node20",
  banner: {
    js: `import { createRequire as topLevelCreateRequire } from \"module\"; const require = topLevelCreateRequire(import.meta.url);`,
  },
  bundle: true,
  platform: "node",
  entryPoints: ["src/index.ts"],
});