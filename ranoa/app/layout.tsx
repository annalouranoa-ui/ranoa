import Header from "../components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#120b07] text-[#ede0d4] flex flex-col antialiased">
        <Header />
        <main className="flex-1 max-w-6xl mx-auto px-6 py-10 w-full">
          {children}
        </main>
        <footer className="border-t border-[#2a1a10] py-6 text-center text-xs text-[#a38d7d]">
          © {new Date().getFullYear()} Ranoa Brew. Crafted with Next.js & Coffee.
        </footer>
      </body>
    </html>
  );
}