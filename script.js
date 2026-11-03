const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

function applyTheme(theme) {
  root.dataset.theme = theme;
  themeButton.setAttribute('aria-label', 'Switch to ' + (theme === 'light' ? 'dark' : 'light') + ' theme');
  document.querySelector('meta[name="theme-color"]').content = theme === 'light' ? '#f8fafc' : '#0c1728';
}

applyTheme(localStorage.getItem('portfolio-theme') || 'light');
themeButton.addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  applyTheme(next);
  localStorage.setItem('portfolio-theme', next);
});

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
}));

document.querySelector('#year').textContent = new Date().getFullYear();
