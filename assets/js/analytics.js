document.addEventListener('click', function (event) {
  var target = event.target;
  var link = target && target.closest ? target.closest('a[href^="tel:"]') : null;
  if (!link || typeof window.gtag !== 'function') return;

  window.gtag('event', 'click_to_call', {
    link_url: link.href,
    link_text: (link.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80),
    cta_location: link.getAttribute('data-cta-location') || 'unspecified',
    page_path: window.location.pathname
  });
});
