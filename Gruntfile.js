module.exports = function (grunt) {
  grunt.initConfig({
      htmlmin: {
          options: {
              removeComments: true,
              collapseWhitespace: true
          },
          files: {
              src: './index.html',
              dest: 'dist/index.html'

          }
      },
      cssmin: {
          'dist/index.css': './index.css'
      },
      uglify: {
          'dist/index.js': './es5/index.js'
      },
      copy: {
        images: {
          src: './*.jpg',
          dest: 'dist/'
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
  
    grunt.registerTask('default', ['htmlmin', 'cssmin', 'uglify', 'copy']);
  };
  