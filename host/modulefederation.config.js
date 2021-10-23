const deps = require("./package.json").dependencies;

module.exports = {
  name: "host",
  exposes: {
    // "./Movies": "./src/components/Movies",
  },
  remotes: {
    // app2: "app2@http://localhost:3002/remoteEntry.js",
    app1: "app1@http://localhost:3001/remoteEntry.js",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      // eager: true,
      requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      // eager: true,
      requiredVersion: deps["react-dom"],
    },
  },
};