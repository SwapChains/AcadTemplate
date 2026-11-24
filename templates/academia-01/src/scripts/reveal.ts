// Fallback do reveal para navegadores SEM scroll-driven animations (ex.: Firefox).
// Onde há suporte, o CSS faz tudo sozinho e este script não faz nada.
// Alterna as classes nos dois sentidos: aparece ao entrar, some ao sair.
const supported = CSS.supports('animation-timeline: view()');
const els = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (!supported) {
  if (!('IntersectionObserver' in window)) {
    els.forEach((el) => el.classList.add('is-visible'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        for (const { target, isIntersecting, boundingClientRect } of entries) {
          target.classList.toggle('is-visible', isIntersecting);
          // Saiu pelo topo → some para cima; saiu por baixo → volta ao estado inicial.
          target.classList.toggle('is-above', !isIntersecting && boundingClientRect.top < 0);
        }
      },
      { rootMargin: '-8% 0px -8% 0px', threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
  }
}
