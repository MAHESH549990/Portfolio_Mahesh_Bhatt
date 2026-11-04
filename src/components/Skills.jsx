import { useState } from 'react';

const languages = [
  { name: 'Java', icon: 'fa-brands fa-java', note: 'Object-oriented programming' },
  { name: 'JavaScript', icon: 'fa-brands fa-js', note: 'Interactive web development' },
  { name: 'Python', icon: 'fa-brands fa-python', note: 'AI, data science & scripting' },
];

const groups = [
  { name: 'Frontend development', category: 'development', icon: 'fa-solid fa-display', items: [['HTML5', 'fa-brands fa-html5'], ['CSS3', 'fa-brands fa-css3-alt'], ['React.js', 'fa-brands fa-react'], ['Bootstrap', 'fa-brands fa-bootstrap']] },
  { name: 'Backend development', category: 'development', icon: 'fa-solid fa-server', items: [['Node.js', 'fa-brands fa-node-js'], ['Express.js', 'fa-solid fa-server'], ['REST APIs', 'fa-solid fa-code']] },
  { name: 'Databases', category: 'development', icon: 'fa-solid fa-database', items: [['MongoDB', 'fa-solid fa-leaf'], ['Mongoose', 'fa-solid fa-circle-nodes'], ['MySQL', 'fa-solid fa-database']] },
  { name: 'AI & data science', category: 'ai', icon: 'fa-solid fa-brain', items: [['Machine Learning', 'fa-solid fa-brain'], ['NumPy', 'fa-solid fa-chart-line'], ['Pandas', 'fa-solid fa-table'], ['Scikit-learn', 'fa-solid fa-microchip']] },
  { name: 'Core concepts & tools', category: 'foundations', icon: 'fa-solid fa-screwdriver-wrench', items: [['DSA', 'fa-solid fa-diagram-project'], ['OOP', 'fa-solid fa-cubes'], ['Git', 'fa-solid fa-code-branch'], ['GitHub', 'fa-brands fa-github'], ['VS Code', 'fa-solid fa-code'], ['Render', 'fa-solid fa-cloud']] },
];

const filters = [
  { id: 'all', label: 'All tools' },
  { id: 'development', label: 'Web development' },
  { id: 'ai', label: 'AI & data' },
  { id: 'foundations', label: 'Core & tools' },
];

export default function Skills() {
  const [filter, setFilter] = useState('all');
  const visibleGroups = groups.filter((group) => filter === 'all' || group.category === filter);

  return (
    <section className="page-wrap content-page skills-page">
      <div className="eyebrow">02 / TECHNICAL TOOLKIT</div>
      <div className="page-heading"><h1>Skills<span>.</span></h1><p>Languages, frameworks and tools I use to turn ideas into working software.</p></div>
      <div className="skills-block-heading"><div><span className="skills-overline">THE LANGUAGES</span><h2>Where I write code.</h2></div><span className="skills-count">03 LANGUAGES</span></div>
      <div className="languages-showcase">
        {languages.map((item, index) => <article className="language-card" key={item.name}><span className="language-icon"><i className={item.icon} aria-hidden="true" /></span><span className="language-copy"><small>PROGRAMMING LANGUAGE · 0{index + 1}</small><strong>{item.name}</strong><span>{item.note}</span></span><span className="language-index">0{index + 1}</span></article>)}
      </div>
      <div className="skills-block-heading stack-heading"><div><span className="skills-overline">THE TOOLKIT</span><h2>Tools I build with.</h2></div><span className="skills-count">{String(visibleGroups.reduce((total, group) => total + group.items.length, 0)).padStart(2, '0')} TOOLS SHOWN</span></div>
      <div className="skills-filters" role="tablist" aria-label="Filter skill groups">
        {filters.map((item) => <button type="button" role="tab" aria-selected={filter === item.id} className={filter === item.id ? 'skills-filter active' : 'skills-filter'} key={item.id} onClick={() => setFilter(item.id)}>{item.label}<span>{item.id === 'all' ? '05' : String(groups.filter((group) => group.category === item.id).length).padStart(2, '0')}</span></button>)}
      </div>
      <div className="technology-grid" aria-live="polite">
        {visibleGroups.map((group) => <article className="technology-card" key={group.name}><div className="technology-heading"><span><i className={group.icon} aria-hidden="true" /></span><h3>{group.name}</h3></div><div className="technology-items">{group.items.map(([name, icon]) => <div className="technology-item" key={name}><i className={icon} aria-hidden="true" /><span>{name}</span></div>)}</div></article>)}
      </div>
      <div className="skills-footnote"><i className="fa-solid fa-compass" aria-hidden="true" /> Currently focused on Java, data structures &amp; algorithms, and practical AI/ML.</div>
    </section>
  );
}
