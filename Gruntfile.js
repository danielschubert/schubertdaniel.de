module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.initConfig({
		concat: {
			dist: {
				src: 'js/*.js',
				dest: 'build/js/scripts.js'
			}
		}
	})
}