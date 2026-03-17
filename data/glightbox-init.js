document.addEventListener('DOMContentLoaded', function() {
  // Convert old lightbox links to GLightbox format
  document.querySelectorAll('a[rel^="lightbox"]').forEach(function(el) {
    el.classList.add('glightbox');
    var group = el.getAttribute('rel').match(/\[([^\]]+)\]/);
    if (group) {
      el.setAttribute('data-gallery', group[1]);
    }
  });
  
  // Initialize GLightbox
  if (typeof GLightbox !== 'undefined') {
    GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      loop: true,
      autoplayVideos: true
    });
  }
});
