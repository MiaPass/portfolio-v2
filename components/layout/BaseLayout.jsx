import Navbar from "./Navbar";
import Footer from "./Footer";
import LocaleHtmlLang from "./LocaleHtmlLang";

export default function BaseLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <LocaleHtmlLang />
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
