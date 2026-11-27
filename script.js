const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
if (toggle && nav) {
  const close = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); };
  toggle.addEventListener('click', () => toggle.setAttribute('aria-expanded', String(nav.classList.toggle('open'))));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const form = document.getElementById('contact-form');
if (form) form.addEventListener('submit', event => {
  event.preventDefault();
  const fields = new FormData(form);
  const get = name => String(fields.get(name) || '').trim();
  const subject = 'Bombini inquiry: ' + get('interest');
  const body = [ 'Hello Bombini team,', '', get('message'), '', 'Name: ' + get('name'), 'Email: ' + get('email'), 'Organization: ' + (get('organization') || 'Not provided'), 'Inquiry: ' + get('interest') ].join('\r\n');
  const url = 'mailto:hello@bombinitech.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  const status = document.getElementById('form-status');
  status.hidden = false;
  status.textContent = 'Your email draft should open in your email application. Send it there to complete your inquiry. If it does not open, email us directly at hello@bombinitech.com.';
  window.location.href = url;
});
