import Navbar from "./Navbar";
import Footer from "./Footer";

export default function BaseLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0c0d] text-[#dfdfdf]">
      <Navbar />

      <main className="flex-1 pt-16">{children}</main>

      <Footer />
    </div>
  );
}
