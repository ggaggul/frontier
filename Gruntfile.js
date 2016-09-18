'use strict';

module.exports = function (grunt) {
	var buildMode = grunt.option('mode');
	if(!buildMode){
		buildMode = 'ide';
	}
	
	grunt.log.writeln('>>BUILD MODE : ' + buildMode);
	
	//빌드환경 설정
	var configMode = require('./GruntfileConfig')();
	
	//Loaded Task에서 사용하는 Configuration
	var config = require('./' + configMode[buildMode].web_root + '/client/build/config')();
	
	//Log to File
	require('logfile-grunt')(grunt, {filepath: configMode[buildMode].log_root + '/front.' + grunt.template.today("yyyy-mm-dd")+ '.log'})
	
	//Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);
	
	//Show grunt task time
	require('time-grunt')(grunt);
	
	//Grunt configuration
	grunt.initConfig({
		//Project, path, File 정보를 별도 관리
		pkg: grunt.file.readJSON('package.json'),
		build: configMode[buildMode],
		paths: grunt.file.readJSON('./' + configMode[buildMode].web_root + '/client/build/paths.json'),
		files: grunt.file.readJSON('./' + configMode[buildMode].web_root + '/client/build/files.json'),
		
		bump: {
			options: {
				commit: false,
				push: false,
				files: '<%= files.bump %>',
				updateConfigs: ['pkg']
			}
		},
		
		html2js: {
			options: config.options.html2js,
			app: {
				options: {
					base: '<%= paths.template %>',
					module: 'frontier.templates',
					rename: config.html2js.app.rename
				},
				files: '<%= files.html2js.app %>'
			}
		},
		
		clean: {
			options: {force: true},
			all: '<%= files.clean.all %>',
			app: '<%= files.clean.app %>',
			vendor: '<%= files.clean.vendor %>',
			temp: '<%= files.clean.temp %>'
		},
		sass: {
			release: {
				options: config.options.sass,
				files: [
					'<%= files.sass.app %>', '<%= files.sass.appVendor %>'
				]
			}
		}
	});
	
	grunt.registerTask('build:release', ['clean:all', 'sass:release']);
}