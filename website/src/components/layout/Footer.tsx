import { Link, useLocation, useNavigate } from 'react-router-dom';

const productLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Support', href: '/support' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'EULA', href: '/eula' },
];

function FooterHashLink({ href, label }: { href: string; label: string }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const id = href.slice(2);
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-sm text-maxly-text-secondary hover:text-maxly-text transition-colors"
    >
      {label}
    </a>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  if (href.startsWith('/#')) {
    return <FooterHashLink href={href} label={label} />;
  }
  return (
    <Link
      to={href}
      className="text-sm text-maxly-text-secondary hover:text-maxly-text transition-colors"
    >
      {label}
    </Link>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-maxly-border bg-maxly-bg">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <img src="/images/logo.svg" alt="Maxly" className="w-6 h-6" />
              <span className="font-brand text-lg text-maxly-text">Maxly</span>
            </div>
            <p className="text-sm text-maxly-text-secondary leading-relaxed max-w-xs">
              AI-powered facial analysis and personalized glow-up companion. Know your face. Own your glow.
            </p>
            <a
              href="mailto:support@maxlyapp.com"
              className="inline-block text-sm text-maxly-primary hover:text-maxly-primary-muted transition-colors"
            >
              support@maxlyapp.com
            </a>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h4 className="text-xs font-body font-semibold uppercase tracking-widest text-maxly-text-secondary">
              Product
            </h4>
            <div className="flex flex-col gap-2.5">
              {productLinks.map((l) => (
                <FooterLink key={l.label} {...l} />
              ))}
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-xs font-body font-semibold uppercase tracking-widest text-maxly-text-secondary">
              Legal
            </h4>
            <div className="flex flex-col gap-2.5">
              {legalLinks.map((l) => (
                <FooterLink key={l.label} {...l} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-maxly-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-maxly-text-tertiary">
            &copy; {new Date().getFullYear()} Adam Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
