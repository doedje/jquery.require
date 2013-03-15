/*==========================
jquery.require.js
version: 0.1.0

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
				require) {
	$.fn.require = function(dependencies, callback) {
		var el = this;
		if (this.length > 0) {
			require(dependencies, function() {
				callback.apply(el, arguments);
			});
		}
		return this;
	};
});
