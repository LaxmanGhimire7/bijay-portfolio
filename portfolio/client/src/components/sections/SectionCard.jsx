import React, { useState, useRef, useEffect } from 'react';
import CodeBlock from '../ui/CodeBlock';

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold]);

  return [ref, inView];
}

function FullStackDemo() {
  const layers = [
    ['Browser', 'User opens a portfolio route'],
    ['React View', 'Renders the page and calls the API'],
    ['Express Route', 'Receives the HTTP request'],
    ['Controller', 'Runs application logic'],
    ['Model', 'Reads or writes structured data'],
    ['MongoDB', 'Stores portfolio records'],
  ];

  return (
    <div className="demo-flow">
      {layers.map(([title, body], i) => (
        <React.Fragment key={title}>
          <div className="demo-node">
            <strong>{title}</strong>
            <span>{body}</span>
          </div>
          {i < layers.length - 1 && <div className="demo-arrow">to</div>}
        </React.Fragment>
      ))}
    </div>
  );
}

function HtmlDemo() {
  return (
    <div className="semantic-demo">
      <header>
        <strong>header</strong>
        <nav>nav: About | Work | Contact</nav>
      </header>
      <main>
        <section>
          <strong>main section</strong>
          <article>
            <h3>Accessible portfolio article</h3>
            <p>
              This area uses meaningful structure so browsers, search engines, and assistive
              technology can understand the page.
            </p>
          </article>
        </section>
      </main>
      <footer>footer: module and submission information</footer>
    </div>
  );
}

function CssDemo() {
  return (
    <div className="css-demo-grid">
      {[
        ['Layout', 'CSS Grid creates a responsive structure.'],
        ['Spacing', 'Design tokens keep distance consistent.'],
        ['Hierarchy', 'Colour, weight, and scale guide reading order.'],
      ].map(([title, body]) => (
        <article key={title} className="css-demo-card">
          <strong>{title}</strong>
          <p>{body}</p>
        </article>
      ))}
    </div>
  );
}

function BootstrapDemo() {
  return (
    <div className="bootstrap-demo">
      {[1, 2, 3].map((item) => (
        <article key={item} className="bootstrap-card">
          <span className="bootstrap-badge">col-lg-4</span>
          <h3>Responsive card {item}</h3>
          <p>Bootstrap combines grid classes, card structure, spacing utilities, and buttons.</p>
          <button type="button">Primary action</button>
        </article>
      ))}
    </div>
  );
}

function JavaScriptDemo() {
  const tasks = [
    { title: 'Create semantic HTML page', status: 'Done' },
    { title: 'Style responsive CSS cards', status: 'Done' },
    { title: 'Connect React route to data', status: 'In Progress' },
    { title: 'Prepare public portfolio link', status: 'Todo' },
  ];
  const [filter, setFilter] = useState('All');
  const visibleTasks = filter === 'All' ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div className="js-demo">
      <div className="js-demo-controls">
        {['All', 'Done', 'In Progress', 'Todo'].map((status) => (
          <button
            key={status}
            type="button"
            className={filter === status ? 'active' : ''}
            onClick={() => setFilter(status)}
          >
            {status}
          </button>
        ))}
      </div>
      <p>
        Showing <strong>{visibleTasks.length}</strong> of <strong>{tasks.length}</strong> tasks.
      </p>
      <ul>
        {visibleTasks.map((task) => (
          <li key={task.title}>
            <span>{task.title}</span>
            <strong>{task.status}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SectionDemo({ section }) {
  const demos = {
    fullstack: <FullStackDemo />,
    html: <HtmlDemo />,
    css: <CssDemo />,
    bootstrap: <BootstrapDemo />,
    javascript: <JavaScriptDemo />,
  };

  return (
    <article className="demo-panel">
      <div>
        <div className="section-label">
          <span>Evidence</span>
          Working demonstration
        </div>
        <p>{section.demonstration}</p>
      </div>
      {demos[section.id]}
    </article>
  );
}

export default function SectionCard({ section, index }) {
  const [ref, inView] = useInView();
  const [showCode, setShowCode] = useState(false);
  const { icon, title, overview, keyPoints = [], codeExamples = [] } = section;

  return (
    <section
      id={section.type || section.id}
      ref={ref}
      className="section"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(18px)',
        transition: `opacity 500ms ease ${index * 70}ms, transform 500ms ease ${index * 70}ms`,
      }}
    >
      <div className="container">
        <div style={{ marginBottom: '40px' }}>
          <div className="section-label">
            <span>{icon}</span>
            Section {String(index + 1).padStart(2, '0')}
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 5vw, 54px)',
              fontWeight: 800,
              lineHeight: 1.08,
              marginBottom: '18px',
            }}
          >
            {title}
          </h2>

          <div style={{ width: '72px', height: '3px', background: 'var(--accent)', borderRadius: '99px', marginBottom: '22px' }} />

          <p
            style={{
              fontSize: '17px',
              color: 'var(--text-secondary)',
              maxWidth: '820px',
              lineHeight: 1.75,
            }}
          >
            {overview}
          </p>
        </div>

        {keyPoints.length > 0 && (
          <div className="key-points-grid">
            {keyPoints.map((point, i) => (
              <article
                key={point.heading}
                className="glass-card"
                style={{
                  padding: '24px',
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 420ms ease ${120 + i * 60}ms, transform 420ms ease ${120 + i * 60}ms`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div className="page-card-icon" style={{ width: 32, height: 32 }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                    {point.heading}
                  </h3>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                  {point.body}
                </p>
              </article>
            ))}
          </div>
        )}

        <SectionDemo section={section} />

        {codeExamples.length > 0 && (
          <div style={{ marginTop: '38px' }}>
            <button
              onClick={() => setShowCode(!showCode)}
              className="btn-neon btn-secondary"
              style={{ marginBottom: '18px' }}
            >
              {showCode ? 'Hide code example' : 'Show code example'}
            </button>

            {showCode && codeExamples.map((example) => (
              <CodeBlock
                key={example.title}
                title={example.title}
                language={example.language}
                code={example.code}
                description={example.description}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
