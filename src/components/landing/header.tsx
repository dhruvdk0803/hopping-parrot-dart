"use client";

import { Button } from "@/components/ui/button";
import { useScroll, useMotionValueEvent, AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowUpRight, User } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface HeaderProps {
  variant?: "transparent" | "solid";
}

const navItems = [
  { label: "Home", href: "/" },
  { label: "Tournaments", href: "/tournaments" },
  { label: "Memberships", href: "/memberships" },
  { label: "KC Nonprofits", href: "/kc-nonprofits" },
  {
    label: "About",
    items: [
      { label: "Our Vision", href: "/vision" },
      { label: "Tribe", href: "/tribe" },
      { label: "Golf Lessons", href: "https://loadinggolf.com/", external: true },
    ]
  },
  { label: "Podcast", href: "https://www.youtube.com/@JeffMcCubbins", external: true },
  {
    label: "Shop",
    items: [
      { label: "Our Store", href: "/store" },
      { label: "Tournament Store", href: "https://perfectgolfevent.com/home-skkc/", external: true },
    ]
  },
  { label: "Contact", href: "/contact", hideOnDesktop: true },
];

export function Header({ variant = "transparent" }: HeaderProps) {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);
  const [user, setUser] = useState<any>(null);

  const isTransparent = variant === 'transparent';

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  // Listen for auth state changes
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleAccordion = (label: string) => {
    setOpenAccordions(prev => 
      prev.includes(label) ? prev.filter(item => item !== label) : [...prev, label]
    );
  };

  const showTransparent = isTransparent && !scrolled;

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 border-b ${
          showTransparent 
            ? 'bg-transparent text-white border-transparent' 
            : 'bg-white text-black border-black/10'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 h-20">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tighter uppercase z-50 relative">
            Serving Kingdom KC
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navItems.filter(item => !item.hideOnDesktop).map((item) => (
              <div key={item.label} className="relative group">
                {item.items ? (
                  <button className="flex items-center gap-1 py-2 text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors">
                    {item.label}
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link 
                    href={item.href!} 
                    target={item.external ? "_blank" : "_self"}
                    rel={item.external ? "noopener noreferrer" : ""}
                    className="relative py-2 text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 flex items-center gap-1"
                  >
                    {item.label}
                    {item.external && <ArrowUpRight className="w-3 h-3 opacity-50" />}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {item.items && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                    <div className="bg-white text-black border border-black min-w-[200px] py-2 shadow-xl">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          target={subItem.external ? "_blank" : "_self"}
                          rel={subItem.external ? "noopener noreferrer" : ""}
                          className="flex items-center justify-between px-6 py-3 text-sm font-medium hover:bg-gray-50 hover:text-primary transition-colors"
                        >
                          {subItem.label}
                          {subItem.external && <ArrowUpRight className="w-4 h-4 ml-2 opacity-50" />}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden xl:flex items-center gap-6">
            {user ? (
              <Link href="/dashboard" className="hover:text-primary transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-widest" aria-label="Dashboard">
                <User className="w-5 h-5" />
                Account
              </Link>
            ) : (
              <Link href="/login" className="hover:text-primary transition-colors" aria-label="Login">
                <User className="w-5 h-5" />
              </Link>
            )}
            <Button 
              asChild
              className="rounded-none bg-primary hover:bg-black text-white uppercase tracking-widest font-bold h-12 px-8 transition-all duration-300 hover:scale-[1.02]"
            >
              <Link href="/donate">Donate</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="xl:hidden z-50 relative p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white text-black flex flex-col xl:hidden"
          >
            {/* Mobile Header Space (matches main header height) */}
            <div className="h-20 flex-shrink-0 border-b border-black/10" />

            {/* Mobile Scrollable Content */}
            <div className="flex-1 overflow-y-auto py-8 px-6">
              <nav className="flex flex-col gap-6">
                {navItems.map((item, index) => {
                  // Add dividers before specific sections
                  const needsDivider = item.label === "About" || item.label === "Contact";
                  
                  return (
                    <div key={item.label} className="flex flex-col">
                      {needsDivider && <div className="w-full h-px bg-black/10 my-2" />}
                      
                      {item.items ? (
                        <div className="flex flex-col">
                          <button 
                            onClick={() => toggleAccordion(item.label)}
                            className="flex items-center justify-between py-2 text-2xl font-bold tracking-tighter uppercase text-left"
                          >
                            {item.label}
                            <ChevronDown 
                              className={`w-6 h-6 transition-transform duration-300 ${openAccordions.includes(item.label) ? 'rotate-180' : ''}`} 
                            />
                          </button>
                          <AnimatePresence>
                            {openAccordions.includes(item.label) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="flex flex-col gap-4 py-4 pl-4 border-l-2 border-primary/30 ml-2 mt-2">
                                  {item.items.map((subItem) => (
                                    <Link
                                      key={subItem.label}
                                      href={subItem.href}
                                      target={subItem.external ? "_blank" : "_self"}
                                      rel={subItem.external ? "noopener noreferrer" : ""}
                                      onClick={() => setIsMenuOpen(false)}
                                      className="flex items-center text-lg font-medium text-gray-600 hover:text-primary transition-colors"
                                    >
                                      {subItem.label}
                                      {subItem.external && <ArrowUpRight className="w-4 h-4 ml-2" />}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link 
                          href={item.href!} 
                          target={item.external ? "_blank" : "_self"}
                          rel={item.external ? "noopener noreferrer" : ""}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center py-2 text-2xl font-bold tracking-tighter uppercase hover:text-primary transition-colors"
                        >
                          {item.label}
                          {item.external && <ArrowUpRight className="w-5 h-5 ml-2 opacity-50" />}
                        </Link>
                      )}
                    </div>
                  );
                })}
                
                {user ? (
                  <Link 
                    href="/dashboard" 
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 py-2 text-2xl font-bold tracking-tighter uppercase hover:text-primary transition-colors mt-4"
                  >
                    <User className="w-6 h-6" />
                    My Account
                  </Link>
                ) : (
                  <Link 
                    href="/login" 
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-3 py-2 text-2xl font-bold tracking-tighter uppercase hover:text-primary transition-colors mt-4"
                  >
                    <User className="w-6 h-6" />
                    Login
                  </Link>
                )}
              </nav>
            </div>

            {/* Mobile Sticky Bottom Action */}
            <div className="p-6 border-t border-black/10 bg-white flex-shrink-0">
              <Button 
                asChild
                className="w-full rounded-none bg-primary hover:bg-black text-white uppercase tracking-widest font-bold h-[52px] text-lg transition-colors duration-300"
              >
                <Link href="/donate" onClick={() => setIsMenuOpen(false)}>Donate</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}