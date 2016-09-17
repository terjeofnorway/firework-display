module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    logLevel: config.LOG_DEBUG,
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'app/scripts/Base/Tickable.js',
      'app/scripts/**/*.js',
      'test/**/*.spec.js'
    ],
    preprocessors: {
      'app/scripts/Base/Tickable.js': ['babel'],
      'app/scripts/**/*.js': ['babel'],
      'test/**/*.spec.js': ['babel']
    },
    babelPreprocessor: {
      options: {
        presets: ['es2015'],
        sourceMap: 'inline'
      },
      filename: function (file) {
        return file.originalPath.replace(/\.js$/, '.es5.js');
      },
      sourceFileName: function (file) {
        return file.originalPath;
      }
    }
  });
};

