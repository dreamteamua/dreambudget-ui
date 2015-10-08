module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'assets/bower_components/angular/angular.js',
      'assets/bower_components/angular-route/angular-route.js',
      'assets/bower_components/angular-aria/angular-aria.js',
      'assets/bower_components/angular-mocks/angular-mocks.js',
      'assets/bower_components/angular-material/angular-material.js',
      'app/components/**/*.js',
      'app/view*/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
