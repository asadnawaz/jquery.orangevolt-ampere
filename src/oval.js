/*
 * Orangevolt Ampere Framework
 *
 * http://github.com/lgersman
 * http://www.orangevolt.com
 *
 * Copyright 2012, Lars Gersmann <lars.gersmann@gmail.com>
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */

/**
 * Oval is the OrangeVolt Ampere Loader
 *
 * embed this script in the head of your html page
 * to load all Orangevolt Ampere dependencies automatically
 */
var scripts = document.getElementsByTagName( 'script');
for( var i=0; i<scripts.length; i++) {
	var url = scripts[i].src;
	if( scripts[i].type=="text/javascript" && /oval.js/.test( url)) {
		var matches = url.match( /(.+)oval\.js(\?(.+))?/);
		if( !matches) {
			throw new Error( "failed to eval ampere base url");
		}
		var baseUrl = matches[ 1];

		var CSS = [
			'../libs/bootstrap-2.3.1/css/bootstrap.css',
			'../libs/Font-Awesome/css/font-awesome.css',
			'../libs/bootstrap-2.3.1/css/bootstrap-responsive.css',
			'../libs/datepicker/css/datepicker.css',
			'ampere-ui-twitterbootstrap.css'
		];
		for( var i in CSS) {
			document.writeln( '<link rel="stylesheet" type="text/css" href="' + baseUrl + CSS[i] + '">');
		}

		var LESS = [
			'ampere-ui-twitterbootstrap.less'
		];
		for( var i in LESS) {
			document.writeln( '<link rel="stylesheet/less" href="' + baseUrl + LESS[i] + '">');
		}

		var JS = [
			'../libs/coffeescript-1.3.3.js',
			//'../libs/modernizr-2.6.2.js',
			'../libs/lesscss-1.3.3.js',
			'../libs/jquery-2.0.0.js',
			'../libs/jquery-ui-sortable-1.10.3/jquery-ui-1.10.3.custom.min.js',
			'../libs/cache.js',
			'../libs/bootstrap-2.3.1/js/bootstrap.js',
			//'../libs/jquery.sortable.js',
			'../libs/datepicker/js/bootstrap-datepicker.js',

			'../libs/angular-1.1.4/angular.js',
			'../libs/angular-1.1.4/angular-cookies.js',
			'../libs/angular-1.1.4/angular-loader.js',
			'../libs/angular-1.1.4/angular-resource.js',

			'compat.js',
			'json.js',
			'namespace.js',
			'entity.js',
			'jquery.upload.js',
			'jquery.html5validation.js',
			'ampere.js',
			'ampere-util.js',
			'ampere-crud.js',
			'ampere-ui-twitterbootstrap.js',
			'ampere-ui-hotkey.js'
		];

		window.less = window.less || {
			env:"production",
			dumpLineNumbers:false
		};

		for( var i in JS) {
			var defer = (/coffeescript/.test( JS[i]) && 'defer') || '';
			document.writeln( '<script type="text/javascript" ' + defer + ' src="' + baseUrl + JS[i] + '"></script>');
		}

		break;
	}
}