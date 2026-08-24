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

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <nav className="mb-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm/6">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-amber-400"
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="mb-6 flex justify-center gap-6">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <span className="sr-only">{item.name}</span>
              <img src={item.icon} alt={item.name} className="h-6 w-6 invert" />
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-400">Ianina Mia Passalia 2025</p>
      </div>
    </footer>
  );
}
