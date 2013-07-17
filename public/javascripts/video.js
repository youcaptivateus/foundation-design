var YCU = YCU || {};
YCU.VideoPage = {};
(function($, NS){
	$.extend(true, NS, {
		init: function(){
			var that = this;

			this.$w = $(window);
			this.$nav = $('nav.top-bar');
			this.$video = $('.fullscreen-video');

			this.navHeight = this.$nav.height();
			this.viewportWidth = this.$w.width();
			this.viewportHeight = this.$w.height();


			// init actions
			this.sizeVideo();

			this.$w.on('resize', $.proxy(that.onResize, this));
		},

		onResize: function(){
			this.navHeight = this.$nav.height();
			this.viewportWidth = this.$w.width();
			this.viewportHeight = this.$w.height();
			this.sizeVideo();
		},

		sizeVideo: function(){
			var useableHeight = this.viewportHeight - this.navHeight;
			var css = {};

			// window too short. letterbox.
			if (this.viewportWidth * 0.5625 > useableHeight ){
				console.log('window too short');
				css.width = useableHeight * 1.77777;
				css.height = useableHeight;
			} else {

				// window plenty tall
				css.width = '100%';
				css.height = this.viewportWidth * 0.5625;
			}

			this.$video.css(css);
		}
	});
})($, YCU.VideoPage);