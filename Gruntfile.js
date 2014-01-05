'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bwr: grunt.file.readJSON('bower.json'),
    concat: {
      dist:{}
    },
    ngmin: {
      dist: {}
    },
    uglify: {
      options: {
        report: 'min',
        enclose: {
          'this': 'window',
          'this.angular': 'angular',
          'this.Math': 'Math',
          'void 0': 'undefined'
        },
        banner: '/*\n  <%= pkg.name %> - v<%= pkg.version %> \n  ' +
          '<%= grunt.template.today("yyyy-mm-dd") %>\n*/\n'+
        '',
      },
      dist: {
        options: {
          beautify: false,
          mangle: false, // true of ngmin
          compress: {
            global_defs: {
              'DEBUG': false
            },
            dead_code: true
          },
          sourceMap: '<%= bwr.name %>.min.js.map'
        },
        files: {
          '<%= bwr.name %>.min.js': ['./lib/index.js', './lib/*/*.js', './lib/directives.js', './lib/filters.js']
        }
      },
      src: {
        options: {
          beautify: true,
          mangle: false,
          compress: false
        },
        files: {
          '<%= bwr.name %>.js': ['./lib/index.js', './lib/*/*.js', './lib/directives.js', './lib/filters.js']
        }
      }
    }
  });


  grunt.registerTask('test', [
  ]);

  grunt.registerTask('build', [
    'concat',
    'ngmin',
    'uglify'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
