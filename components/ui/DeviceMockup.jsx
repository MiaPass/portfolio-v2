"use client";

import Image from "next/image";
import Tilt from "@/components/ui/Tilt";

/**
 * Responsive product mockup: browser chrome on md+, phone shell on small screens.
 */
export default function DeviceMockup({
  src,
  alt,
  priority = false,
  className = "",
  tilt = true,
}) {
  const media = (
    <>
      {/* Phone — mobile */}
      <div className="mx-auto w-full max-w-[240px] md:hidden">
        <div className="relative overflow-hidden rounded-[1.75rem] border-[3px] border-border bg-card shadow-2xl ring-1 ring-border">
          <div className="absolute inset-x-0 top-0 z-10 flex justify-center pt-2" aria-hidden="true">
            <span className="h-1.5 w-16 rounded-full bg-muted-foreground/40" />
          </div>
          <div className="aspect-[9/19] bg-muted pt-5">
            <Image
              src={src}
              alt={alt}
              width={390}
              height={844}
              priority={priority}
              className="h-full w-full object-cover object-top"
              sizes="240px"
            />
          </div>
        </div>
      </div>

      {/* Browser — desktop */}
      <div className="hidden w-full md:block">
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl ring-1 ring-border">
          <div
            className="flex items-center gap-2 border-b border-border bg-muted/80 px-3 py-2.5"
            aria-hidden="true"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 h-5 flex-1 rounded-md bg-muted/80" />
          </div>
          <div className="relative aspect-[16/10] bg-muted">
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={750}
              priority={priority}
              className="h-full w-full object-cover object-top"
              sizes="(max-width: 1024px) 40vw, 416px"
            />
          </div>
        </div>
      </div>
    </>
  );

  if (!tilt) {
    return <div className={className}>{media}</div>;
  }

  return (
    <Tilt className={className} max={8}>
      {media}
    </Tilt>
  );
}
