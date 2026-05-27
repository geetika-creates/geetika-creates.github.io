// Mobile nav toggle + simple nav-link active highlight on scroll
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }

  // Highlight nav link of current section in view
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  if ('IntersectionObserver' in window && sections.length && navAnchors.length) {
    const map = {};
    navAnchors.forEach(function (a) {
      const id = a.getAttribute('href').replace('#', '');
      map[id] = a;
    });

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        const id = entry.target.getAttribute('id');
        if (!map[id]) return;
        if (entry.isIntersecting) {
          navAnchors.forEach(function (a) { a.classList.remove('active'); });
          map[id].classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(function (s) { observer.observe(s); });
  }
})();
