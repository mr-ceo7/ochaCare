'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const steps = [
  {
    number: '01',
    icon: 'ChatBubbleLeftRightIcon' as const,
    title: 'Reach Out to Us',
    description:
      'Contact OchaCare Kenya via WhatsApp or email. Tell us about your loved one, the appointment date, location, and any specific needs. We respond within 2 hours.',
    detail: 'WhatsApp · Email · Phone',
    image: '/assets/images/step_whatsapp.jpg',
    imageAlt:
      'Person using smartphone to send WhatsApp message, bright home office, warm natural light',
  },
  {
    number: '02',
    icon: 'ClipboardDocumentCheckIcon' as const,
    title: 'We Plan & Confirm',
    description:
      'Your dedicated care agent reviews all details, confirms the appointment, plans the route, and prepares any required documents — so nothing is left to chance on the day.',
    detail: 'Dedicated agent assigned',
    image: '/assets/images/step_coordinator.jpg',
    imageAlt:
      'Care coordinator reviewing checklist at clean desk in bright office, organised and professional',
  },
  {
    number: '03',
    icon: 'HeartIcon' as const,
    title: 'We Care, You Stay Informed',
    description:
      'On the day, your care agent escorts your loved one, stays throughout the appointment, handles all communication with medical staff, and sends you a full update immediately after.',
    detail: 'Real-time updates to family',
    image: '/assets/images/hero_agent_man.jpg',
    imageAlt:
      'Care agent accompanying elderly patient through hospital hallway, compassionate and attentive',
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
        }
      );

      stepRefs.current.filter(Boolean).forEach((step, i) => {
        gsap.fromTo(
          step,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: step, start: 'top 82%' },
          }
        );
      });
    };
    initGSAP();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="py-16 lg:py-28 px-4 sm:px-6 bg-background relative overflow-hidden"
    >
      {/* Background accents */}
      <div
        className="absolute top-0 right-0 w-56 sm:w-72 h-56 sm:h-72 blob-teal opacity-40 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-48 sm:w-64 h-48 sm:h-64 blob-green opacity-30 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div ref={headerRef} className="mb-10 sm:mb-16 opacity-100">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">
            Simple Process
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <h2 className="text-display font-extrabold text-foreground max-w-lg">
              Getting Started Is <span className="text-primary">Effortlessly Simple.</span>
            </h2>
            <p className="text-muted-foreground max-w-xs text-base leading-relaxed">
              From your first message to a full post-appointment report — we handle everything.
            </p>
          </div>
        </div>

        {/* Steps — stacked on mobile, alternating on desktop */}
        <div className="space-y-8 sm:space-y-10">
          {steps.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center opacity-100 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-last' : ''
              }`}
            >
              {/* Image side */}
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-4xl sm:rounded-5xl overflow-hidden shadow-xl">
                  <AppImage
                    src={step.image}
                    alt={step.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                </div>
                {/* Step number badge */}
                <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
                  <span className="text-primary-foreground font-extrabold text-base sm:text-lg">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="space-y-4 sm:space-y-5 lg:px-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Icon name={step.icon} size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                    Step {step.number} · {step.detail}
                  </span>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-foreground mt-2 mb-3 sm:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {step.description}
                  </p>
                </div>
                <a
                  href="https://wa.me/254716200098"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all"
                >
                  Start here <Icon name="ArrowRightIcon" size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
