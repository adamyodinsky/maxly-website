import AccordionItem from '@/components/ui/AccordionItem';
import SectionReveal from '@/components/ui/SectionReveal';

const faqs = [
  {
    question: 'What can I do with Maxly?',
    answer:
      'Maxly gives you an AI-powered facial analysis scan, personalized improvement roadmap, daily habit tracking, and an AI coach that knows your face. Everything is designed to help you look and feel your best.',
  },
  {
    question: 'How accurate is the facial analysis?',
    answer:
      'Maxly uses advanced AI models trained on facial landmarks and proportions. Your scores are based on established facial harmony principles. While no analysis is perfect, our AI provides consistent, data-driven insights that improve over time.',
  },
  {
    question: 'Is my data private?',
    answer:
      'Absolutely. Your face, your data. Photos are processed securely and are never shared with third parties. You can delete your data at any time. We take privacy seriously — read our full Privacy Policy for details.',
  },
  {
    question: 'What platforms is Maxly available on?',
    answer:
      'Maxly is available on both iOS (App Store) and Android (Google Play). Download it on either platform.',
  },
  {
    question: 'How does the AI coach work?',
    answer:
      "The AI coach has access to your scan results, facial traits, and habit history. It gives you personalized, actionable advice — not generic tips. Ask it anything about your improvement journey and it'll give you a straight answer.",
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes, you can cancel anytime through your App Store or Google Play subscription settings. No questions asked, no hidden fees.',
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <SectionReveal>
            <span className="inline-block text-xs font-body font-semibold uppercase tracking-widest text-maxly-primary mb-4">
              FAQ
            </span>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <h2 className="font-body font-bold text-3xl sm:text-4xl text-maxly-text">
              Got questions?
            </h2>
          </SectionReveal>
        </div>

        {/* Accordion */}
        <SectionReveal delay={0.2}>
          <div className="rounded-2xl bg-maxly-surface/30 border border-maxly-surface-border p-6 sm:p-8">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} {...faq} />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
