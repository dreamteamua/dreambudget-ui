module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        watch: {
            dev: {
                files: [
                    'Gruntfile.js',
                    'app/*/*/*.js',
                    'app/*/*.js',
                    'app/*.js'
                ],
                tasks: [
                    'jshint',
                    'concat:dist'
                ],
                options: {
                    spawn: false
                }
            }
        },

        jshint: {
            all: [
                'Gruntfile.js',
                'app/*.js',
                'app/*/*.js'
            ]
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'assets/bower_components/angular/angular.js',
                    'assets/bower_components/angular-animate/angular-animate.js',
                    'assets/bower_components/angular-aria/angular-aria.js',
                    'assets/bower_components/angular-ui-router/release/angular-ui-router.js',
                    'app/app.module.js',
                    'app/app.routes.js',
                    'app/app.config.js',
                    'app/*/*.js',
                    'app/*/*/*.js'
                ],
                dest: 'dist/app.js'
            }
        },

        uglify: {
            dist: {
                files: {
                    'public/dist/app.min.js': ['public/dist/app.js']
                },
                options: {
                    mangle: false
                }
            }
        }
    });


    grunt.registerTask('dev', [
        'jshint',
        'concat:dist',
        'watch:dev'
    ]);

    grunt.registerTask('prod', [
        'jshint',
        'concat:dist',
        'uglify:dist',
        'clean:prod',
        'less',
        'concat_css',
        'cssmin',
        'watch:prod'
    ]);

};
