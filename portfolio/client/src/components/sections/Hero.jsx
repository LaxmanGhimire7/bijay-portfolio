import React from 'react';
import { Link } from 'react-router-dom';

const STAT_ITEMS = [
  { value: '5', label: 'Required sections' },
  { value: '30%', label: 'Module assessment' },
  { value: 'MERN', label: 'Built application' },
];

const PIPELINE_ITEMS = [
  'React UI',
  'Express API',
  'Controller',
  'Mongoose Model',
  'MongoDB',
];

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-copy">
          <div className="section-label">
            <span>Portfolio</span>
            CET138 Full Stack Development
          </div>

          <h1>
            A professional ePortfolio for full stack developer applications.
          </h1>

          <p className="hero-lead">
            This submission demonstrates understanding of full stack development, HTML, CSS,
            Bootstrap, and JavaScript through separate pages, working examples, explanations, and
            code samples from a MERN application.
          </p>

          <div className="hero-actions">
            <Link to="/fullstack" className="btn-neon">
              Review full stack page
            </Link>
            <Link to="/javascript" className="btn-neon btn-secondary">
              See JavaScript demo
            </Link>
          </div>

          <div className="hero-stats">
            {STAT_ITEMS.map(({ value, label }) => (
              <div key={label} className="hero-stat">
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="hero-visual" aria-label="MERN architecture preview">
          <div className="visual-header">
            <span>System preview</span>
            <strong>MERN MVC</strong>
          </div>
          <div className="architecture-map">
            {PIPELINE_ITEMS.map((item, index) => (
              <div key={item} className="architecture-step" style={{ animationDelay: `${index * 130}ms` }}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
          <div className="quality-panel">
            <div>
              <strong>Assessment evidence</strong>
              <span>Explanations, demos, and code examples across all required topics.</span>
            </div>
            <div>
              <strong>Implementation focus</strong>
              <span>Routes, reusable components, responsive layout, and dynamic UI state.</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
