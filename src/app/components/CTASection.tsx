'use client';

import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap?.registerPlugin(ScrollTrigger);

      gsap?.fromTo(
        contentRef?.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: contentRef?.current, start: 'top 85%' },
        }
      );
      gsap?.fromTo(
        contactRef?.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: { trigger: contactRef?.current, start: 'top 88%' },
        }
      );
    };
    initGSAP();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-16 lg:py-28 px-4 sm:px-6 bg-primary relative overflow-hidden"
    >
      {/* Background decorations */}
      <div
        className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(76,175,125,0.2),transparent_60%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div ref={contentRef} className="opacity-100 space-y-5 sm:space-y-6 mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-2">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/80">
              Launching Soon · Book Early
            </span>
          </div>

          <h2 className="text-display font-extrabold text-primary-foreground">
            Your Family Deserves <span className="teal-text-outline">Trusted Hands.</span>
          </h2>

          <p className="text-base sm:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Whether it&apos;s a routine check-up or a complex specialist visit — OchaCare Kenya
            ensures your loved one is never alone, never lost, and never without someone who cares.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 px-4 sm:px-0">
            <a
              href="https://wa.me/254716200098"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn flex items-center justify-center gap-2.5 text-white px-8 sm:px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wide min-h-[52px] w-full sm:w-auto"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={18} variant="solid" />
              Start on WhatsApp
            </a>
            <a
              href="mailto:ochacarekenya@gmail.com"
              className="flex items-center justify-center gap-2 bg-white/15 border border-white/30 text-white px-8 sm:px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-white/25 transition-all min-h-[52px] w-full sm:w-auto"
            >
              <Icon name="EnvelopeIcon" size={18} />
              Send an Email
            </a>
          </div>
        </div>

        {/* Contact details */}
        <div
          ref={contactRef}
          className="opacity-100 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          <a
            href="tel:+254716200098"
            className="flex flex-row sm:flex-col items-center sm:items-center gap-3 sm:gap-2 p-4 sm:p-5 bg-white/10 rounded-2xl sm:rounded-3xl border border-white/15 hover:bg-white/20 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-all">
              <Icon name="PhoneIcon" size={20} className="text-white" />
            </div>
            <div className="flex flex-col sm:items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                Call Us
              </span>
              <span className="text-white font-bold text-sm">+254 716 200 098</span>
            </div>
          </a>

          <a
            href="mailto:ochacarekenya@gmail.com"
            className="flex flex-row sm:flex-col items-center sm:items-center gap-3 sm:gap-2 p-4 sm:p-5 bg-white/10 rounded-2xl sm:rounded-3xl border border-white/15 hover:bg-white/20 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-all">
              <Icon name="EnvelopeIcon" size={20} className="text-white" />
            </div>
            <div className="flex flex-col sm:items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                Email Us
              </span>
              <span className="text-white font-bold text-sm break-all">
                ochacarekenya@gmail.com
              </span>
            </div>
          </a>

          <a
            href="https://wa.me/254716200098"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row sm:flex-col items-center sm:items-center gap-3 sm:gap-2 p-4 sm:p-5 bg-white/10 rounded-2xl sm:rounded-3xl border border-white/15 hover:bg-white/20 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-all">
              <Icon name="ChatBubbleLeftRightIcon" size={20} className="text-white" />
            </div>
            <div className="flex flex-col sm:items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-white/60">
                WhatsApp
              </span>
              <span className="text-white font-bold text-sm">+254 716 200 098</span>
            </div>
          </a>
        </div>

        <p className="mt-8 sm:mt-10 text-white/50 text-xs font-semibold uppercase tracking-[0.2em]">
          Confidential · Compassionate · Reliable
        </p>
      </div>
    </section>
  );
}
