import { motion } from 'framer-motion';
import GlowOrb from '@/components/ui/GlowOrb';
import GlowButton from '@/components/ui/GlowButton';
import PhoneMockup from '@/components/ui/PhoneMockup';
import GradientMesh from '@/components/ui/GradientMesh';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <GradientMesh />

      {/* Glow orbs — stronger intensity */}
      <GlowOrb color="electric" size={500} className="top-[-10%] left-[-10%]" intensity="strong" />
      <GlowOrb color="cyan" size={400} className="bottom-[10%] right-[-5%]" animation="reverse" intensity="medium" />
      <GlowOrb color="sky" size={300} className="top-[40%] left-[30%]" animation="slow" intensity="subtle" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-maxly-primary/30 bg-maxly-primary/10 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-maxly-primary animate-glow-pulse" />
              <span className="text-xs font-body font-semibold text-maxly-primary-muted uppercase tracking-wider">
                AI-Powered Glow-Up Companion
              </span>
            </motion.div>

            {/* Heading — fixed line breaks */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl text-maxly-text leading-tight tracking-tight"
            >
              KNOW YOUR FACE.
              <br />
              <span className="bg-gradient-to-r from-maxly-primary via-glow-cyan to-glow-sky bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient-shift_4s_ease-in-out_infinite]">
                OWN YOUR GLOW.
              </span>
            </motion.h1>

            {/* Subtitle — more compelling */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg font-body text-maxly-text-secondary max-w-xl mx-auto lg:mx-0"
            >
              Scan your face. Get your score. Follow a personalized roadmap to look and feel your best — powered by AI.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <GlowButton href="#download">Get Maxly</GlowButton>
              <GlowButton href="#features" variant="outline">
                See Features
              </GlowButton>
            </motion.div>

            {/* Social proof — with avatar initials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-3 justify-center lg:justify-start"
            >
              {/* Avatar stack */}
              <div className="flex -space-x-2">
                {['A', 'J', 'M', 'S'].map((initial, i) => (
                  <div
                    key={initial}
                    className="w-7 h-7 rounded-full border-2 border-maxly-bg flex items-center justify-center text-[10px] font-body font-bold text-white"
                    style={{
                      backgroundColor: ['#2D7DD2', '#34D399', '#A78BFA', '#FBBF24'][i],
                      zIndex: 4 - i,
                    }}
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex -space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      viewBox="0 0 20 20"
                      fill="#FBBF24"
                      className="w-3.5 h-3.5"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-body text-maxly-text-secondary">
                  Loved by <span className="text-maxly-text font-semibold">thousands</span> of users
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
