import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

export default [
  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: "src/colorid.ts",
    external: ["crypto"],
    output: [
      { name: "colorid", file: pkg.exports["."].default, format: "cjs" },
    ],
    plugins: [
      typescript({
        compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" },
      }),
    ],
  },

  // browser-friendly UMD build
  {
    input: "src/browser.ts",
    output: {
      name: "colorid",
      file: pkg.exports["."].browser,
      format: "umd",
    },
    plugins: [
      typescript({
        compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" },
      }),
    ],
  },
];
