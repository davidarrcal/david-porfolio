import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window === 'undefined') return 'dark';
    return (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.replace(theme, next);
  };

  const handleClick = () => setIsOpen(false);

  const navBg = scrolled
    ? theme === 'dark'
      ? 'bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5'
      : 'bg-white/80 backdrop-blur-xl border-b border-black/5'
    : 'bg-transparent';

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const mutedColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navBg}`}>
      <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
        <a href="#inicio" className={`flex items-center gap-3 font-bold tracking-tight ${textColor}`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-violet-400/30 bg-violet-500/10 text-violet-200 text-sm font-bold shadow-[0_0_12px_rgba(139,92,246,0.2)] transition-transform duration-200 hover:rotate-6">
            D
          </span>
          <span className="hidden sm:inline">David</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? theme === 'dark'
                      ? 'text-white bg-white/10 shadow-[0_0_10px_rgba(139,92,246,0.15)]'
                      : 'text-gray-900 bg-gray-900/10 shadow-[0_0_10px_rgba(139,92,246,0.15)]'
                    : `${mutedColor} hover:${textColor} hover:bg-${theme === 'dark' ? 'white' : 'black'}/5`
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              type="button"
              onClick={toggleTheme}
              className={`ml-2 p-2 rounded-lg ${mutedColor} hover:${textColor} transition-colors duration-200`}
              aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </li>
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className={`p-2 rounded-lg ${mutedColor} hover:${textColor} transition-colors duration-200`}
            aria-label={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
          >
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            className="flex flex-col justify-center gap-1.5 w-8 h-8"
            onClick={() => setIsOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-6 transition-transform duration-300 origin-center ${
                theme === 'dark' ? 'bg-white' : 'bg-gray-900'
              } ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 transition-opacity duration-300 ${
                theme === 'dark' ? 'bg-white' : 'bg-gray-900'
              } ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block h-0.5 w-6 transition-transform duration-300 origin-center ${
                theme === 'dark' ? 'bg-white' : 'bg-gray-900'
              } ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 backdrop-blur-xl ${
          isOpen ? 'max-h-64 border-t border-white/5' : 'max-h-0'
        } ${theme === 'dark' ? 'bg-[#0a0a0f]/95' : 'bg-white/95'}`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleClick}
                className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeSection === link.href.slice(1)
                    ? theme === 'dark'
                      ? 'text-white bg-white/10'
                      : 'text-gray-900 bg-gray-900/10'
                    : theme === 'dark'
                      ? 'text-gray-400 hover:text-white hover:bg-white/5'
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-900/5'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}