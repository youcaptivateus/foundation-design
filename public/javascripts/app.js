var YCU = YCU || {};
(function($, NS){
	$.extend(true, YCU, {

		init: function(){
			var that = this;

			this.$w = $(window);
			this.$nav = $('nav.top-bar');
			this.$video = $('.fullscreen-video');

			this.navHeight = this.$nav.height();
			this.viewportWidth = this.$w.width();
			this.viewportHeight = this.$w.height();


			this.onResize();
			this.$w.on('resize', $.proxy(that.onResize, this));
		},

		onResize: function(){
			this.sizeVideo();
		},

		sizeVideo: function(){
			console.log('resize');

			var useableHeight = this.viewportHeight - this.navHeight;
			var css = {};

			// window too short. letterbox.
			if (this.viewportWidth * 0.5625 > useableHeight ){
				console.log('window too short');
				css.width = useableHeight * 1.77777;
				css.height = useableHeight;
			} else {

				console.log('window too tall');
				// window plenty tall
				css.width = '100%';
				css.height = this.viewportWidth * 0.5625;
			}

			console.log(css);

			this.$video.css(css);

		}
	});
})($, YCU);