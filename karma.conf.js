module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['jasmine'],
    logLevel: config.LOG_DEBUG,
    proxies: {
    '/images': 'http://localhost:9000/images'
    },
    files: [
      {pattern:'node_modules/babel-polyfill/dist/polyfill.js',watched:true, included:true,served:true},
      {pattern:'app/scripts/Base/Tickable.js', watched:true, included:true,served:true},
      {pattern:'app/scripts/**/*.js',watched:true, included:true,served:true},
      {pattern:'app/images/**/*.*',watched:false, included:false, served:true},
      {pattern:'test/**/*.spec.js', watched:true, included:true, served:true}
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

