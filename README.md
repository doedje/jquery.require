jquery.require
==============
**file:** jquery.require.js
**version:** 0.1.0

jQuery plugin for use with requirejs
------------------------------------

This script is basically a wrapper for require.js

With the advantage that it will first check the length of $(selector) and only calls the requirejs function when this length > 0.

	$(selector).require(['jquery.plugin'], function() {
		$(this).plugin(...);
	});

Source:
-------
	require(['jquery',
			'require'],
	function($,
			req) {
			// require is given back in the req variable,
			// this way the optimizer won't include it in a build and
			// the dependencies are loaded only when needed...
		$.fn.require = function(dependencies, callback) {
			var el = this;
			if (this.length > 0) {
				req(dependencies, function() {
					callback.apply(el, arguments);
				});
			}
			return this;
		};
	});

Dependencies
------------
Script | Url
--- | ---
require.js | http://www.requirejs.org

Authors
-------
Remy Blom,
The Netherlands
remy.blom@kmt.hku.nl

Changelog
---------
Version | Changes
--- | ---
0.1.1 | changed the variable giving back require the new name 'req'
0.1.0 | first version of **$.require**