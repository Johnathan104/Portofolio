// components/DotNav.tsx
'use client';

import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'background', label: 'Background' },
  { id: 'services', label: 'Services' },
];

export default function DotNav() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' } // triggers when section crosses viewport center
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          aria-label={label}
          onClick={() =>
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
          className={`group relative w-2 h-2 rounded-full transition-all duration-300 ${
            active === id ? 'bg-secondary scale-120' : 'bg-secondary/30 hover:bg-secondary/60'
          }`}
        >
          <span className="absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap text-xs text-secondary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            {label}
          </span>
        </button>
      ))}
    </nav>
  );
}