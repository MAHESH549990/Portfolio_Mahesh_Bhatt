import { useState } from 'react';

const education = [
  { year: '2024 — PRESENT', school: 'Graphic Era Hill University', place: 'Haldwani Campus', degree: 'Bachelor of Computer Applications', focus: 'Artificial Intelligence & Data Science · Final year', result: '8.13', resultLabel: 'CURRENT SGPA', icon: 'fa-graduation-cap', detail: 'Studying software development, data science, and machine learning while building practical full-stack projects.' },
  { year: '2023 — 2024', school: 'J. I. C. Shaukiyathal', place: 'Uttarakhand', degree: 'Intermediate · Class XII', focus: 'Senior secondary education', result: '62.6%', resultLabel: 'FINAL SCORE', icon: 'fa-school', detail: 'Completed senior secondary studies and built the academic foundation for computer applications.' },
  { year: '2021 — 2022', school: 'J. I. C. Shaukiyathal', place: 'Uttarakhand', degree: 'High School · Class X', focus: 'Secondary education', result: 'COMPLETED', resultLabel: 'ACADEMIC MILESTONE', icon: 'fa-book-open', detail: 'Completed secondary education in Uttarakhand before continuing into intermediate studies.' },
];

export default function Education() {
  const [selected, setSelected] = useState(0);
  const item = education[selected];

  return (
    <section className="page-wrap content-page education-page">
      <div className="eyebrow">03 / ACADEMIC BACKGROUND</div>
      <div className="page-heading"><h1>Education<span>.</span></h1><p>A steady path in computer applications, data science, and the fundamentals that support both.</p></div>
      <div className="education-subhead education-timeline-heading"><div><h2>Academic timeline</h2><p>Select a milestone to view its details.</p></div><span>{String(selected + 1).padStart(2, '0')} / 03</span></div>
      <div className="education-timeline" role="tablist" aria-label="Education history">
        {education.map((entry, index) => <button type="button" role="tab" aria-selected={selected === index} className={selected === index ? 'education-timeline-tab active' : 'education-timeline-tab'} key={entry.year} onClick={() => setSelected(index)}><span className="education-timeline-icon"><i className={`fa-solid ${entry.icon}`} aria-hidden="true" /></span><span className="education-timeline-copy"><small>{entry.year}</small><strong>{entry.school}</strong><span>{entry.degree}</span></span><i className="fa-solid fa-arrow-right education-timeline-arrow" aria-hidden="true" /></button>)}
      </div>
      <article className="education-feature education-selected-panel" role="tabpanel" key={item.year}>
        <div className="education-feature-top"><span><i className="fa-solid fa-circle" /> {selected === 0 ? 'CURRENT STUDIES' : 'ACADEMIC HISTORY'}</span><span>{item.year}</span></div>
        <div className="education-feature-main"><div><div className="education-icon-large"><i className={`fa-solid ${item.icon}`} aria-hidden="true" /></div><h2>{item.school}</h2><p className="education-place"><i className="fa-solid fa-location-dot" aria-hidden="true" /> {item.place}</p></div><div className="education-program"><span>{item.degree}</span><strong>{item.focus}</strong><p>{item.detail}</p></div></div>
        <div className="education-feature-foot"><span>ACADEMIC PERFORMANCE</span><div><strong>{item.result}</strong><small>{item.resultLabel}</small></div></div>
      </article>
    </section>
  );
}
