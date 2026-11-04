import { useState } from 'react';

const items = [
  { n: '01', category: 'E-commerce', type: 'FULL STACK · E-COMMERCE', title: 'PurelyProducts', desc: 'A full-stack e-commerce platform built with Node.js, Express.js, MongoDB, Mongoose, EJS and Bootstrap. Includes authentication, product CRUD, cart and order management, reviews, role-based access, Cloudinary image uploads and order status tracking.', tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'EJS', 'Bootstrap', 'Cloudinary'], live: 'https://purelyproducts.onrender.com', repo: 'https://github.com/MAHESH549990/PurelyProducts', icon: 'fa-bag-shopping', mark: 'PP' },
  { n: '02', category: 'Analytics', type: 'FULL STACK · URL ANALYTICS', title: 'LinkPulse', desc: 'A URL shortening and link analytics platform built with Node.js, Express.js, MongoDB, Mongoose, EJS and Bootstrap. Features authentication, link management, click tracking, and separate user and admin modules.', tech: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'EJS', 'Bootstrap'], live: 'https://linkpulse-es6s.onrender.com', repo: 'https://github.com/MAHESH549990/LinkPulse', icon: 'fa-link', mark: 'LP' },
];
const filters = ['All projects', 'E-commerce', 'Analytics'];

export default function Projects() {
  const [filter, setFilter] = useState('All projects');
  const visibleProjects = items.filter((item) => filter === 'All projects' || item.category === filter);

  return (
    <section className="page-wrap content-page projects-page">
      <div className="eyebrow">04 / SELECTED WORK</div>
      <div className="page-heading"><h1>Projects<span>.</span></h1><p>Products and tools shaped around real needs, designed, built and deployed.</p></div>
      <div className="project-controls"><div className="project-filters" role="tablist" aria-label="Filter projects">{filters.map((item) => <button type="button" role="tab" aria-selected={filter === item} className={filter === item ? 'project-filter active' : 'project-filter'} key={item} onClick={() => setFilter(item)}>{item}<span>{item === 'All projects' ? '02' : String(items.filter((project) => project.category === item).length).padStart(2, '0')}</span></button>)}</div><span className="project-result-count">SHOWING {String(visibleProjects.length).padStart(2, '0')} PROJECTS</span></div>
      <div className="project-list" aria-live="polite">{visibleProjects.map((project) => <article className="work-card" key={project.n}><div className="work-visual"><div className="work-visual-grid"/><div className="work-visual-top"><span>{project.type}</span><span>{project.n} / 02</span></div><div className="work-emblem"><i className={`fa-solid ${project.icon}`} aria-hidden="true"/><strong>{project.mark}</strong></div><span className="work-visual-bottom">MAHESH BHATT · WEB APPLICATION</span></div><div className="work-info"><span className="project-kicker"><i className="fa-solid fa-square" aria-hidden="true"/> {project.type}</span><h2>{project.title}</h2><p>{project.desc}</p><div className="tech-list">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-links"><a href={project.live} target="_blank" rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"/> Live project</a><a href={project.repo} target="_blank" rel="noreferrer"><i className="fa-brands fa-github" aria-hidden="true"/> View source</a></div></div></article>)}</div>
      <div className="project-summary"><span><i className="fa-solid fa-code" aria-hidden="true"/> FULL STACK DEVELOPMENT</span><span><i className="fa-solid fa-database" aria-hidden="true"/> DATABASE DESIGN</span><span><i className="fa-solid fa-chart-line" aria-hidden="true"/> PRODUCT ANALYTICS</span></div>
    </section>
  );
}
