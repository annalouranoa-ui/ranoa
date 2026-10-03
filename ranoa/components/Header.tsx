"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Index", href: "/" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About", href: "/about" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <header className="bg-[#1c120c]/90 backdrop-blur-md border-b border-[#322015] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-[#d4a373] via-[#e6ccb2] to-[#ddb892] bg-clip-text text-transparent flex items-center gap-2">
          <span>☕</span> Ranoa Brew
        </Link>
        <nav className="flex space-x-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "bg-[#b08968] text-[#1c120c] font-semibold shadow-md shadow-[#b08968]/20"
                    : "text-[#ddb892] hover:text-[#f5abe] hover:bg-[#2c1d14]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}