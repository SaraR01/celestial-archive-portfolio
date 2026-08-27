import gsap from 'gsap';

const reducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function introTimeline(root: HTMLElement) {
  if (reducedMotion()) return;
  const q = gsap.utils.selector(root);
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.from(q('[data-hero-kicker]'), { opacity: 0, y: 16, duration: 0.5 })
    .from(q('[data-hero-title]'), { opacity: 0, y: 26, duration: 0.8 }, '-=0.2')
    .from(q('[data-hero-copy]'), { opacity: 0, y: 18, duration: 0.6 }, '-=0.4')
    .from(q('[data-hero-cta]'), { opacity: 0, y: 12, duration: 0.45 }, '-=0.25')
    .from(
      q('[data-book]'),
      { opacity: 0, y: 44, rotateY: -8, stagger: 0.08, duration: 0.65 },
      '-=0.15',
    );

  return tl;
}

export function openBookTimeline(
  book: HTMLElement,
  modal: HTMLElement,
  constellation?: HTMLElement | null,
) {
  if (reducedMotion()) {
    gsap.set(modal, { display: 'grid', opacity: 1 });
    return;
  }

  const rect = book.getBoundingClientRect();
  const clone = book.cloneNode(true) as HTMLElement;

  Object.assign(clone.style, {
    position: 'fixed',
    left: `${rect.left}px`,
    top: `${rect.top}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    margin: '0',
    zIndex: '90',
    pointerEvents: 'none',
  });

  document.body.appendChild(clone);

  gsap.set(clone, {
    transformPerspective: 900,
    transformOrigin: '50% 50%',
  });

  const isMobile = window.matchMedia('(max-width: 900px)').matches;
  const openBook = modal.querySelector('.open-book') as HTMLElement | null;
  const tl = gsap.timeline({
    onComplete: () => clone.remove(),
    onInterrupt: () => clone.remove(),
  });

  gsap.set(modal, { display: 'grid', opacity: 0 });
  if (constellation) gsap.set(constellation, { opacity: 0 });

  if (isMobile) {
    tl.to('[data-library-shell]', { filter: 'brightness(0.35)', duration: 0.35 })
      .to(clone, {
        left: '50%',
        top: '50%',
        xPercent: -50,
        yPercent: -50,
        scale: 1.65,
        rotateY: 8,
        duration: 0.7,
        ease: 'power3.inOut',
      })
      .to(clone, { rotateY: -14, duration: 0.25, ease: 'sine.inOut' })
      .to(constellation || {}, { opacity: 1, duration: 0.25 }, '-=0.12')
      .to(modal, { opacity: 1, duration: 0.42 }, '-=0.12')
      .to(clone, { opacity: 0, duration: 0.18 }, '-=0.25');

    return tl;
  }

  if (openBook) {
    gsap.set(openBook, {
      opacity: 0,
      scale: 0.82,
      rotateX: 3,
      transformPerspective: 1200,
      transformOrigin: '50% 50%',
      '--book-highlight': 0,
    });
  }

  tl.to('[data-library-shell]', { filter: 'brightness(0.32)', duration: 0.18 })
    .to(clone, {
      filter: 'brightness(1.12)',
      boxShadow: '0 0 30px rgba(214, 132, 73, .3)',
      duration: 0.16,
    }, 0)
    // 1. Sale de la estantería y crece
    .to(clone, {
      left: '50%',
      top: '50%',
      xPercent: -50,
      yPercent: -50,
      scale: 1.85,
      rotateY: -4,
      rotateZ: 0,
      duration: 0.48,
      ease: 'power3.inOut',
    })

    // 2. Continúa creciendo mientras se prepara para abrir
    .to(clone, {
      scale: 2.15,
      rotateY: 0,
      duration: 0.22,
      ease: 'power2.out',
    })

    // 3. Simula el comienzo de la apertura
    .to(clone, {
      scaleX: 2.65,
      scaleY: 2.15,
      opacity: 0,
      duration: 0.28,
      ease: 'power2.inOut',
    })
    .to(
      modal,
      {
        opacity: 1,
        duration: 0.28,
        ease: 'power2.out',
      },
      '-=0.12',
    )

    .to(
      constellation || {},
      {
        opacity: 0.8,
        duration: 0.28,
      },
      '-=0.32',
    )
    .to(
      openBook || {},
      {
        opacity: 1,
        scale: 1,
        rotateX: 0,
        duration: 0.38,
        ease: 'power3.out',
      },
      '-=0.18',
    )
    .to(
      openBook || {},
      {
        '--book-highlight': 0.65,
        duration: 0.12,
      },
      '-=0.10',
    )
    .to(openBook || {}, {
      '--book-highlight': 0.2,
      duration: 0.16,
    });

  return tl;
}

export function closeBookTimeline(modal: HTMLElement) {
  if (reducedMotion()) {
    gsap.set(modal, { display: 'none', opacity: 0 });
    gsap.set('[data-library-shell]', { filter: 'none' });
    return;
  }

  return gsap
    .timeline()
    .to(modal, { opacity: 0, duration: 0.28 })
    .set(modal, { display: 'none' })
    .to('[data-library-shell]', { filter: 'none', duration: 0.32 });
}
