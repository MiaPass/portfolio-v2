import "./globals.css";

export const metadata = {
  title: "Mia Passalia | Desarrollador Fullstack",
  description:
    "Portafolio de Mia Passalia, desarrolladora fullstack de Argentina.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="antialiased bg-[#0b0c0d] text-[#dfdfdf]">
        {children}
      </body>
    </html>
  );
}
