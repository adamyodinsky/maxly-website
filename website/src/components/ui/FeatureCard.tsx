import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import SectionReveal from './SectionReveal';

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  delay?: number;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  color,
  delay = 0,
}: FeatureCardProps) {
  return (
    <SectionReveal delay={delay}>
      <motion.div
        className="group relative p-6 rounded-2xl bg-maxly-surface border border-maxly-surface-border transition-all duration-300 overflow-hidden"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
      >
        {/* Gradient overlay on hover */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${color}15, transparent 60%)`,
          }}
          aria-hidden="true"
        />

        {/* Icon container with glow */}
        <div className="relative">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: `${color}15` }}
          >
            <Icon size={22} style={{ color }} />
          </div>
          {/* Icon glow on hover */}
          <div
            className="absolute top-0 left-0 w-12 h-12 rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
            style={{ backgroundColor: color }}
            aria-hidden="true"
          />
        </div>

        {/* Content */}
        <h3 className="relative font-body font-bold text-lg text-maxly-text mb-2">{title}</h3>
        <p className="relative font-body text-sm text-maxly-text-secondary leading-relaxed">
          {description}
        </p>
      </motion.div>
    </SectionReveal>
  );
}
