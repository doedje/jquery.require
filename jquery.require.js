/*==========================
jquery.require.js
version: 0.1.1

- a wrapper for requirejs
- only loads the dependencies when at least one element is selected

created at: Mar 5, 2013
scripted by:

Remy Blom,
Utrecht School of Arts,
The Netherlands

www.hku.nl
remy.blom@kmt.hku.nl
==========================*/

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
