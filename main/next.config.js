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
            app1: "app1@http://localhost:3001/remoteEntry.js",
          },
          shared: {
          },
        })
      );

      return config;
    }
  }

  return nextConfig
}

