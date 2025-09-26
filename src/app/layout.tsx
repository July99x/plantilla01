import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Vanguard | Diseño Web",
  description: "Landing moderna con Next.js + Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased bg-[#0E0E10] text-[#F3F3F3]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
