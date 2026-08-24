"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const links = [
  { name: "Inicio", href: "#welcome" },
  { name: "Sobre mí", href: "#about-me" },
  { name: "Tecnologías", href: "#technologies" },
  { name: "Experiencia", href: "#experience" },
  { name: "Proyectos", href: "#projects" },
];

const socials = [
  {
    name: "GitHub",
    href: "https://www.github.com/MiaPass",
    icon: "/svg/github.svg",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ninamiapassalia/",
    icon: "/svg/linkedin.svg",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gray-900/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Link href="/" className="text-xl font-bold text-white">
          Mia Passalia
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold text-gray-300 hover:text-white"
            >
              {item.name}
            </a>
          ))}
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-6 w-6 items-center justify-center text-gray-300 hover:text-white"
            >
              <span className="sr-only">{item.name}</span>
              <img src={item.icon} alt={item.name} className="h-6 w-6 invert" />
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="-m-2.5 p-2.5 text-gray-400 lg:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          {open ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden">
          <div className="space-y-2 border-t border-gray-800 px-6 pb-6 pt-4">
            {links.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-300 hover:bg-white/5 hover:text-white"
              >
                {item.name}
              </a>
            ))}
            <div className="flex gap-4 px-3 pt-2">
              {socials.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="flex h-8 w-8 items-center justify-center text-amber-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="h-6 w-6 invert"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
