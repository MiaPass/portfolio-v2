"use client";

import { useState } from "react";
import { MorphIcon } from "morphicons/react";

export default function MorphHoverIcon({
  idleIcon,
  hoverIcon,
  size = 20,
  className = "",
  spring = "smooth",
  label,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <span
      className={`inline-flex ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <MorphIcon
        icon={hovered ? hoverIcon : idleIcon}
        size={size}
        spring={spring}
        reducedMotion="user"
        label={label}
      />
    </span>
  );
}
