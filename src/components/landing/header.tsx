"use client";

import { Button } from "@/components/ui/button";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  variant?: "transparent" | "solid";
}

export function Header({ variant = "transparent" }: HeaderProps) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const isTransparent = variant === 'transparent';

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/vision", label: "Our Vision" },
    { href: "/#events", label: "Events" },
    { href: "/#contact", label: "Contact" },
  ];

  const showTransparent = isTransparent && !scrolled && !isMenuOpen;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${showTransparent ? 'bg-transparent text-white' : 'bg-white shadow-md text-black'}`}
    >
      <div className="container mx-auto flex items-center justify-between p-4 h-20">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          SERVING KINGDOM KC
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-primary transition-colors text-sm uppercase tracking-widest">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button variant={showTransparent ? 'outline-white' : 'default'}>Donate</Button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {isMobile && isMenuOpen && (
        <div className="bg-white text-black absolute top-20 left-0 w-full h-[calc(100vh-5rem)] flex flex-col items-center justify-center gap-8">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-2xl uppercase tracking-widest" onClick={() => setIsMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Button variant="default" size="lg" className="mt-4">Donate</Button>
        </div>
      )}
    </header>
  );
}