// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/",
    public: "/",
  },
  alias: {
    "@components": "./src/components",
  },
  optimize: {
    bundle: true,
    minify: true,
    target: "es2017",
  },
};
