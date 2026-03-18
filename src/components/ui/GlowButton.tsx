import { type ReactNode } from 'react';
import { motion } from 'framer-motion';

type GlowButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline';
  className?: string;
};

export default function GlowButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
}: GlowButtonProps) {
  const baseClasses =
    'relative inline-flex items-center justify-center px-7 py-3.5 rounded-full font-button font-semibold text-sm tracking-tight transition-all cursor-pointer';
  const variantClasses =
    variant === 'primary'
      ? 'bg-maxly-primary text-white hover:bg-maxly-primary-muted'
      : 'bg-transparent text-maxly-primary-muted border border-maxly-primary/40 hover:border-maxly-primary-muted hover:text-white';

  const content = (
    <motion.span
      className={`${baseClasses} ${variantClasses} ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Glow behind */}
      {variant === 'primary' && (
        <span
          className="absolute inset-0 rounded-full blur-xl opacity-30 -z-10 bg-maxly-primary"
          aria-hidden="true"
        />
      )}
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="no-underline" onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="bg-transparent border-none p-0">
      {content}
    </button>
  );
}
