import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const codeTheme = {
  'code[class*="language-"]': {
    color: '#d7e2f0',
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: '13px',
    lineHeight: '1.65',
  },
  'pre[class*="language-"]': {
    background: '#090d14',
    padding: '20px',
    borderRadius: 0,
    overflow: 'auto',
    margin: 0,
  },
  comment: { color: '#748095' },
  punctuation: { color: '#a8b3c3' },
  property: { color: '#8ab4ff' },
  tag: { color: '#8ab4ff' },
  keyword: { color: '#6bd3ff' },
  'attr-name': { color: '#d8b4fe' },
  'attr-value': { color: '#f7c873' },
  string: { color: '#f7c873' },
  operator: { color: '#a8b3c3' },
  function: { color: '#9be6c3' },
  number: { color: '#f29f8f' },
  boolean: { color: '#f29f8f' },
  'class-name': { color: '#d8b4fe' },
  selector: { color: '#9be6c3' },
};

export default function CodeBlock({ title, language = 'javascript', code, description }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    });
  };

  return (
    <div className="code-block" style={{ marginTop: '18px' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          padding: '12px 16px',
          background: 'var(--bg-card-soft)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ minWidth: 0 }}>
          <div style={{ fontSize: '13px', fontWeight: 800, color: 'var(--text-primary)' }}>
            {title}
          </div>
          <div style={{ fontFamily: 'var(--font-code)', fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
            {language}
          </div>
        </div>
        <button onClick={handleCopy} className="btn-neon btn-secondary" style={{ minHeight: 34, padding: '6px 12px' }}>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <SyntaxHighlighter
        language={language}
        style={codeTheme}
        showLineNumbers
        lineNumberStyle={{ color: '#536073', fontSize: '11px', minWidth: '2.5em' }}
        customStyle={{ margin: 0, borderRadius: 0, background: '#090d14' }}
      >
        {code}
      </SyntaxHighlighter>

      {description && (
        <div
          style={{
            padding: '12px 16px',
            borderTop: '1px solid var(--border)',
            fontSize: '13px',
            color: 'var(--text-secondary)',
            background: 'var(--bg-card-soft)',
          }}
        >
          {description}
        </div>
      )}
    </div>
  );
}
