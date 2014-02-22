module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    uglify:
      dist:
        files:
          'dist/jquery.url-params.min.js': ['src/jquery.url-params.js']
    bump:
      options:
        files: ['package.json', 'bower.json']
        commit: true
        commitMessage: 'Release v%VERSION%'
        commitFiles: ['-a']
        createTag: true
        tagName: 'v%VERSION%'
        tagMessage: 'Version %VERSION%'
        push: false

  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-bump'

  grunt.registerTask 'default', ['uglify']
