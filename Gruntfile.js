/**
 * File name: Gruntfile.js
 * Description: Build tool
 * Author: den.isahac
 * Author URI: https://github.com/denisahac
 *
 */

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  // Initialize configuration
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
      // Javascript linter
      // https://www.npmjs.com/package/grunt-contrib-jshint
      jshint: {
          // Grunt
          grunt: {
              files: {
                  src: ['Gruntfile.js']
              }
          },
          // Library scripts
          scripts: {
              options: {
                ignores: ['*.min.js']
              },
              files: {
                  src: ['*.js']
              }
          }
      },
      
      // ES6 transpilier
      // https://github.com/babel/grunt-babel
      babel: {
        options: {
          presets: ['es2015']
        },

        dist: {
          files: {
            'dist/winsize-notifier.js': 'winsize-notifier.js'
          }
        }
      },

      // Javascript minifier
      // https://www.npmjs.com/package/grunt-contrib-uglify
      uglify: {
        scripts: {
          options: {
            sourceMap: true
          },
          files: {
            'dist/winsize-notifier.min.js': ['dist/winsize-notifier.js']
          }
        }
      },

      // File watcher
      // https://www.npmjs.com/package/grunt-contrib-watch
      watch: {
        // Grunt
        grunt: {
            options: {
                reload: true
            },
            files: ['Gruntfile.js'],
            tasks: ['jshint:grunt']
        },

        // Scripts
        scripts: {
            files: ['*.js'],
            tasks: ['jshint:scripts']
        }
      }
  });
  
  // Load plugin(s)
  grunt.loadNpmTasks('grunt-contrib-jshint');           // Javascript linter
  grunt.loadNpmTasks('grunt-contrib-uglify');           // Javascript minifier
  grunt.loadNpmTasks('grunt-contrib-watch');            // File watcher
  
  // Register task(s)
  grunt.registerTask('build', [
      'jshint',
      'watch'
  ]);                                                   // Run this task with 'grunt build' command
  
  grunt.registerTask('deploy', [
      'babel',
      'uglify'
  ]);                                                   // Run this task on deployment with 'grunt deploy' command
  
  
  grunt.registerTask('default', 'build');               // Default task 
};