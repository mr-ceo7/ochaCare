'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 w-full z-[100] px-4 sm:px-6 py-4">
        <div
          className={`max-w-7xl mx-auto flex items-center justify-between glass-nav rounded-2xl px-5 sm:px-8 py-3.5 transition-all duration-300 ${
            scrolled ? 'shadow-lg shadow-primary/10' : ''
          }`}
        >
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <AppLogo size={56} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-muted-foreground">
            {navLinks?.map((link) => (
              <a
                key={link?.href}
                href={link?.href}
                className="hover:text-primary transition-colors duration-200 relative group"
              >
                {link?.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/254716200098"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 whatsapp-btn text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wide"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={16} variant="solid" />
              WhatsApp Us
            </a>
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-muted hover:bg-secondary transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <Icon name={menuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={22} />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[90] md:hidden">
          <div
            className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute top-20 left-4 right-4 glass-nav rounded-3xl p-8 shadow-2xl">
            <nav className="flex flex-col gap-1">
              {navLinks?.map((link) => (
                <a
                  key={link?.href}
                  href={link?.href}
                  onClick={handleLinkClick}
                  className="text-lg font-semibold text-foreground hover:text-primary transition-colors py-3 border-b border-border last:border-0"
                >
                  {link?.label}
                </a>
              ))}
            </nav>
            <a
              href="https://wa.me/254716200098"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 whatsapp-btn text-white px-6 py-4 rounded-2xl text-sm font-bold uppercase tracking-wide w-full"
              onClick={handleLinkClick}
            >
              <Icon name="ChatBubbleLeftRightIcon" size={18} variant="solid" />
              WhatsApp Us Now
            </a>
          </div>
        </div>
      )}
    </>
  );
}
