// Alterna español/inglés sin recargar. Sin dependencias: la página debe seguir
// siendo legible aunque el script no llegue a ejecutarse, así que el español
// viene visible desde el HTML y esto solo cambia cuál se muestra.
(function () {
  function aplicar(l) {
    document.querySelectorAll('[data-lang]').forEach(function (el) {
      el.classList.toggle('on', el.getAttribute('data-lang') === l);
    });
    document.querySelectorAll('.langs button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.set === l));
    });
    document.documentElement.lang = l;
    try { localStorage.setItem('lumbre_lang', l); } catch (e) { /* modo privado */ }
  }
  var guardado = null;
  try { guardado = localStorage.getItem('lumbre_lang'); } catch (e) { /* ignorar */ }
  var inicial = guardado || (navigator.language || 'es').slice(0, 2).toLowerCase();
  aplicar(inicial === 'en' ? 'en' : 'es');
  document.querySelectorAll('.langs button').forEach(function (b) {
    b.addEventListener('click', function () { aplicar(b.dataset.set); });
  });
})();
