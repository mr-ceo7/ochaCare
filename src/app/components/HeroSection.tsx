'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const archImages = [
  {
    src: '/assets/images/hero_nurse_hand.jpg',
    alt: 'Nurse gently holding elderly patient hand in bright hospital room, warm natural light',
    style: { left: '3%', top: '72%', transform: 'rotate(-36deg)' },
  },
  {
    src: '/assets/images/hero_care_worker_walk.jpg',
    alt: 'Care worker walking alongside elderly woman in hospital corridor, soft indoor lighting',
    style: { left: '13%', top: '42%', transform: 'rotate(-25deg)' },
  },
  {
    src: '/assets/images/hero_family_comfort.jpg',
    alt: 'Family member comforting patient in bright hospital waiting area',
    style: { left: '24%', top: '16%', transform: 'rotate(-14deg)' },
  },
  {
    src: '/assets/images/hero_doctor_review.jpg',
    alt: 'Doctor reviewing medication with care agent in well-lit clinic',
    style: { left: '37%', top: '4%', transform: 'rotate(-4deg)' },
  },
  {
    src: '/assets/images/WhatsApp_Image_2026-07-10_at_9.50.31_PM-1783709517165.jpeg',
    alt: 'OchaCare Kenya flyer showing trusted care services for families',
    style: { left: '50%', top: '4%', transform: 'rotate(4deg)' },
  },
  {
    src: '/assets/images/hero_agent_man.jpg',
    alt: 'Compassionate care agent assisting elderly man navigate hospital entrance',
    style: { left: '63%', top: '16%', transform: 'rotate(14deg)' },
  },
  {
    src: '/assets/images/hero_pharmacist_review.jpg',
    alt: 'Care professional reviewing prescription medication in pharmacy, warm lighting',
    style: { left: '75%', top: '42%', transform: 'rotate(25deg)' },
  },
  {
    src: '/assets/images/hero_family_liaison.jpg',
    alt: 'Family liaison speaking on phone outside hospital building, bright daylight',
    style: { left: '85%', top: '72%', transform: 'rotate(36deg)' },
  },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const imgRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let gsap: any, ScrollTrigger: any;

    const initGSAP = async () => {
      const gsapMod = await import('gsap');
      const stMod = await import('gsap/ScrollTrigger');
      gsap = gsapMod.gsap;
      ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      // Set initial states
      gsap.set(imgRefs.current.filter(Boolean), {
        opacity: 0,
        y: 40,
        scale: 0.85,
      });
      gsap.set([titleRef.current, descRef.current, btnsRef.current, tagsRef.current], {
        opacity: 0,
        y: 30,
      });

      // Timeline
      const tl = gsap.timeline({ delay: 0.2 });

      tl.to(imgRefs.current.filter(Boolean), {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.4,
        stagger: 0.08,
        ease: 'elastic.out(1, 0.75)',
      })
        .to(titleRef.current, { opacity: 1, y: 0, duration: 1.1, ease: 'power4.out' }, '-=0.9')
        .to(descRef.current, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, '-=0.7')
        .to(btnsRef.current, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.7')
        .to(tagsRef.current, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.6');
    };

    initGSAP();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 sm:pt-36 pb-16 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background Hero Image */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-70">
        <AppImage
          src="/assets/images/hero-bg.jpg"
          alt="OchaCare Kenya service background"
          fill
          priority={true}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/75 to-background" />
      </div>

      {/* Background blobs */}
      <div
        className="absolute top-20 left-0 w-64 sm:w-96 h-64 sm:h-96 blob-teal opacity-50 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-56 sm:w-80 h-56 sm:h-80 blob-green opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Arching Image Gallery — desktop only */}
      <div
        className="absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-[1100px] h-[360px] pointer-events-none hidden sm:block"
        aria-hidden="true"
      >
        {archImages.map((img, i) => (
          <div
            key={i}
            ref={(el) => {
              imgRefs.current[i] = el;
            }}
            className="arch-img absolute pointer-events-auto"
            style={img.style}
          >
            <AppImage
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover rounded-[20px]"
              sizes="130px"
            />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="glass-hero max-w-3xl mx-auto px-6 py-10 sm:p-12 md:p-14 relative z-10 text-center mt-12 sm:mt-36 rounded-4xl shadow-2xl">
        <h1
          ref={titleRef}
          className="text-hero-xl font-extrabold text-foreground mb-4 sm:mb-6 opacity-100"
        >
          Trusted Care,{' '}
          <span className="text-primary">
            When You
            <br className="hidden sm:block" /> Can&apos;t Be There.
          </span>
        </h1>

        <p
          ref={descRef}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 opacity-100 px-2 sm:px-0"
        >
          OchaCare Kenya provides compassionate, non-medical care agents who escort your loved ones
          to appointments, navigate hospitals, pick up medications, and keep you informed — every
          step of the way.
        </p>

        <div
          ref={btnsRef}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center opacity-100 px-4 sm:px-0"
        >
          <a
            href="https://wa.me/254716200098"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn flex items-center justify-center gap-2.5 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wide min-h-[52px] w-full sm:w-auto"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={18} variant="solid" />
            Chat on WhatsApp
          </a>
          <a
            href="#services"
            className="flex items-center justify-center gap-2 border-2 border-primary/30 bg-card text-primary px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wide hover:bg-secondary transition-all min-h-[52px] w-full sm:w-auto"
          >
            <Icon name="HeartIcon" size={18} />
            Explore Services
          </a>
        </div>

        {/* Trust tags */}
        <div
          ref={tagsRef}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 sm:mt-10 opacity-100"
        >
          {['Confidential', 'Compassionate', 'Reliable', 'Based in Kenya'].map((tag) => (
            <span
              key={tag}
              className="text-xs font-semibold text-muted-foreground bg-card border border-border px-3 sm:px-4 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
          Scroll
        </span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-transparent rounded-full" />
      </div>
    </section>
  );
}
