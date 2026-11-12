// Microsoft Clarity: visits, sources, heatmaps and recordings.
// Paste the project ID from clarity.microsoft.com > Settings > Overview. Empty = no analytics.
// Events: book_click (any link to /book), email_click / phone_click, inquiry_sent (the thank-you page,
// which only opens after a booking request really went through), so a button tap never counts as a booking.
(function () {
  var CLARITY_ID = 'zcndd9d3if';
  if (!CLARITY_ID || location.hostname === 'localhost' || location.hostname === '127.0.0.1') return;
  (function (c, l, a, r, i, t, y) { c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i; y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', CLARITY_ID);
  var path = location.pathname.replace(/\.html$/, '');
  if (path === '/thanks') window.clarity('event', 'inquiry_sent');
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
    var h = a.getAttribute('href');
    if (h === '/book' && path !== '/book') window.clarity('event', 'book_click');
    else if (h.indexOf('mailto:') === 0) window.clarity('event', 'email_click');
    else if (h.indexOf('tel:') === 0) window.clarity('event', 'phone_click');
  }, true);
})();
