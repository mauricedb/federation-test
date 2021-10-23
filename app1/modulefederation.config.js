const deps = require("./package.json").dependencies;

module.exports = {
  name: "app1",
  exposes: {
    "./Movies": "./src/components/Movies",
  },
  remotes: {
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
  },
};