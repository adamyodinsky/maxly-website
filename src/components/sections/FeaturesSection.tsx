import { ScanFace, MessageCircle, Map, Flame } from 'lucide-react';
import FeatureCard from '@/components/ui/FeatureCard';
import SectionReveal from '@/components/ui/SectionReveal';

const features = [
  {
    icon: ScanFace,
    title: 'Face Analysis',
    description:
      'Take a selfie. Get your score. See exactly where you stand with AI-powered facial analysis across 6 key metrics.',
    color: '#00E5FF',
  },
  {
    icon: MessageCircle,
    title: 'AI Coach',
    description:
      'Personal AI coach that gives you real advice based on your actual scan data. No sugarcoating. Just what works.',
    color: '#34D399',
  },
  {
    icon: Map,
    title: 'Improvement Roadmap',
    description:
      'Personalized step-by-step plan ranked by impact. Know exactly what to work on first to maximize your potential.',
    color: '#A78BFA',
  },
  {
    icon: Flame,
    title: 'Habit Tracking',
    description:
      'Daily habits, streaks, and progress tracking. Gamified to keep you locked in. Complete your habits, see the confetti.',
    color: '#FBBF24',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionReveal>
            <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-maxly-primary mb-4">
              What Maxly Does
            </span>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="font-body font-bold text-3xl sm:text-4xl text-maxly-text leading-tight">
              Your complete glow-up system
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <p className="mt-4 text-maxly-text-secondary font-body">
              Everything you need to understand your face, build better habits, and track your transformation.
            </p>
          </SectionReveal>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} {...feature} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
