import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '18px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ textAlign: 'left' }}>
          <strong style={{ display: 'block', color: 'var(--text-primary)', fontSize: '15px' }}>
            MERN MVC Portfolio
          </strong>
          <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
            CET138 Full Stack Development
          </span>
        </div>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {['MongoDB', 'Express', 'React', 'Node.js', 'MVC'].map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
