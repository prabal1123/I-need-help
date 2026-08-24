// Replace this one value with the official In-Sight demo video ID.
export const YOUTUBE_VIDEO_ID = "nNRoa78kc-s"; // TEMP placeholder

/**
 * Wires up all interactivity for the In-Sight landing page.
 * `root` is the DOM node the HTML was injected into (via dangerouslySetInnerHTML).
 * Returns a cleanup function to remove listeners/observers on unmount.
 */
export function initInSight(root) {
  if (!root) return () => {};

  const cleanupFns = [];

  // --- Nav scroll state ---
  const nav = root.querySelector('#siteNav');
  if (nav) {
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    cleanupFns.push(() => window.removeEventListener('scroll', onScroll));
  }

  // --- Mobile menu ---
  const navToggle = root.querySelector('#navToggle');
  const mobileMenu = root.querySelector('#mobileMenu');
  if (navToggle && mobileMenu) {
    const onToggle = () => mobileMenu.classList.toggle('open');
    navToggle.addEventListener('click', onToggle);
    cleanupFns.push(() => navToggle.removeEventListener('click', onToggle));

    const links = mobileMenu.querySelectorAll('a');
    const onLinkClick = () => mobileMenu.classList.remove('open');
    links.forEach((a) => a.addEventListener('click', onLinkClick));
    cleanupFns.push(() => links.forEach((a) => a.removeEventListener('click', onLinkClick)));
  }

  // --- Reveal on scroll ---
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  root.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => io.observe(el));
  cleanupFns.push(() => io.disconnect());

  // --- Video play ---
  const playBtn = root.querySelector('#playBtn');
  const videoShell = root.querySelector('#videoShell');
  const onPlay = () => {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`;
    iframe.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowFullscreen = true;
    iframe.style.display = 'block';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = '0';
    videoShell.innerHTML = '';
    videoShell.appendChild(iframe);
  };
  if (playBtn && videoShell) {
    playBtn.addEventListener('click', onPlay);
    cleanupFns.push(() => playBtn.removeEventListener('click', onPlay));
  }

  return () => cleanupFns.forEach((fn) => fn());
}
