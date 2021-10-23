const cracoModuleFederation = require('craco-module-federation');

module.exports = {
    plugins: [{
        plugin: cracoModuleFederation,
        options: { useNamedChunkIds:true } //THIS LINE IS OPTIONAL
      },
    ],
    webpack: {
      configure: function(webpackConfig) {
      
        webpackConfig.externals = {
          ...webpackConfig.externals,
          'react': 'React',
          'react-dom': 'ReactDOM'
        }

        return webpackConfig;
      }
    },
}