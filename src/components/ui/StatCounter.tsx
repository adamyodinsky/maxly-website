import { useCountUp } from '@/hooks/useCountUp';

type StatCounterProps = {
  target: number;
  suffix?: string;
  label: string;
  decimals?: number;
};

export default function StatCounter({ target, suffix = '', label, decimals = 0 }: StatCounterProps) {
  const { count, ref } = useCountUp(target, 2000, decimals);

  return (
    <div ref={ref} className="text-center">
      <div className="font-body font-bold text-4xl sm:text-5xl text-maxly-text tracking-tight">
        {count}
        <span className="text-maxly-primary">{suffix}</span>
      </div>
      <p className="mt-2 font-body text-sm text-maxly-text-secondary">{label}</p>
    </div>
  );
}
