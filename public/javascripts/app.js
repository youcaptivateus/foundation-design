/**
* Site-wide functionality
*/
var YCU = YCU || {};
YCU.Main = {};
(function($, NS){
	$.extend(true, NS, {
		init: function(){
			var that = this;

			

			// base DOM elements
			this.$w = $(window);
			this.$nav = $('nav.top-bar');

			// updated measurements
			this.navHeight = this.$nav.height();
			this.viewportWidth = this.$w.width();
			this.viewportHeight = this.$w.height();


			this.$w.on('resize', $.proxy(that.onResize, this));
		},

		onResize: function(){
			this.navHeight = this.$nav.height();
			this.viewportWidth = this.$w.width();
			this.viewportHeight = this.$w.height();
		},

		sizeVideoLinks: function(){

		}
	});

	NS.init();
})($, YCU.Main);