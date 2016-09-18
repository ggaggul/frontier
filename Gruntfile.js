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
			development: {
				options: config.options.sass.development,
				files: [
				    '<%= files.sass.appDev %>'
				]
			},
			release: {
				options: config.options.sass.release,
				files: [
					'<%= files.sass.app %>', '<%= files.sass.appVendor %>'
				]
			}
		},
		jshint: {
			files: '<%= files.jshint %>',
			options: config.options.jshint
		},
		ngAnnotate: {
			options: config.options.ngAnnotate,
			app: {
				files: '<%= files.ngAnnotate.app %>'
			}
		},
		concat: {
			vendor: {files: '<%= files.concat.vendor %>'},
			app: {
				files: '<%= files.concat.app %>',
				options: {
					banner: config.banner + "\'use strict\';\n",
					process: config.concat.app.process
				}
			}
		},
		uglify: {
			options: config.options.uglify,
			vendor: {files: '<%= files.uglify.vendor %>'},
			app: {files: '<%= files.uglify.app %>', options: {banner: config.banner}}
		},
		cssmin: {
			vendor: {files: '<%= files.cssmin.vendor %>'},
			app: {files: '<%= files.cssmin.app %>'}
		},
		copy: {
			fontAwesome: {files: '<%= files.font.fontAwesome %>'}
		},
		watch: {
			options: config.options.watch,
			app : {files: '<%= files.watch.js %>', tasks: ['jshint']},
			style: {files: '<%= files.watch.sass %>', tasks: ['jshint']}, 
		}
	});
	
	grunt.registerTask('build:release', ['clean:all', 'sass:release', 'jshint', 'bump-only:prerelease', 'html2js', 'ngAnnotate', 'concat', 'uglify', 'cssmin', 'copy', 'clean:temp']);
}