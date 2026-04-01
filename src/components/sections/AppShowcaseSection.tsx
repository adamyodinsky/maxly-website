import { useRef, useState, useEffect, useCallback } from 'react';
import SectionReveal from '@/components/ui/SectionReveal';

const screenshots = [
  { src: '/images/screenshots/01.png', alt: 'Scan your face in seconds — face scanning screen with grid overlay and begin scan button' },
  { src: '/images/screenshots/04.png', alt: 'Explore detailed score insights — results dashboard showing overall score 82, potential 96, and category breakdowns' },
  { src: '/images/screenshots/02.png', alt: 'Understand your facial traits — feature breakdown with face shape, canthal tilt, eye shape, and rarity percentages' },
  { src: '/images/screenshots/03.png', alt: 'Get personalized improvement tips — daily insights with prioritized skincare, jawline, and posture tips' },
  { src: '/images/screenshots/07.png', alt: 'Build habits that stick — daily habits checklist with water, gym, skincare, and mewing tracking' },
  { src: '/images/screenshots/05.png', alt: 'Track visible progress over time — dashboard with weekly habit completion and scan progress chart' },
  { src: '/images/screenshots/06.png', alt: 'Chat with your AI coach — coach chat with personalized hair and style recommendations' },
];

export default function AppShowcaseSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track which slide is most visible
  useEffect(() => {
    const slides = slideRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!slides.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let bestIndex = activeIndex;
        let bestRatio = 0;
        entries.forEach((entry) => {
          const idx = slides.indexOf(entry.target as HTMLDivElement);
          if (idx !== -1 && entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            bestIndex = idx;
          }
        });
        if (bestRatio > 0) setActiveIndex(bestIndex);
      },
      {
        root: scrollRef.current,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = useCallback((i: number) => {
    const slide = slideRefs.current[i];
    if (slide) {
      slide.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, []);

  return (
    <section id="app-showcase" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12 sm:mb-16">
        <SectionReveal>
          <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-maxly-primary mb-4">
            See It In Action
          </span>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <h2 className="font-body font-bold text-3xl sm:text-4xl text-maxly-text leading-tight max-w-xl mx-auto">
            Everything you need to level up — in one app
          </h2>
        </SectionReveal>
      </div>

      {/* Carousel */}
      <SectionReveal delay={0.2}>
        <div className="relative">
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to right, #0D0D0F, transparent)' }}
            aria-hidden="true"
          />
          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-24 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to left, #0D0D0F, transparent)' }}
            aria-hidden="true"
          />

          {/* Scroll track */}
          <div
            ref={scrollRef}
            role="region"
            aria-label="App screenshots"
            tabIndex={0}
            className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mb-4 outline-none"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              paddingLeft: 'max(1.5rem, calc((100vw - 72rem) / 2 + 1.5rem))',
              paddingRight: 'max(1.5rem, calc((100vw - 72rem) / 2 + 1.5rem))',
            }}
          >
            {screenshots.map((shot, i) => (
              <div
                key={shot.src}
                ref={(el) => { slideRefs.current[i] = el; }}
                className="flex-shrink-0 snap-center w-[260px] sm:w-[300px] lg:w-[340px]"
              >
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading={i < 3 ? 'eager' : 'lazy'}
                  decoding="async"
                  width={1320}
                  height={2868}
                  className="w-full h-auto rounded-2xl shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Screenshot navigation">
            {screenshots.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={activeIndex === i}
                aria-label={`Go to screenshot ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? 'bg-maxly-primary w-6'
                    : 'bg-maxly-surface-border hover:bg-maxly-text-tertiary w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </SectionReveal>
    </section>
  );
}
