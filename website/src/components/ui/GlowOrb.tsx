type GlowOrbProps = {
  color?: 'electric' | 'cyan' | 'sky';
  size?: number;
  className?: string;
  animation?: 'default' | 'reverse' | 'slow';
  intensity?: 'subtle' | 'medium' | 'strong';
};

const colorMap = {
  electric: 'bg-glow-electric',
  cyan: 'bg-glow-cyan',
  sky: 'bg-glow-sky',
} as const;

const animationMap = {
  default: 'animate-orb-float',
  reverse: 'animate-orb-float-reverse',
  slow: 'animate-orb-float-slow',
} as const;

const intensityMap = {
  subtle: 'opacity-20',
  medium: 'opacity-30',
  strong: 'opacity-40',
} as const;

export default function GlowOrb({
  color = 'cyan',
  size = 400,
  className = '',
  animation = 'default',
  intensity = 'medium',
}: GlowOrbProps) {
  return (
    <div
      className={`absolute rounded-full pointer-events-none blur-[100px] will-change-transform ${intensityMap[intensity]} ${colorMap[color]} ${animationMap[animation]} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
}
