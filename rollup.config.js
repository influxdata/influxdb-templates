import json from "rollup-plugin-json";

const pkg = require("./package.json");

const jsonPlugin = json({
  include: "templates/**",
  indent: "  ",
  compact: false,
  namedExports: false
});

export default [
  {
    input: "index.js",
    output: {
      name: pkg.name,
      file: pkg.main,
      format: "umd"
    },
    plugins: [jsonPlugin]
  },
  {
    input: "index.js",
    output: {
      name: pkg.name,
      file: pkg.module,
      format: "esm"
    },
    plugins: [jsonPlugin]
  }
];
