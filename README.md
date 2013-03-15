jquery.require
==============

jquery.require is a wrapper for requirejs. Allows you to do $(selector).require([plugin], function() { $(this).plugin; }); With the advantage that it will first check the length of $(selector) and only calls the requirejs function when this length > 0