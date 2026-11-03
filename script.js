const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const storedTheme = localStorage.getItem('portfolio-theme');
const preferredTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
function setTheme(theme) {
  root.dataset.theme = theme;
  themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#0b1018' : '#f3f6f4';
}
setTheme(storedTheme || preferredTheme);
themeButton.addEventListener('click', () => {
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(next);
  localStorage.setItem('portfolio-theme', next);
});

const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.mobile-menu');
const navigation = document.querySelector('.nav-links');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 8), { passive: true });
menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
}));

const cards = [...document.querySelectorAll('.project-card')];
const filters = [...document.querySelectorAll('.filter')];
const search = document.querySelector('#project-search');
const noResults = document.querySelector('#no-projects');
let category = 'all';
function updateProjects() {
  const query = search.value.trim().toLowerCase();
  let count = 0;
  cards.forEach(card => {
    const categoryMatch = category === 'all' || card.dataset.category === category;
    const textMatch = !query || `${card.dataset.search} ${card.textContent}`.toLowerCase().includes(query);
    card.hidden = !(categoryMatch && textMatch);
    if (!card.hidden) count++;
  });
  noResults.hidden = count > 0;
}
filters.forEach(button => button.addEventListener('click', () => {
  category = button.dataset.filter;
  filters.forEach(filter => {
    const active = filter === button;
    filter.classList.toggle('active', active);
    filter.setAttribute('aria-pressed', String(active));
  });
  updateProjects();
}));
search.addEventListener('input', updateProjects);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));
}
document.querySelector('#year').textContent = new Date().getFullYear();
