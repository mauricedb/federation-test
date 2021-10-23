// module.exports = {
//   reactStrictMode: true,

  
// }

const deps = require("./package.json").dependencies;

module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: true,
    webpack(config, options) {
      const { ModuleFederationPlugin } = options.webpack.container;

      config.plugins.push(
        new ModuleFederationPlugin({
          remotes: {
            // app2: "app2@https://kevinmfe.s3.amazonaws.com/app2/dist/remoteEntry.js",
            app1: "app1@http://localhost:3001/remoteEntry.js",
          },
          shared: {
            react: {
              singleton: true,
              eager: true,
              requiredVersion: deps["react"],
            },
            "react-dom": {
              singleton: true,
              eager: true,
              requiredVersion: deps["react-dom"],
            },
        
          },
        })
      );

      return config;
    }
  }

  return nextConfig
}

