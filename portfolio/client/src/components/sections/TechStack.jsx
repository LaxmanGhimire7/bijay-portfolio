import React, { useState, useRef, useEffect } from 'react';
import { TECH_STACK } from '../../utils/portfolioData';

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return [ref, inView];
}

const CATEGORY_COLORS = {
  Database: 'linear-gradient(135deg, #d99a2b, #f5a623)',
  Backend: 'linear-gradient(135deg, #4f8cff, #0fc0ff)',
  Frontend: 'linear-gradient(135deg, #3fbf8f, #43e97b)',
  Runtime: 'linear-gradient(135deg, #9a7cff, #667eea)',
  Markup: 'linear-gradient(135deg, #e56b6f, #f5576c)',
  Style: 'linear-gradient(135deg, #d96ba8, #f093fb)',
  Language: 'linear-gradient(135deg, #42b7c8, #a8edea)',
  Framework: 'linear-gradient(135deg, #e5894f, #ff7e5f)',
};

export default function TechStack() {
  const [ref, inView] = useInView();

  return (
    <section id="about" ref={ref} className="section">
      <div className="container">
        <div style={{ marginBottom: '40px' }}>
          <div className="section-label">
            <span>Profile</span>
            Technical Foundation
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 5vw, 54px)',
              fontWeight: 800,
              marginBottom: '16px',
              background: 'linear-gradient(135deg, #f8fafc 0%, #cbd5e1 50%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Stack, structure, and engineering judgement.
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '760px', fontSize: '17px', lineHeight: 1.75 }}>
            This portfolio demonstrates the technologies used across a MERN application and explains
            how those technologies are organised into maintainable MVC boundaries.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '16px',
          }}
        >
          {TECH_STACK.map(({ name, category, level }, i) => (
            <article
              key={name}
              className="glass-card"
              style={{
                padding: '24px',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 420ms ease ${i * 60}ms, transform 420ms ease ${i * 60}ms`,
                borderTop: `3px solid transparent`,
                backgroundImage: `linear-gradient(135deg, rgba(15, 23, 50, 0.9), rgba(20, 30, 60, 0.7)), linear-gradient(135deg, transparent, transparent)`,
                backgroundClip: 'padding-box, border-box',
                backgroundOrigin: 'border-box',
                border: '1px solid',
                borderColor: 'var(--border-glow)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px', gap: '16px' }}>
                <div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '6px' }}>
                    {name}
                  </h3>
                  <span
                    className="tag"
                    style={{ borderColor: `${CATEGORY_COLORS[category]}55`, color: CATEGORY_COLORS[category] }}
                  >
                    {category}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-code)',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}
                >
                  {level}
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>%</span>
                </div>
              </div>

              <div className="skill-bar">
                <div className="skill-bar-fill" style={{ width: inView ? `${level}%` : '0%' }} />
              </div>
            </article>
          ))}
        </div>

        <article
          className="glass-card"
          style={{
            marginTop: '34px',
            padding: '30px',
            background: 'var(--bg-card-soft)',
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 420ms ease 420ms, transform 420ms ease 420ms',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(240px, 1fr) minmax(260px, 420px)', gap: '26px', alignItems: 'start' }}>
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '22px',
                  fontWeight: 800,
                  marginBottom: '10px',
                }}
              >
                MVC architecture
              </h3>
              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                The project separates data models, HTTP routes, controller logic, and React views.
                This makes the application easier to test, reason about, and extend as requirements
                change.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
              {[
                { label: 'Model', sub: 'MongoDB' },
                { label: 'View', sub: 'React' },
                { label: 'Controller', sub: 'Express' },
              ].map(({ label, sub }) => (
                <div key={label} className="glass-card" style={{ padding: '14px', textAlign: 'center' }}>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text-primary)' }}>
                    {label}
                  </div>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px', fontFamily: 'var(--font-code)' }}>
                    {sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
