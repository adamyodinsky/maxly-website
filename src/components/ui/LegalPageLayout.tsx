import { type ReactNode, useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Section = {
  id: string;
  title: string;
};

type LegalPageLayoutProps = {
  title: string;
  lastUpdated: string;
  sections: Section[];
  children: ReactNode;
};

export default function LegalPageLayout({
  title,
  lastUpdated,
  sections,
  children,
}: LegalPageLayoutProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <h1 className="font-body font-bold text-3xl sm:text-4xl text-maxly-text mb-2">
          {title}
        </h1>
        <p className="text-sm text-maxly-text-tertiary mb-12">Last updated: {lastUpdated}</p>

        {/* Content with sidebar TOC on desktop */}
        <div className="flex gap-12">
          {/* Sidebar TOC (desktop only) */}
          <aside className="hidden lg:block w-56 shrink-0">
            <nav className="legal-toc">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0 prose-maxly space-y-8">
            {children}
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-maxly-surface border border-maxly-surface-border flex items-center justify-center text-maxly-text-secondary hover:text-maxly-text hover:border-maxly-primary/30 transition-all cursor-pointer"
            aria-label="Back to top"
          >
            <ChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
