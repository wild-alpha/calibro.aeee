/* Calibro site-v4: the only script on the page. Full-screen menu, the header turning slim and solid after the opening
   screen, muted films that start in view once the page has loaded, the project strip, the enquiry form. */
(function () {
  'use strict';
  var rm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var saveData = navigator.connection && navigator.connection.saveData;
  var body = document.body;

  var btn = document.querySelector('.menu-btn');
  var menu = document.getElementById('mnav');
  if (btn && menu) {
    var closeMenu = function () {
      menu.classList.remove('open');
      body.classList.remove('menu-open');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = btn.getAttribute('data-open');
    };
    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('open');
      body.classList.toggle('menu-open', open);
      btn.setAttribute('aria-expanded', String(open));
      btn.textContent = open ? btn.getAttribute('data-close') : btn.getAttribute('data-open');
      if (open) { var first = menu.querySelector('a'); if (first) first.focus(); }
    });
    document.addEventListener('keydown', function (e) {
      if (!menu.classList.contains('open')) return;
      if (e.key === 'Escape') { closeMenu(); btn.focus(); return; }
      if (e.key === 'Tab') {
        var items = menu.querySelectorAll('a'); var last = items[items.length - 1]; var first = items[0];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); btn.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); btn.focus(); }
        else if (document.activeElement === btn && !e.shiftKey) { e.preventDefault(); first.focus(); }
      }
    });
  }

  var hdr = document.querySelector('[data-hdr]');
  var opening = document.querySelector('.hero, .phead, .page-hero');
  if (hdr && opening && !hdr.classList.contains('solid') && 'IntersectionObserver' in window) {
    var hio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { hdr.classList.toggle('solid', !e.isIntersecting); });
    }, { rootMargin: '-80px 0px 0px 0px', threshold: 0 });
    hio.observe(opening);
  } else if (hdr && !opening) {
    hdr.classList.add('solid');
  }

  var films = document.querySelectorAll('.hero, .film');
  Array.prototype.forEach.call(films, function (film) {
    var video = film.querySelector('video');
    var ctl = film.querySelector('[data-pause]');
    if (!video) return;
    if (rm || saveData) { if (ctl) ctl.hidden = true; return; }
    var mobile = window.matchMedia('(max-width: 760px)').matches;
    var userPaused = false;
    var load = function () {
      if (!video.getAttribute('src')) {

        var av1 = video.canPlayType && video.canPlayType('video/mp4; codecs="av01.0.08M.08"') !== '';
        var pick = function (name) { return (av1 && video.getAttribute(name + '-av1')) || video.getAttribute(name); };
        video.setAttribute('src', (mobile && pick('data-src-mobile')) || pick('data-src'));
        video.load();
      }
    };
    var play = function () {
      if (userPaused) return;
      load();
      var p = video.play();
      if (p && p.then) { p.then(function () { video.classList.add('on'); }).catch(function () {}); }
    };
    if (ctl) {
      ctl.addEventListener('click', function () {
        userPaused = !userPaused;
        if (userPaused) { video.pause(); ctl.textContent = ctl.getAttribute('data-play'); }
        else { ctl.textContent = ctl.getAttribute('data-pause'); play(); }
      });
    }

    var watch = function () {
      if ('IntersectionObserver' in window) {
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) { if (e.isIntersecting) { play(); } else if (video.getAttribute('src')) { video.pause(); } });
        }, { rootMargin: '200px 0px' });
        io.observe(film);
      } else { play(); }
    };
    var later = function () { if ('requestIdleCallback' in window) { requestIdleCallback(watch, { timeout: 1500 }); } else { setTimeout(watch, 300); } };
    if (document.readyState === 'complete') { later(); } else { window.addEventListener('load', later, { once: true }); }
  });

  var strips = document.querySelectorAll('[data-strip]');
  Array.prototype.forEach.call(strips, function (sec) {
    var track = sec.querySelector('.strip');
    if (!track) return;
    var rtl = (document.documentElement.getAttribute('dir') || '').toLowerCase() === 'rtl';
    Array.prototype.forEach.call(sec.querySelectorAll('.strip-nav button'), function (b) {
      b.addEventListener('click', function () {
        var card = track.querySelector('a');
        var step = card ? card.getBoundingClientRect().width + 2 : Math.round(track.clientWidth * 0.8);
        var dir = b.getAttribute('data-dir') === 'prev' ? -1 : 1;
        if (rtl) dir = -dir;
        track.scrollBy({ left: dir * step, behavior: rm ? 'auto' : 'smooth' });
      });
    });
  });

  /* enquiry form: posted as JSON to /api/enquiry (a Vercel function that emails the studio); files travel as base64,
     3 MB in total, the platform's request limit. Larger drawing sets go by email or WhatsApp, as the hint says. */
  var MAX = 3 * 1024 * 1024;
  var opened = Date.now();
  var forms = document.querySelectorAll('form[data-enquiry]');
  Array.prototype.forEach.call(forms, function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('.form-status');
      var button = form.querySelector('button[type="submit"]');
      var say = function (key, bad) { if (status) { status.textContent = form.getAttribute('data-' + key); status.classList.toggle('err', !!bad); } };
      if (!form.checkValidity()) { form.reportValidity(); return; }
      var input = form.querySelector('input[type="file"]');
      var files = input && input.files ? Array.prototype.slice.call(input.files) : [];
      var total = files.reduce(function (n, f) { return n + f.size; }, 0);
      if (total > MAX) { say('too-big', true); return; }
      var data = { lang: document.documentElement.lang, elapsed: Date.now() - opened, files: [] };
      Array.prototype.forEach.call(form.elements, function (el) { if (el.name && el.type !== 'file' && el.type !== 'submit') data[el.name] = el.value; });
      var read = function (f) {
        return new Promise(function (ok, fail) {
          var fr = new FileReader();
          fr.onload = function () { ok({ name: f.name, type: f.type || 'application/octet-stream', data: String(fr.result).split(',')[1] || '' }); };
          fr.onerror = fail; fr.readAsDataURL(f);
        });
      };
      say('sending'); if (button) button.disabled = true;
      Promise.all(files.map(read)).then(function (list) {
        data.files = list;
        return fetch('/api/enquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      }).then(function (res) {
        if (!res.ok) throw new Error(res.status);
        form.reset(); say('sent');
      }).catch(function () { say('error', true); }).then(function () { if (button) button.disabled = false; });
    });
  });
})();
