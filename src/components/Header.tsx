import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';

const navItems = [
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Farmer Projects', href: '/#farmer-projects' },
  { name: 'Impact Reports', href: '/#impact' },
  { name: 'Case Studies', href: '/#case-studies' },
  { name: 'Sponsors', href: '/sponsors' },
  { name: 'Contact', href: '/#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent text-white"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className={cn(
            "text-2xl font-black tracking-tighter uppercase transition-colors", 
            isScrolled ? "text-primary" : "text-white"
          )}>
            MASSIVE
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-secondary",
                isScrolled ? "text-on-surface-variant" : "text-white/90"
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <button className={cn("text-sm font-bold", isScrolled ? "text-primary" : "text-white")}>
              Login
            </button>
            <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 hover:scale-105 transition-transform active:scale-95">
              Start Analysis
            </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-4 md:hidden text-primary"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold border-b border-gray-50 pb-2"
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-primary text-white py-4 rounded-xl font-bold mt-4">
              Start Analysis
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
