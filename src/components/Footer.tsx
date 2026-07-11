import React from 'react';
import AppLogo from '@/components/ui/AppLogo';
import Icon from '@/components/ui/AppIcon';

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 sm:py-14 px-4 sm:px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-start md:justify-between">
          {/* Left: Logo + Tagline */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <AppLogo size={44} />
              <span className="font-extrabold text-lg tracking-tight text-foreground">
                Ocha<span className="text-primary">Care</span>
                <span className="text-muted-foreground font-medium text-sm ml-1">Kenya</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground font-medium max-w-xs leading-relaxed">
              Confidential, Compassionate &amp; Reliable Care Agents.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-3">
            <a
              href="#services"
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded"
            >
              How It Works
            </a>
            <a
              href="#why-us"
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded"
            >
              Why Us
            </a>
            <a
              href="mailto:ochacarekenya@gmail.com"
              className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-medium text-center sm:text-left">
            © 2026 OchaCare Kenya. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://wa.me/254716200098"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded"
              aria-label="WhatsApp OchaCare Kenya"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={18} />
            </a>
            <a
              href="mailto:ochacarekenya@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded"
              aria-label="Email OchaCare Kenya"
            >
              <Icon name="EnvelopeIcon" size={18} />
            </a>
            <a
              href="tel:+254716200098"
              className="text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring rounded"
              aria-label="Call OchaCare Kenya"
            >
              <Icon name="PhoneIcon" size={18} />
            </a>
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
