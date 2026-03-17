jQuery.noConflict();
jQuery(document).ready(function($) {
	$('#header_image').nivoSlider({
			effect: 'fade', // Specify sets like: 'fold,fade,sliceDown'
			slices: 1, // For slice animations
			boxCols: 1, // For box animations
			boxRows: 1, // For box animations
			animSpeed: 3500, // Slide transition speed
			pauseTime: 2000, // How long each slide will show
			startSlide: 0, // Set starting Slide (0 index)
			directionNav: false, // Next & Prev navigation
			controlNav: false, // 1,2,3... navigation
			controlNavThumbs: false, // Use thumbnails for Control Nav
			pauseOnHover: false, // Stop animation while hovering
			manualAdvance: false, // Force manual transitions
			randomStart: false, // Start on a random slide
			beforeChange: function(){}, // Triggers before a slide transition
			afterChange: function(){}, // Triggers after a slide transition
			slideshowEnd: function(){ jQuery('#header_image').data('nivo:vars').stop = true; }, // Triggers after all slides have been shown
			lastSlide: function(){ jQuery('#header_image').data('nivo:vars').stop = true; }, // Triggers when last slide is shown
			afterLoad: function(){} // Triggers when slider has loaded
	});
});