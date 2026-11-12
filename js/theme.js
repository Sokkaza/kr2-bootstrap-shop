const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

function syncThemeToggle() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', isDark ? 'Включить светлую тему' : 'Включить темную тему');
  themeIcon.textContent = isDark ? '\u2600' : '\u263E';
}

syncThemeToggle();

themeToggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;

  try {
    localStorage.setItem('clubTheme', nextTheme);
  } catch {}

  syncThemeToggle();
});
