import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import './styles/global.css';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import TechStack from './components/sections/TechStack';
import SectionCard from './components/sections/SectionCard';
import Footer from './components/layout/Footer';
import { SECTIONS_DATA } from './utils/portfolioData';

const ASSESSMENT_POINTS = [
  {
    title: 'Understand technologies',
    body: 'Explains how the browser, styling layer, JavaScript behaviour, framework choices, server, and database work together.',
  },
  {
    title: 'Design static pages',
    body: 'Demonstrates semantic HTML, responsive CSS, clear page structure, and accessible navigation across separate routes.',
  },
  {
    title: 'Build dynamic behaviour',
    body: 'Includes a React-based JavaScript example that changes rendered content through state and user interaction.',
  },
];

const DELIVERY_STEPS = [
  'Separate pages for each grading topic',
  'Working examples embedded in every section',
  'Code samples with direct explanations',
  'Responsive layout for desktop and mobile',
];

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function PageShell({ children }) {
  return (
    <>
      <div className="grid-bg" />

      <Navbar />

      <main className="main-content">
        {children}
      </main>

      <Footer />
    </>
  );
}

function HomePage() {
  return (
    <>
      <Hero />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="glow-line" />
          <div className="home-section-heading">
            <div>
              <div className="section-label">
                <span>01</span>
                Assignment coverage
              </div>
              <h2>Built around the grading criteria.</h2>
            </div>
            <p>
              The grading grid assesses five topics. Each topic has its own page with an
              explanation, a working demonstration, and a code example where appropriate.
            </p>
          </div>

          <div className="assessment-grid">
            {ASSESSMENT_POINTS.map((point) => (
              <article key={point.title} className="glass-card assessment-card">
                <strong>{point.title}</strong>
                <p>{point.body}</p>
              </article>
            ))}
          </div>

          <div className="delivery-panel">
            <div>
              <div className="section-label">
                <span>02</span>
                Implementation approach
              </div>
              <h2>Structured like a real application, not a single scrolling page.</h2>
              <p>
                The portfolio uses React Router for page-level navigation, reusable section
                components for consistency, and a MERN/MVC structure on the backend to demonstrate
                full stack organisation.
              </p>
            </div>
            <ol>
              {DELIVERY_STEPS.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="home-section-heading">
            <div>
              <div className="section-label">
                <span>03</span>
                Portfolio pages
              </div>
              <h2>Explore the required sections.</h2>
            </div>
            <p>
              Use these cards or the navigation bar to review each topic as a separate page.
            </p>
          </div>

          <div className="page-card-grid">
            <Link className="glass-card page-card-link" to="/about">
              <span className="page-card-icon">A</span>
              <strong>About this ePortfolio</strong>
              <small>Technology stack, structure, and MVC organisation</small>
            </Link>
            {SECTIONS_DATA.map((section) => (
              <Link key={section.id} className="glass-card page-card-link" to={`/${section.id}`}>
                <span className="page-card-icon">{section.icon}</span>
                <strong>{section.title}</strong>
                <small>{section.keyPoints.length} engineering notes and code examples</small>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return <TechStack />;
}

function TopicPage({ sectionId }) {
  const section = SECTIONS_DATA.find((item) => item.id === sectionId);

  if (!section) {
    return <Navigate to="/" replace />;
  }

  const sectionIndex = SECTIONS_DATA.findIndex((item) => item.id === sectionId);
  return <SectionCard section={section} index={sectionIndex} />;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageShell>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {SECTIONS_DATA.map((section) => (
            <Route
              key={section.id}
              path={`/${section.id}`}
              element={<TopicPage sectionId={section.id} />}
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageShell>
    </BrowserRouter>
  );
}

export default App;
