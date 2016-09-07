module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    logLevel: config.LOG_DEBUG,
    files: [
      'app/scripts/*.js',
      'test/**/*.spec.js'
    ],
    preprocessors: {
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

