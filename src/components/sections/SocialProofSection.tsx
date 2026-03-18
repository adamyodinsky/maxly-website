import StatCounter from '@/components/ui/StatCounter';
import SectionReveal from '@/components/ui/SectionReveal';

const testimonials = [
  {
    name: 'Alex, 19',
    initial: 'A',
    color: '#2D7DD2',
    text: "Been using Maxly for 3 months. My skin score went from 64 to 81. The daily habits actually work if you stick with them.",
    stars: 5,
  },
  {
    name: 'Jordan, 21',
    initial: 'J',
    color: '#34D399',
    text: "The AI coach is insane. It's like having a personal consultant who actually knows your face. Way better than generic tips online.",
    stars: 5,
  },
  {
    name: 'Chris, 17',
    initial: 'C',
    color: '#A78BFA',
    text: "The streak system keeps me going. Haven't missed a day in 6 weeks. Already seeing results in my jawline exercises.",
    stars: 4,
  },
];

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill={filled ? '#FBBF24' : '#2A2A32'} className="w-4 h-4">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function SocialProofSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Stats */}
        <SectionReveal>
          <div className="grid grid-cols-3 gap-8 mb-20">
            <StatCounter target={1} suffix="M+" label="Scans completed" decimals={0} />
            <StatCounter target={4.8} suffix="" label="Average rating" decimals={1} />
            <StatCounter target={89} suffix="%" label="Users report improvement" />
          </div>
        </SectionReveal>

        {/* Testimonials */}
        <div className="grid sm:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <SectionReveal key={t.name} delay={i * 0.1}>
              <div className="p-6 rounded-2xl bg-maxly-surface/60 backdrop-blur-sm border border-maxly-surface-border hover:border-maxly-primary/20 transition-colors duration-300">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <StarIcon key={j} filled={j < t.stars} />
                  ))}
                </div>
                <p className="font-body text-sm text-maxly-text-secondary leading-relaxed mb-5">
                  &ldquo;{t.text}&rdquo;
                </p>
                {/* User info with avatar */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-body font-bold text-white"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initial}
                  </div>
                  <span className="font-body font-semibold text-sm text-maxly-text">
                    {t.name}
                  </span>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
