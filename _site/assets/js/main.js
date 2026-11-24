(function () {
  'use strict';
  var $ = function (s) { return document.querySelector(s); };

  /* ---------- Toast ---------- */
  var toast = $('#toast'), timer;
  function say(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(timer);
    timer = setTimeout(function () { toast.classList.remove('show'); }, 1800);
  }

  /* ---------- Copy email ---------- */
  function copy(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(function () { say('Email copied'); }, function () { say(text); });
    } else { say(text); }
  }
  document.querySelectorAll('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () { copy(b.getAttribute('data-copy')); });
  });

  /* ---------- Quick jump ---------- */
  var dlg = $('#palette'), input = $('#palette-input'), list = $('#palette-list');
  var items = [], shown = [], sel = 0;
  try { items = JSON.parse($('#palette-data').textContent); } catch (e) {}
  $('#kbd-hint').textContent = /Mac|iPhone|iPad/.test(navigator.platform) ? '⌘ K' : 'Ctrl K';

  function render() {
    var q = input.value.trim().toLowerCase();
    shown = items.filter(function (i) { return !q || i.label.toLowerCase().indexOf(q) > -1; });
    sel = Math.min(sel, Math.max(shown.length - 1, 0));
    list.innerHTML = '';
    if (!shown.length) {
      var none = document.createElement('li'); none.className = 'none';
      none.textContent = 'No match. Try a different word.'; list.appendChild(none); return;
    }
    shown.forEach(function (item, idx) {
      var li = document.createElement('li');
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', idx === sel ? 'true' : 'false');
      var a = document.createElement('span'); a.textContent = item.label;
      var b = document.createElement('small'); b.textContent = item.group;
      li.appendChild(a); li.appendChild(b);
      li.addEventListener('click', function () { run(item); });
      li.addEventListener('mousemove', function () { if (sel !== idx) { sel = idx; mark(); } });
      list.appendChild(li);
    });
  }
  function mark() {
    Array.prototype.forEach.call(list.children, function (li, i) {
      li.setAttribute('aria-selected', i === sel ? 'true' : 'false');
      if (i === sel) li.scrollIntoView({ block: 'nearest' });
    });
  }
  function openPalette() {
    if (dlg.open) return;
    input.value = ''; sel = 0; render();
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute('open', '');
    input.focus();
  }
  function closePalette() { if (dlg.close) dlg.close(); else dlg.removeAttribute('open'); }
  function run(item) {
    closePalette();
    if (item.action === 'copy-email') copy(item.value);
    else if (item.url) window.location.href = item.url;
  }
  $('#open-palette').addEventListener('click', openPalette);
  dlg.addEventListener('click', function (e) { if (e.target === dlg) closePalette(); });
  input.addEventListener('input', function () { sel = 0; render(); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(sel + 1, shown.length - 1); mark(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(sel - 1, 0); mark(); }
    else if (e.key === 'Enter' && shown[sel]) { e.preventDefault(); run(shown[sel]); }
  });
  document.addEventListener('keydown', function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); dlg.open ? closePalette() : openPalette(); }
    else if (e.key === '/' && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) { e.preventDefault(); openPalette(); }
  });
})();
