import Navbar from "./Navbar"
import Footer from "./Footer"

export default function BaseLayout({
  children,
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />

      <main className="flex-1">
        {children}
      </main>

      <Footer />
    </div>
  )
}
