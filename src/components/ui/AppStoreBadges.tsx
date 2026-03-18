import { motion } from 'framer-motion';

type AppStoreBadgesProps = {
  className?: string;
};

export default function AppStoreBadges({ className = '' }: AppStoreBadgesProps) {
  return (
    <div className={`flex flex-wrap items-center justify-center gap-4 ${className}`}>
      {/* Apple App Store */}
      <motion.a
        href="https://apps.apple.com/app/maxly"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-maxly-surface border border-maxly-surface-border hover:border-maxly-primary/30 transition-all no-underline"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div className="text-left">
          <div className="text-[10px] font-body text-maxly-text-secondary leading-tight">
            Download on the
          </div>
          <div className="text-sm font-body font-semibold text-white leading-tight">
            App Store
          </div>
        </div>
      </motion.a>

      {/* Google Play */}
      <motion.a
        href="https://play.google.com/store/apps/details?id=com.adamsolutions.maxly"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-maxly-surface border border-maxly-surface-border hover:border-maxly-primary/30 transition-all no-underline"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z" fill="#4285F4" />
          <path d="M17.556 8.236L5.148.467C4.626.165 4.064.028 3.609.028L13.792 12 17.556 8.236z" fill="#EA4335" />
          <path d="M3.609 23.972c.455 0 1.017-.137 1.539-.44l12.408-7.768L13.792 12 3.609 22.186V23.972z" fill="#34A853" />
          <path d="M21.393 12c0-.586-.313-1.17-.86-1.514L17.556 8.236 13.792 12l3.764 3.764 2.977-2.25c.547-.344.86-.928.86-1.514z" fill="#FBBC04" />
        </svg>
        <div className="text-left">
          <div className="text-[10px] font-body text-maxly-text-secondary leading-tight">
            GET IT ON
          </div>
          <div className="text-sm font-body font-semibold text-white leading-tight">
            Google Play
          </div>
        </div>
      </motion.a>
    </div>
  );
}
