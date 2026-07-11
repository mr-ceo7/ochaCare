'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const trustPoints = [
  {
    icon: 'ShieldCheckIcon' as const,
    title: 'Vetted Care Agents',
    desc: 'Every OchaCare agent is background-checked, trained in patient handling, and bound by a strict confidentiality agreement.',
  },
  {
    icon: 'EyeSlashIcon' as const,
    title: '100% Confidential',
    desc: "Your family's medical details, appointments, and personal information stay strictly private — always.",
  },
  {
    icon: 'ClockIcon' as const,
    title: 'Punctual & Dependable',
    desc: 'We confirm every appointment 24 hours prior and arrive early — because missing a hospital slot is never an option.',
  },
  {
    icon: 'DevicePhoneMobileIcon' as const,
    title: "You're Always in the Loop",
    desc: "From the moment we pick up your relative to the final update call, you receive timely messages so you're never left guessing.",
  },
];

const testimonials = [
  {
    quote:
      "My mother had a cardiology follow-up and I was in Manchester. OchaCare picked her up, sat with her through the whole appointment, and sent me the doctor's notes within an hour. I cried with relief.",
    name: 'Grace Wanjiru',
    role: 'Kenyan Diaspora, Manchester UK',
    avatar: 'https://i.pravatar.cc/150?u=grace-wanjiru-ocha',
  },
  {
    quote:
      "I was worried about my father navigating Kenyatta National Hospital alone after his surgery. The care agent stayed for 4 hours, handled everything, and my dad said it was the calmest hospital visit he's ever had.",
    name: 'David Omondi',
    role: 'Kenyan Diaspora, Dubai UAE',
    avatar: 'https://i.pravatar.cc/150?u=david-omondi-ocha',
  },
];

const stats = [
  { value: '100%', label: 'Confidential Service' },
  { value: '2hr', label: 'Response Time' },
  { value: '24/7', label: 'Family Support Line' },
  { value: '0', label: 'Missed Appointments' },
];

export default function WhyUsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      [leftRef.current, rightRef.current, statsRef.current].forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: i * 0.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        );
      });
    };
    initGSAP();
  }, []);

  return (
    <section id="why-us" ref={sectionRef} className="py-16 lg:py-28 px-4 sm:px-6 bg-card">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Stats bar */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 p-6 sm:p-8 bg-primary rounded-3xl sm:rounded-4xl shadow-xl shadow-primary/20 opacity-100"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary-foreground tracking-tighter mb-1">
                {stat.value}
              </p>
              <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-primary-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Main split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 items-start">
          {/* Left: Trust points */}
          <div ref={leftRef} className="space-y-8 sm:space-y-10 opacity-100">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">
                Why Families Choose Us
              </p>
              <h2 className="text-display font-extrabold text-foreground">
                Peace of Mind, <span className="text-primary">Delivered.</span>
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {trustPoints.map((point) => (
                <div
                  key={point.title}
                  className="flex gap-3 sm:gap-4 p-4 sm:p-5 bg-background rounded-2xl sm:rounded-3xl border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <Icon name={point.icon} size={20} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-foreground mb-1 text-sm sm:text-base">
                      {point.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Testimonials */}
          <div ref={rightRef} className="flex flex-col gap-5 sm:gap-6 opacity-100">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">
                Family Stories
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-4 sm:mb-6">
                Trusted by Families Across the Diaspora
              </h3>
            </div>

            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`p-5 sm:p-7 rounded-3xl sm:rounded-4xl border-l-4 space-y-4 sm:space-y-5 hover:shadow-lg transition-all ${
                  i === 0 ? 'bg-secondary border-primary' : 'bg-muted border-accent'
                }`}
              >
                <div className="flex gap-1 text-accent">
                  {[...Array(5)].map((_, si) => (
                    <Icon
                      key={si}
                      name="StarIcon"
                      size={14}
                      variant="solid"
                      className="text-accent"
                    />
                  ))}
                </div>
                <p className="text-foreground text-sm sm:text-base leading-relaxed italic font-medium">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-border">
                    <AppImage
                      src={t.avatar}
                      alt={`Portrait of ${t.name}, OchaCare Kenya client`}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">{t.name}</p>
                    <p className="text-[10px] sm:text-[11px] text-muted-foreground uppercase tracking-widest">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
