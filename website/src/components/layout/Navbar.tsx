import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Support', href: '/support' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleHashNavClick = (href: string) => {
    const id = href.replace('/#', '').replace('#', '');

    if (location.pathname === '/') {
      // Already on home — smooth scroll
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home, then scroll after a tick
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setMobileOpen(false);
  };

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-maxly-bg/90 backdrop-blur-xl border-b border-maxly-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 no-underline">
            <img src="/images/logo.svg" alt="Maxly" className="w-7 h-7" />
            <span className="font-brand text-xl text-maxly-text tracking-tight">
              Maxly
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith('/#') ? (
                <button
                  key={link.label}
                  onClick={() => handleHashNavClick(link.href)}
                  className="text-sm font-body text-maxly-text-secondary hover:text-maxly-text transition-colors bg-transparent border-none cursor-pointer p-0"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-body text-maxly-text-secondary hover:text-maxly-text transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
            <button
              onClick={() => handleHashNavClick('#download')}
              className="px-5 py-2 rounded-full bg-maxly-primary text-white text-sm font-button font-semibold tracking-tight hover:bg-maxly-primary-muted transition-colors cursor-pointer border-none"
            >
              Download
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-maxly-text p-2 bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-maxly-surface/95 backdrop-blur-xl border-b border-maxly-border overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) =>
                  link.href.startsWith('/#') ? (
                    <button
                      key={link.label}
                      onClick={() => handleHashNavClick(link.href)}
                      className="text-base font-body text-maxly-text-secondary hover:text-maxly-text transition-colors bg-transparent border-none cursor-pointer p-0 text-left"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="text-base font-body text-maxly-text-secondary hover:text-maxly-text transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <button
                  onClick={() => handleHashNavClick('#download')}
                  className="px-5 py-2.5 rounded-full bg-maxly-primary text-white text-sm font-button font-semibold text-center tracking-tight cursor-pointer border-none"
                >
                  Download
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
