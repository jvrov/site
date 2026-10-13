/* Navegação e melhorias progressivas: o conteúdo continua legível sem JavaScript. */
(() => {
  document.documentElement.classList.add("js-enabled");
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.getElementById('mobile-navigation');
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const sections = [...document.querySelectorAll('main > section[id]')];
  const topLink = document.querySelector('.back-top');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');

  function setMenu(open, restoreFocus = false) {
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    toggle.querySelector('.menu-symbol').textContent = open ? '×' : '☰';
    if (open) menu.querySelector('a').focus();
    else if (restoreFocus) toggle.focus();
  }
  toggle.addEventListener('click', () => setMenu(menu.hidden));
  menu.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    setMenu(false);
    const target = document.querySelector(link.getAttribute('href'));
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  });
  document.addEventListener('keydown', event => {
    if (menu.hidden) return;
    if (event.key === 'Escape') setMenu(false, true);
    if (event.key === 'Tab') {
      const controls = [toggle, ...menu.querySelectorAll('a')];
      const index = controls.indexOf(document.activeElement);
      if (event.shiftKey && index === 0) { event.preventDefault(); controls.at(-1).focus(); }
      else if (!event.shiftKey && index === controls.length - 1) { event.preventDefault(); toggle.focus(); }
    }
  });
  window.addEventListener('resize', () => { if (innerWidth > 700 && !menu.hidden) setMenu(false); });

  function updateNavigation() {
    let active = sections[0].id;
    for (const section of sections) if (section.getBoundingClientRect().top <= 155) active = section.id;
    if (scrollY + innerHeight >= document.documentElement.scrollHeight - 10) active = 'contact';
    navLinks.forEach(link => {
      const selected = link.getAttribute('href') === '#' + active;
      link.dataset.active = String(selected);
      if (selected) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    if (topLink) topLink.hidden = scrollY < 500;
  }
  let scheduled = false;
  window.addEventListener('scroll', () => {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => { updateNavigation(); scheduled = false; });
  }, { passive: true });
  updateNavigation();

  if ('IntersectionObserver' in window && !motion.matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
    document.documentElement.classList.add('reveal-ready');
    motion.addEventListener('change', () => {
      if (motion.matches) { document.documentElement.classList.remove('reveal-ready'); observer.disconnect(); }
    });
  }
})();
