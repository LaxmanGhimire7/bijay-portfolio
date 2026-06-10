import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'About', to: '/about' },
  { label: 'Full Stack', to: '/fullstack' },
  { label: 'HTML', to: '/html' },
  { label: 'CSS', to: '/css' },
  { label: 'Bootstrap', to: '/bootstrap' },
  { label: 'JavaScript', to: '/javascript' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className="navbar"
      style={{ boxShadow: scrolled ? '0 12px 28px rgba(0,0,0,0.22)' : 'none' }}
    >
      <div className="nav-container">
        <Link className="nav-logo" to="/">
          MERN Portfolio
        </Link>

        <ul className="nav-links">
          {NAV_ITEMS.map(({ label, to }) => (
            <li key={to}>
              <NavLink to={to} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          className="btn-neon btn-secondary"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '13px', padding: '8px 14px', minHeight: 36 }}
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}
