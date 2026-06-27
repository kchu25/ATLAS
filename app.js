/* ── Theme ─────────────────────────────────────────────────── */
function toggleTheme() {
  document.body.classList.toggle('light');
  const light = document.body.classList.contains('light');
  document.getElementById('theme-btn').textContent = light ? '☀️' : '🌙';
  try { localStorage.setItem('mi-theme', light ? 'light' : 'dark'); } catch(e) {}
}
(function () {
  try {
    if (localStorage.getItem('mi-theme') === 'dark') {
      document.body.classList.remove('light');
      document.getElementById('theme-btn').textContent = '🌙';
    }
  } catch(e) {}
})();

/* ── Tabs ──────────────────────────────────────────────────── */
function switchTab(e, id) {
  document.querySelectorAll('#usage .tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('#usage .tab-panel').forEach(p => p.classList.remove('active'));
  e.currentTarget.classList.add('active');
  document.getElementById('tab-' + id).classList.add('active');
}

/* ── Copy citation ─────────────────────────────────────────── */
function copyCite() {
  const txt = document.getElementById('cite-text').innerText.replace(/Copy$/, '').trim();
  navigator.clipboard.writeText(txt);
  const btn = document.querySelector('.copy-btn');
  btn.textContent = 'Copied!';
  setTimeout(() => btn.textContent = 'Copy', 1500);
}

/* ── Scroll progress ───────────────────────────────────────── */
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  document.getElementById('progress').style.width = pct + '%';
});

/* ── Reveal on scroll ──────────────────────────────────────── */
const obs = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('visible'); });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
