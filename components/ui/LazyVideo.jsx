"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Project videos: poster-only until near viewport or hover; preload=none.
 */
export default function LazyVideo({
  src,
  poster,
  className = "",
  ...props
}) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || active) return undefined;

    const activate = () => setActive(true);

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          activate();
          io.disconnect();
        }
      },
      { rootMargin: "120px 0px", threshold: 0.01 },
    );

    io.observe(el);

    const onHover = () => activate();
    el.addEventListener("pointerenter", onHover);
    el.addEventListener("focusin", onHover);

    return () => {
      io.disconnect();
      el.removeEventListener("pointerenter", onHover);
      el.removeEventListener("focusin", onHover);
    };
  }, [active]);

  useEffect(() => {
    if (!active) return undefined;
    const video = ref.current;
    if (!video) return undefined;

    const play = () => {
      video.play().catch(() => {});
    };

    if (video.readyState >= 2) {
      play();
    } else {
      video.addEventListener("loadeddata", play, { once: true });
    }

    return () => {
      video.pause();
    };
  }, [active, src]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      preload="none"
      muted
      loop
      playsInline
      {...(active ? { src, autoPlay: true } : {})}
      {...props}
    />
  );
}
