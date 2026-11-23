/**
 * Run a setup fn when `el` nears the viewport (or immediately if already near),
 * preferably inside requestIdleCallback to keep the main thread free.
 * Returns a cleanup that disconnects the observer and runs the setup cleanup.
 */
export function whenNearViewport(el, setup, { rootMargin = "40% 0px" } = {}) {
  if (!el || typeof setup !== "function") {
    return () => {};
  }

  let cleaned = false;
  let setupCleanup = () => {};
  let idleId = 0;
  let timeoutId = 0;
  let observer;

  const runSetup = () => {
    if (cleaned) return;
    const result = setup();
    if (typeof result === "function") {
      setupCleanup = result;
    }
  };

  const schedule = () => {
    if (cleaned) return;
    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(runSetup, { timeout: 1200 });
    } else {
      timeoutId = window.setTimeout(runSetup, 1);
    }
  };

  // Avoid layout read + style write in the same frame: only observe.
  observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer?.disconnect();
      observer = undefined;
      schedule();
    },
    { rootMargin, threshold: 0 },
  );
  observer.observe(el);

  return () => {
    cleaned = true;
    observer?.disconnect();
    if (idleId && typeof window.cancelIdleCallback === "function") {
      window.cancelIdleCallback(idleId);
    }
    if (timeoutId) window.clearTimeout(timeoutId);
    setupCleanup();
  };
}
