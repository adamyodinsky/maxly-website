import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Shield, CreditCard, Bug, HelpCircle } from 'lucide-react';
import SectionReveal from '@/components/ui/SectionReveal';

const topics = [
  {
    icon: HelpCircle,
    title: 'Account Issues',
    description: 'Login problems, account recovery, profile settings',
    color: '#4A9EFF',
  },
  {
    icon: CreditCard,
    title: 'Subscription & Billing',
    description: 'Manage your subscription, refunds, payment issues',
    color: '#FBBF24',
  },
  {
    icon: Shield,
    title: 'Privacy & Data',
    description: 'Data requests, account deletion, privacy concerns',
    color: '#34D399',
  },
  {
    icon: Bug,
    title: 'Bug Reports',
    description: 'Report issues, crashes, or unexpected behavior',
    color: '#F87171',
  },
];

export default function SupportPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header — NO SectionReveal so it's always visible immediately */}
        <h1 className="font-body font-bold text-3xl sm:text-4xl text-maxly-text mb-4">
          Get Support
        </h1>
        <p className="text-lg font-body text-maxly-text-secondary mb-12">
          We&apos;re here to help. Reach out and we&apos;ll get back to you within 24 hours.
        </p>

        {/* Contact card */}
        <SectionReveal delay={0.05}>
          <a
            href="mailto:support@maxlyapp.com"
            className="flex items-center gap-4 p-6 rounded-2xl bg-maxly-surface border border-maxly-surface-border hover:border-maxly-primary/30 transition-all no-underline group mb-8"
          >
            <div className="w-12 h-12 rounded-xl bg-maxly-primary/15 flex items-center justify-center">
              <Mail size={22} className="text-maxly-primary" />
            </div>
            <div>
              <p className="font-body font-semibold text-maxly-text group-hover:text-maxly-primary-muted transition-colors">
                support@maxlyapp.com
              </p>
              <p className="text-sm font-body text-maxly-text-tertiary">
                Email us directly — we typically respond within 24 hours
              </p>
            </div>
          </a>
        </SectionReveal>

        {/* FAQ shortcut */}
        <SectionReveal delay={0.1}>
          <div className="flex items-center gap-4 p-6 rounded-2xl bg-maxly-surface/50 border border-maxly-surface-border mb-12">
            <div className="w-12 h-12 rounded-xl bg-maxly-primary-muted/15 flex items-center justify-center">
              <MessageCircle size={22} className="text-maxly-primary-muted" />
            </div>
            <div>
              <p className="font-body font-semibold text-maxly-text">Check our FAQ first</p>
              <p className="text-sm font-body text-maxly-text-tertiary">
                Many common questions are already answered.{' '}
                <Link to="/#faq" className="text-maxly-primary hover:text-maxly-primary-muted transition-colors">
                  View FAQ
                </Link>
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Common topics */}
        <h2 className="font-body font-bold text-xl text-maxly-text mb-6">Common Topics</h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {topics.map((topic, i) => (
            <SectionReveal key={topic.title} delay={0.1 + i * 0.05}>
              <div className="p-5 rounded-xl bg-maxly-surface border border-maxly-surface-border hover:border-maxly-primary/20 transition-colors duration-300">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${topic.color}15` }}
                >
                  <topic.icon size={18} style={{ color: topic.color }} />
                </div>
                <h3 className="font-body font-semibold text-sm text-maxly-text mb-1">{topic.title}</h3>
                <p className="font-body text-xs text-maxly-text-tertiary">{topic.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
