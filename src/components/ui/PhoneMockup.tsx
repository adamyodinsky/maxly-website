import { motion } from 'framer-motion';

const bars = [
  { label: 'Jawline', value: 82, color: '#2D7DD2' },
  { label: 'Skin', value: 91, color: '#34D399' },
  { label: 'Symmetry', value: 76, color: '#4A9EFF' },
  { label: 'Potential', value: 94, color: '#FBBF24' },
];

export default function PhoneMockup() {
  return (
    <div className="relative animate-phone-float">
      {/* Glow behind phone — stronger */}
      <div
        className="absolute inset-0 blur-[80px] opacity-30 -z-10 scale-125"
        style={{
          background:
            'radial-gradient(circle, rgba(0, 180, 216, 0.6) 0%, rgba(0, 28, 255, 0.4) 50%, transparent 80%)',
        }}
        aria-hidden="true"
      />

      {/* Phone frame — modern design */}
      <div className="relative w-[260px] h-[520px] sm:w-[280px] sm:h-[560px] rounded-[44px] border-2 border-maxly-surface-border bg-maxly-surface overflow-hidden shadow-2xl">
        {/* Dynamic Island notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[24px] bg-maxly-bg rounded-full z-10" />

        {/* Screen content */}
        <div className="absolute inset-[2px] rounded-[42px] overflow-hidden bg-maxly-bg">
          {/* Status bar area */}
          <div className="h-14" />

          {/* Score circle with animated ring */}
          <div className="flex flex-col items-center mt-4">
            <div className="relative w-32 h-32">
              {/* Track */}
              <svg viewBox="0 0 128 128" className="w-full h-full -rotate-90 animate-score-pulse">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  fill="none"
                  stroke="#1C1C22"
                  strokeWidth="6"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="56"
                  fill="none"
                  stroke="url(#scoreGradient)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeDasharray="352"
                  initial={{ strokeDashoffset: 352 }}
                  animate={{ strokeDashoffset: 88 }}
                  transition={{ duration: 1.5, delay: 0.8, ease: [0.33, 1, 0.68, 1] }}
                />
                <defs>
                  <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2D7DD2" />
                    <stop offset="100%" stopColor="#00b4d8" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                  className="text-3xl font-heading text-white"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  87
                </motion.span>
                <span className="text-[9px] font-body text-maxly-text-tertiary mt-0.5">OVERALL</span>
              </div>
            </div>
            <span className="mt-2 text-xs font-body text-maxly-text-secondary">Overall Score</span>
          </div>

          {/* Score bars — animated fill */}
          <div className="px-6 mt-6 space-y-3">
            {bars.map((bar, i) => (
              <div key={bar.label}>
                <div className="flex justify-between text-[10px] font-body mb-1">
                  <span className="text-maxly-text-secondary">{bar.label}</span>
                  <motion.span
                    className="text-maxly-text font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 + i * 0.15 }}
                  >
                    {bar.value}
                  </motion.span>
                </div>
                <div className="h-1.5 bg-maxly-surface-light rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: bar.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${bar.value}%` }}
                    transition={{
                      duration: 1,
                      delay: 1.2 + i * 0.15,
                      ease: [0.33, 1, 0.68, 1],
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom nav indicator — modern home bar */}
          <div className="absolute bottom-5 left-0 right-0 flex justify-center">
            <div className="w-28 h-1 rounded-full bg-maxly-surface-border" />
          </div>
        </div>
      </div>
    </div>
  );
}
