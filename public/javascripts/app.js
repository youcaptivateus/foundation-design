/**
* Site-wide functionality. Called before document ready.
*/
var YCU = YCU || {};
YCU.Main = {};


(function($, NS){

	// kickoff foundation
	$(document).foundation();

	// build main site-wide object
	$.extend(true, NS, {

		/**
		* Object setup. Run before document ready.
		*/
		init: function(){
			var that = this;

			// list of events to fire on resize. 
			// mostly useful from page-specific code.
			this.resizeCallbacks = $.Callbacks();

			// base DOM elements
			this.$w = $(window);
			this.$nav = $('nav.top-bar');

			// updated measurements
			this.navHeight = this.$nav.height();
			this.viewportWidth = this.$w.width();
			this.viewportHeight = this.$w.height();


			this.$w.on('resize', $.proxy(that.onResize, this));
		},

		/**
		* Actions to run once document is ready
		*/
		onReady: function(){
			this.sizeVideoLinks();
		},



		onResize: function(){
			this.navHeight = this.$nav.height();
			this.viewportWidth = this.$w.width();
			this.viewportHeight = this.$w.height();


			this.sizeVideoLinks();
			this.resizeCallbacks.fire();
		},

		sizeVideoLinks: function(){
			console.log('size video links');
		}
	});


	// init immediately
	NS.init();

	// finish build on document ready
	$(function(){
		NS.onReady();
	});

})($, YCU.Main);