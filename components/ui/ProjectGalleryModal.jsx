"use client";

import { Fragment, useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight, X } from "lucide";
import { MorphIcon } from "morphicons/react";

function getModalStateClass(isOpen, closing) {
  if (closing) return "is-closing";
  if (isOpen) return "is-open";
  return "";
}

export default function ProjectGalleryModal({
  isOpen,
  onClose,
  title,
  images = [],
}) {
  const t = useTranslations("projects");
  const [index, setIndex] = useState(0);
  const [closing, setClosing] = useState(false);
  const total = images.length;

  useEffect(() => {
    if (isOpen) {
      setIndex(0);
      setClosing(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || total < 2) return;

    function onKeyDown(event) {
      if (event.key === "ArrowLeft") {
        setIndex((current) => (current - 1 + total) % total);
      }
      if (event.key === "ArrowRight") {
        setIndex((current) => (current + 1) % total);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, total]);

  const current = total > 0 ? images[Math.min(index, total - 1)] : null;
  const show = isOpen && total > 0 && !closing;
  const modalStateClass = getModalStateClass(isOpen, closing);

  function handleClose() {
    setClosing(true);
    const closeMs =
      Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--modal-close-dur",
        ),
      ) || 150;
    window.setTimeout(() => {
      setClosing(false);
      onClose();
    }, closeMs);
  }

  return (
    <Transition show={isOpen && total > 0} as={Fragment}>
      <Dialog as="div" className="relative z-100" onClose={handleClose}>
        <TransitionChild
          as={Fragment}
          enter="ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          style={{
            transitionDuration: show
              ? "var(--modal-open-dur)"
              : "var(--modal-close-dur)",
            transitionTimingFunction: "var(--modal-ease)",
          }}
        >
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm" />
        </TransitionChild>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <DialogPanel
                className={`t-modal relative w-full max-w-5xl overflow-hidden rounded-(--radius) bg-card shadow-xl ring-1 ring-border ${modalStateClass}`}
              >
                <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 sm:px-6">
                  <DialogTitle className="truncate font-display text-base font-semibold text-foreground sm:text-lg">
                    {title}
                  </DialogTitle>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-muted-foreground">
                      {total > 0 ? `${index + 1} / ${total}` : null}
                    </span>
                    <button
                      type="button"
                      onClick={handleClose}
                      className="rounded-lg p-1 text-muted-foreground transition hover:bg-accent hover:text-foreground"
                      aria-label={t("closeGallery")}
                    >
                      <MorphIcon
                        icon={X}
                        size={24}
                        spring="snappy"
                        reducedMotion="user"
                      />
                    </button>
                  </div>
                </div>

                <div className="relative bg-background">
                  {current ? (
                    <img
                      src={current}
                      alt={`${title} — ${index + 1}`}
                      className="mx-auto max-h-[70vh] w-full object-contain"
                    />
                  ) : null}

                  {total > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setIndex(
                            (currentIndex) =>
                              (currentIndex - 1 + total) % total,
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground ring-1 ring-border backdrop-blur-sm transition hover:bg-card"
                        aria-label={t("prevImage")}
                      >
                        <MorphIcon
                          icon={ChevronLeft}
                          size={24}
                          spring="smooth"
                          reducedMotion="user"
                        />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setIndex((currentIndex) => (currentIndex + 1) % total)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground ring-1 ring-border backdrop-blur-sm transition hover:bg-card"
                        aria-label={t("nextImage")}
                      >
                        <MorphIcon
                          icon={ChevronRight}
                          size={24}
                          spring="smooth"
                          reducedMotion="user"
                        />
                      </button>
                    </>
                  )}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
