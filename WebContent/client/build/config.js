// Loaded task에서 사용하는 설정정보를 별도 파일로 관리
module.exports = function () {
	return {
		banner: '' + 
			'/*! <%= pkg.title || pkg.name %> -v<%= pkg.version %>\n' + 
			'<%= pkg.description ? " * " + pkg.description + "\\n" : "" %>' +
			' <%= grunt.template.today("yyyy-mm-dd") %>',
		
			html2js: {
			app: {
				rename: function(name) {
					return '/client/views/' + name;
				}
			}
		},
		
		concat: {
			app: {
				process: function (src, filepath) {
					if( (/\.(css)$/i).test(filepath) ){
						return '/* Source : ' + filepath + '*/\n' +
								src.replace(/('use strict'|"use strict");/g, '');
					}else if(filepath.indexOf('client/build/temporary') > -1){
						return '// Source : ' + filepath + '*/\n' +
								src.replace(/('use strict'|"use strict");/g, '');
					}else {
						return '// Source : ' + filepath + '*/\n' +
								//src.replace(/('use strict'|"use strict");/g, '').replace(/(\/*([\s\S]?)\\/)|(\/\/(.*))/g, '').replace(/^\s+/g, '').replace(/\s+$/gm, '');
								src.replace(/('use strict'|"use strict");/g, '').replace(/(\/\/(.*))/g, '').replace(/^\s+/g, '').replace(/\s+$/gm, '');
					}
				}
			}
		},
		
		options: {
			html2js: {
				fileHeaderString: 'function(window, angular, undefined) {',
				fileFooterString: '})(window, window.angular);',
				htmlmin: {
					removeComments: true,
					collapseWhitespace: true,
					removeAttributeQuotes: true,
					removeEmptyAttributes: true,
					removeRedundantAttributes: true,
					removeScriptTypeAttributes: true,
					removeStyleLinkTypeAttributes: true
				}
			},
			sass :{
				sourcemap: 'none'
			},
			uglify: {
				sourceMap: false,
				report: 'min',
				preserveComments: false
			},
			jshint: {
				curly : true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				boss: true,
				eqnull: true,
				loopfunc: true,
				globals: {}
			},
			connect: {
				port: 9999,
				keepalive: true,
				base: 'doc'
			},
			watch: {
				livereload: true,
				debounceDelay: 2000,
				interval: 5007
			}
		}
	};
}