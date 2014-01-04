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
    uglify: {
      options: {
        enclose: {
          'this': 'window',
          'this.angular': 'angular'
        },
        banner: '/*\n  <%= pkg.name %> - v<%= pkg.version %> \n  ' +
          '<%= grunt.template.today("yyyy-mm-dd") %>\n*/\n'+
        '',
      },
      dist: {
        options: {
          beautify: false,
          mangle: true,
          compress: {
            global_defs: {
              'DEBUG': false
            },
            dead_code: true
          }
        },
        files: {
          '<%= bwr.name %>.min.js': './*/*.js'
        }
      },
      src: {
        options: {
          beautify: false,
          mangle: false,
          compress: false
        },
        files: {
          '<%= bwr.name %>.js': './*/*.js'
        }
      }
    },

  });


  grunt.registerTask('test', [
  ]);

  grunt.registerTask('build', [
    'concat',
    'uglify'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
