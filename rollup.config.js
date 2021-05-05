import pkg from "./package.json";

export default {
    input: ["./src/module.js"],
    external: Object.keys(pkg.dependencies || {}),
    output: {
        dir: "./",
        format: "cjs",
        sourcemap: true,
    },
};
