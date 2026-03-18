import GlowOrb from '@/components/ui/GlowOrb';
import AppStoreBadges from '@/components/ui/AppStoreBadges';
import SectionReveal from '@/components/ui/SectionReveal';

export default function CTASection() {
  return (
    <section id="download" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Intensified glow — stronger for final CTA impact */}
      <GlowOrb color="electric" size={600} className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" intensity="strong" />
      <GlowOrb color="cyan" size={400} className="top-[20%] right-[-10%]" animation="reverse" intensity="medium" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <SectionReveal>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-maxly-text leading-tight">
            SEE WHAT YOUR FACE
            <br />
            <span className="bg-gradient-to-r from-maxly-primary via-glow-cyan to-glow-sky bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-shift_4s_ease-in-out_infinite]">
              IS REALLY CAPABLE OF.
            </span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <p className="mt-6 text-lg font-body text-maxly-text-secondary max-w-lg mx-auto">
            Join thousands already on their glow-up journey. Start scanning and unlock your full potential.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <AppStoreBadges className="mt-10" />
          <p className="mt-4 text-xs font-body text-maxly-text-tertiary">
            Available on iOS and Android.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
