// module.exports = {
//   reactStrictMode: true,

  
// }



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
          },
          shared: [],
        })
      );

      return config;
    }
  }

  return nextConfig
}

