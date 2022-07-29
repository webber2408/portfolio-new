const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = function override(config, env) {
  // Remove default terser minimizer
  config.optimization.minimizer.shift();
  // Enable Uglify JS minimizer
  config.optimization.minimizer.push(new UglifyJsPlugin());
  console.log(config);
  return config;
};

/*

DEFAULT CONFIGURATION
=====================


{
  target: [ 'browserslist' ],
  stats: 'errors-warnings',
  mode: 'production',
  bail: true,
  devtool: 'source-map',
  entry: '/Users/rahulsharma/Sandbox/portfolio/src/index.js',
  output: {
    path: '/Users/rahulsharma/Sandbox/portfolio/build',
    pathinfo: false,
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    assetModuleFilename: 'static/media/[name].[hash][ext]',
    publicPath: '/',
    devtoolModuleFilenameTemplate: [Function (anonymous)]
  },
  cache: {
    type: 'filesystem',
    version: 'fd29815a896a0fa4412eb36034ff2cae',
    cacheDirectory: '/Users/rahulsharma/Sandbox/portfolio/node_modules/.cache',
    store: 'pack',
    buildDependencies: { defaultWebpack: [Array], config: [Array], tsconfig: [] }
  },
  infrastructureLogging: { level: 'none' },
  optimization: {
    minimize: true,
    minimizer: [ [TerserPlugin], [CssMinimizerPlugin] ]
  },
  resolve: {
    modules: [
      'node_modules',
      '/Users/rahulsharma/Sandbox/portfolio/node_modules'
    ],
    extensions: [
      '.web.mjs', '.mjs',
      '.web.js',  '.js',
      '.json',    '.web.jsx',
      '.jsx'
    ],
    alias: { 'react-native': 'react-native-web' },
    plugins: [ [ModuleScopePlugin] ]
  },
  module: { strictExportPresence: true, rules: [ [Object], [Object] ] },
  plugins: [
    HtmlWebpackPlugin { userOptions: [Object], version: 5 },
    InlineChunkHtmlPlugin {
      htmlWebpackPlugin: [Function],
      tests: [Array]
    },
    InterpolateHtmlPlugin {
      htmlWebpackPlugin: [Function],
      replacements: [Object]
    },
    ModuleNotFoundPlugin {
      appPath: '/Users/rahulsharma/Sandbox/portfolio',
      yarnLockFile: undefined,
      useYarnCommand: [Function: bound useYarnCommand],
      getRelativePath: [Function: bound getRelativePath],
      prettierError: [Function: bound prettierError]
    },
    DefinePlugin { definitions: [Object] },
    MiniCssExtractPlugin {
      _sortedModulesCache: [WeakMap],
      options: [Object],
      runtimeOptions: [Object]
    },
    WebpackManifestPlugin { options: [Object] },
    IgnorePlugin {
      options: [Object],
      checkIgnore: [Function: bound checkIgnore]
    },
    ESLintWebpackPlugin {
      key: 'ESLintWebpackPlugin',
      options: [Object],
      run: [Function: bound run] AsyncFunction
    }
  ],
  performance: false
}
*/
