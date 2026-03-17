// Simple Lightbox Fix - waits for jQuery to be ready
(function() {
  function initLightbox() {
    if (typeof jQuery === 'undefined') {
      setTimeout(initLightbox, 100);
      return;
    }
    jQuery(document).ready(function($) {
      // Re-initialize slimbox for all lightbox links
      $("a[rel^='lightbox']").slimbox({
        resizeDuration: 400,
        overlayOpacity: 0.8,
        loop: true,
        allowSave: false
      }, null, function() {
        return true;
      });
    });
  }
  initLightbox();
})();
