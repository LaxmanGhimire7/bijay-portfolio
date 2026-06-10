export const SECTIONS_DATA = [
  {
    id: 'fullstack',
    type: 'fullstack',
    icon: 'FS',
    title: 'Full Stack Development',
    order: 0,
    overview:
      'Full stack development is the practice of designing, building, and operating software across the browser, application server, API layer, database, and deployment environment. A senior engineer treats these areas as one system: clear contracts, reliable data flow, secure boundaries, and maintainable architecture.',
    demonstration:
      'The working example below shows how a MERN request moves from the browser through React, Express, a controller, a model, and finally MongoDB. It demonstrates the relationship between frontend, backend, and database responsibilities.',
    keyPoints: [
      {
        heading: 'System Thinking',
        body: 'A production application is not only screens and endpoints. It is routing, validation, authentication, observability, data modelling, error handling, deployment, and the operational choices that keep the system understandable over time.',
      },
      {
        heading: 'Frontend Responsibilities',
        body: 'The client layer owns structure, accessibility, state, performance, navigation, and user feedback. Good frontend code keeps UI behaviour predictable and separates view concerns from data access.',
      },
      {
        heading: 'Backend Responsibilities',
        body: 'The server layer protects business rules, validates input, handles errors consistently, controls access to data, and exposes APIs with stable response shapes.',
      },
      {
        heading: 'Data Layer',
        body: 'MongoDB and Mongoose provide flexible document storage, but the schema still needs discipline: indexes, required fields, validation, and query patterns that match real application usage.',
      },
      {
        heading: 'MVC Architecture',
        body: 'MVC keeps the application easier to reason about. Models describe data, controllers coordinate application behaviour, routes expose HTTP entry points, and views present the result.',
      },
      {
        heading: 'Delivery Mindset',
        body: 'Senior engineering means building code that can be changed safely: clear module boundaries, repeatable setup, documented assumptions, and small decisions that reduce future maintenance cost.',
      },
    ],
    codeExamples: [
      {
        title: 'Express Route Delegating To Controller',
        language: 'javascript',
        code: `const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolio.controller');

router.get('/', portfolioController.getPortfolio);
router.put('/:id', portfolioController.updatePortfolio);

module.exports = router;`,
        description:
          'Routes stay thin and delegate application behaviour to controllers, which keeps HTTP wiring separate from business logic.',
      },
    ],
  },
  {
    id: 'html',
    type: 'html',
    icon: 'H',
    title: 'HTML Structure and Semantics',
    order: 1,
    overview:
      'HTML is the document contract of the web. Professional HTML is semantic, accessible, searchable, and easy for future developers to maintain. The goal is not to use more tags; it is to use the right elements for the meaning of the content.',
    demonstration:
      'The working example below shows a semantic article layout with header, navigation, main content, section, article, and footer areas. It demonstrates accessible structure before any styling is considered.',
    keyPoints: [
      {
        heading: 'Semantic Landmarks',
        body: 'Elements such as header, nav, main, section, article, aside, and footer provide meaningful structure for browsers, assistive technology, and search engines.',
      },
      {
        heading: 'Accessibility',
        body: 'Correct heading order, labels, keyboard-friendly navigation, alt text, and appropriate ARIA usage make the page usable for more people and easier to test.',
      },
      {
        heading: 'Forms',
        body: 'Native input types, labels, required fields, validation attributes, and clear error messaging reduce unnecessary JavaScript and improve user experience.',
      },
      {
        heading: 'Metadata',
        body: 'Title, description, viewport, Open Graph fields, and structured metadata help the page render correctly and communicate clearly outside the browser.',
      },
    ],
    codeExamples: [
      {
        title: 'Accessible Page Skeleton',
        language: 'html',
        code: `<header>
  <nav aria-label="Primary navigation">
    <a href="#main">Skip to content</a>
    <a href="/about">About</a>
    <a href="/fullstack">Full Stack</a>
  </nav>
</header>

<main id="main">
  <section aria-labelledby="page-title">
    <h1 id="page-title">Full Stack Portfolio</h1>
    <p>Documented work across frontend, backend, and data layers.</p>
  </section>
</main>`,
        description:
          'Semantic structure gives the page meaning before CSS or JavaScript are added.',
      },
    ],
  },
  {
    id: 'css',
    type: 'css',
    icon: 'C',
    title: 'CSS Layout and Presentation',
    order: 2,
    overview:
      'CSS should support the content instead of competing with it. A professional interface uses consistent spacing, restrained colour, predictable layout rules, and responsive behaviour that works without fragile one-off fixes.',
    demonstration:
      'The working example below demonstrates a responsive card grid, reusable design tokens, and visual hierarchy created with CSS rather than extra markup.',
    keyPoints: [
      {
        heading: 'Layout Systems',
        body: 'Flexbox is ideal for one-dimensional alignment, while Grid handles two-dimensional page and card layouts. Using both intentionally keeps layout code simple.',
      },
      {
        heading: 'Design Tokens',
        body: 'CSS custom properties centralise colour, spacing, typography, borders, and transitions so the interface can evolve without scattered magic values.',
      },
      {
        heading: 'Responsive Behaviour',
        body: 'Fluid grids, max-width containers, sensible breakpoints, and stable component dimensions prevent layout shifts across mobile and desktop screens.',
      },
      {
        heading: 'Maintainability',
        body: 'Readable class names, small reusable patterns, and a limited visual vocabulary make CSS easier to review and extend.',
      },
    ],
    codeExamples: [
      {
        title: 'Responsive Card Grid',
        language: 'css',
        code: `:root {
  --space-4: 1rem;
  --space-6: 1.5rem;
  --border: #d8dee8;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: var(--space-6);
}

.card {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: var(--space-6);
}`,
        description:
          'A small layout primitive can support many sections without rewriting component-specific CSS.',
      },
    ],
  },
  {
    id: 'bootstrap',
    type: 'bootstrap',
    icon: 'B',
    title: 'Bootstrap UI Framework',
    order: 3,
    overview:
      'Bootstrap is useful when speed, consistency, and responsive defaults matter. A senior approach is to use it deliberately: take advantage of its grid and components, then customise only where the product needs a distinct design system.',
    demonstration:
      'The working example below demonstrates Bootstrap concepts: container spacing, responsive columns, cards, badges, and button styles that can be combined quickly into a consistent interface.',
    keyPoints: [
      {
        heading: 'Grid System',
        body: 'The 12-column grid and breakpoint classes provide a proven foundation for responsive layouts without writing custom media queries for every view.',
      },
      {
        heading: 'Component Consistency',
        body: 'Buttons, forms, navbars, modals, cards, alerts, and tables give teams consistent interaction patterns and reduce UI implementation time.',
      },
      {
        heading: 'Utility Classes',
        body: 'Spacing, display, typography, colour, and flex utilities make common layout adjustments fast while keeping custom CSS focused on reusable patterns.',
      },
      {
        heading: 'Customisation',
        body: 'Sass variables and theme configuration allow Bootstrap to fit a product identity without fighting the framework.',
      },
    ],
    codeExamples: [
      {
        title: 'Bootstrap Responsive Layout',
        language: 'html',
        code: `<div class="container py-5">
  <div class="row g-4">
    <div class="col-12 col-md-6 col-lg-4">
      <article class="card h-100">
        <div class="card-body">
          <h2 class="h5">Portfolio API</h2>
          <p class="text-muted">Express and MongoDB service layer.</p>
          <a class="btn btn-primary btn-sm" href="/fullstack">Review</a>
        </div>
      </article>
    </div>
  </div>
</div>`,
        description:
          'Bootstrap is strongest when its layout and component conventions are used consistently.',
      },
    ],
  },
  {
    id: 'javascript',
    type: 'javascript',
    icon: 'JS',
    title: 'JavaScript Application Logic',
    order: 4,
    overview:
      'JavaScript connects the interface to behaviour. Professional JavaScript is explicit about data flow, handles asynchronous work carefully, avoids hidden side effects, and keeps business logic testable outside the UI.',
    demonstration:
      'The working example below is interactive. It filters portfolio tasks by status, updates derived counts, and shows how JavaScript state changes the rendered interface.',
    keyPoints: [
      {
        heading: 'Modern Syntax',
        body: 'Modules, destructuring, template literals, optional chaining, async functions, and array methods help express intent with less boilerplate.',
      },
      {
        heading: 'Asynchronous Control',
        body: 'Promises and async/await make API calls readable, but production code still needs loading states, error states, cancellation, and retry decisions.',
      },
      {
        heading: 'State Management',
        body: 'React state should be scoped carefully. Local UI state, server data, derived values, and persistent data should not be mixed without reason.',
      },
      {
        heading: 'Error Handling',
        body: 'Good JavaScript makes failure visible and recoverable. It validates assumptions, handles missing data, and reports problems in a useful way.',
      },
    ],
    codeExamples: [
      {
        title: 'Small Fetch Utility',
        language: 'javascript',
        code: `export async function getJSON(path) {
  const response = await fetch(path, {
    headers: { Accept: 'application/json' },
  });

  if (!response.ok) {
    throw new Error(\`Request failed with status \${response.status}\`);
  }

  return response.json();
}`,
        description:
          'A focused utility keeps API behaviour consistent and prevents every component from inventing its own fetch logic.',
      },
    ],
  },
];

export const TECH_STACK = [
  { name: 'MongoDB', category: 'Database', level: 85 },
  { name: 'Express.js', category: 'Backend', level: 90 },
  { name: 'React', category: 'Frontend', level: 92 },
  { name: 'Node.js', category: 'Runtime', level: 88 },
  { name: 'HTML5', category: 'Markup', level: 95 },
  { name: 'CSS3', category: 'Style', level: 90 },
  { name: 'JavaScript', category: 'Language', level: 91 },
  { name: 'Bootstrap 5', category: 'Framework', level: 87 },
];
