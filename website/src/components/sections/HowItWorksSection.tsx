import { Camera, BarChart3, TrendingUp, ArrowRight } from 'lucide-react';
import SectionReveal from '@/components/ui/SectionReveal';

const steps = [
  {
    number: '01',
    icon: Camera,
    title: 'Scan Your Face',
    description: 'Take a front and side selfie. Our AI analyzes your facial features across 6 key dimensions.',
    color: '#2D7DD2',
  },
  {
    number: '02',
    icon: BarChart3,
    title: 'Get Your Blueprint',
    description: 'Receive scores, traits, percentiles, and a ranked improvement roadmap personalized to you.',
    color: '#00b4d8',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Level Up Daily',
    description: 'Build daily habits, track your streaks, chat with your AI coach, and re-scan to see progress.',
    color: '#34D399',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionReveal>
            <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-maxly-primary mb-4">
              How It Works
            </span>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="font-body font-bold text-3xl sm:text-4xl text-maxly-text leading-tight">
              Three steps to your best self
            </h2>
          </SectionReveal>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-8 md:gap-6">
          {/* Connecting arrows (desktop) */}
          <div className="hidden md:flex absolute top-[52px] left-[28%] right-[28%] items-center justify-between z-0">
            <div className="flex-1 flex items-center">
              <div className="flex-1 h-px bg-gradient-to-r from-[#2D7DD2]/40 to-[#00b4d8]/40" />
              <ArrowRight size={16} className="text-glow-cyan/50 -mx-1" />
            </div>
            <div className="w-[34%]" />
            <div className="flex-1 flex items-center">
              <div className="flex-1 h-px bg-gradient-to-r from-[#00b4d8]/40 to-[#34D399]/40" />
              <ArrowRight size={16} className="text-maxly-success/50 -mx-1" />
            </div>
          </div>

          {steps.map((step, i) => (
            <SectionReveal key={step.number} delay={i * 0.15}>
              <div className="relative flex flex-col items-center text-center">
                {/* Number badge with color accent */}
                <div className="relative z-10 w-[104px] h-[104px] rounded-2xl bg-maxly-surface border border-maxly-surface-border flex flex-col items-center justify-center mb-6">
                  <span
                    className="text-xs font-body font-bold tracking-wider"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </span>
                  <step.icon size={28} className="text-maxly-text mt-1" />
                  {/* Glow behind */}
                  <div
                    className="absolute inset-0 rounded-2xl blur-xl opacity-15 -z-10"
                    style={{ backgroundColor: step.color }}
                  />
                </div>

                <h3 className="font-body font-bold text-lg text-maxly-text mb-2">{step.title}</h3>
                <p className="font-body text-sm text-maxly-text-secondary leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
