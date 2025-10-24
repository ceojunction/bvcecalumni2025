import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#event-info', label: 'Event Info' },
    { href: '#register', label: 'Register' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#faq', label: 'FAQs' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={isScrolled ? '/Color Logo.png' : '/White Version.png'}
              alt="BVCE Logo"
              className="h-12 md:h-16 w-auto transition-all duration-300"
            />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-[#C94F4F] ${
                  isScrolled ? 'text-[#333333]' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://forms.gle/ZHJSfwVnBAdVAncY6"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#C94F4F] hover:bg-[#D9B47C] text-white hover:text-[#7A1E1E] font-semibold rounded-full transition-all duration-300"
            >
              Register
            </a>
          </div>

          <button
            className={`md:hidden ${isScrolled ? 'text-[#7A1E1E]' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-[#333333] hover:bg-[#FAF7F2] hover:text-[#C94F4F] transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://forms.gle/ZHJSfwVnBAdVAncY6"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-4 mt-2 px-6 py-2 bg-[#C94F4F] text-white text-center font-semibold rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
