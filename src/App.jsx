import { useState } from 'react';
import Home from './components/Home.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contact.jsx';
import './style.css';

const pages = [
  { id: 'home', label: 'Home', icon: 'fa-house', Component: Home },
  { id: 'skills', label: 'Skills', icon: 'fa-code', Component: Skills },
  { id: 'education', label: 'Education', icon: 'fa-graduation-cap', Component: Education },
  { id: 'projects', label: 'Projects', icon: 'fa-diagram-project', Component: Projects },
  { id: 'certificates', label: 'Achievements', icon: 'fa-award', Component: Certificates },
  { id: 'contact', label: 'Contact', icon: 'fa-address-card', Component: Contact },
];

export default function App() {
  const initialPage = location.hash.slice(1);
  const [page, setPage] = useState(pages.some((item) => item.id === initialPage) ? initialPage : 'home');
  const [menu, setMenu] = useState(false);
  const pageIndex = pages.findIndex((item) => item.id === page);
  const Page = pages[pageIndex]?.Component || Home;

  const go = (id) => {
    setPage(id);
    setMenu(false);
    history.replaceState(null, '', `#${id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateByOffset = (offset) => {
    const next = (pageIndex + offset + pages.length) % pages.length;
    go(pages[next].id);
  };

  return (
    <div className="site">
      <header className="topbar">
        <button className="brand" onClick={() => go('home')} aria-label="Mahesh Bhatt home">
          <span className="brand-glyph">M<span>.</span></span>
        </button>
        <div className="header-page-count"><span>{String(pageIndex + 1).padStart(2, '0')}</span> / {String(pages.length).padStart(2, '0')}</div>
        <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Toggle menu" aria-expanded={menu}>
          <i className={`fa-solid ${menu ? 'fa-xmark' : 'fa-bars'}`} aria-hidden="true" />
        </button>
        <nav className={menu ? 'main-nav open' : 'main-nav'} aria-label="Main navigation">
          {pages.map(({ id, label, icon }, index) => (
            <button className={page === id ? 'nav-current' : ''} key={id} onClick={() => go(id)} aria-current={page === id ? 'page' : undefined}>
              <i className={`fa-solid ${icon}`} aria-hidden="true" /><span>{label}</span><small>{String(index + 1).padStart(2, '0')}</small>
            </button>
          ))}
          <button className="nav-contact" onClick={() => go('contact')}>
            <i className="fa-solid fa-envelope" aria-hidden="true" />Let’s talk<i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true" />
          </button>
        </nav>
      </header>
      <main key={page} className="page-transition"><Page go={go} /></main>
      <footer className="footer">
        <button className="footer-brand" onClick={() => go('home')} aria-label="Back to home">MB<span>.</span></button>
        <div className="footer-pagination" aria-label="Page navigation">
          <button className="footer-page-arrow" onClick={() => navigateByOffset(-1)} aria-label="Previous page"><i className="fa-solid fa-arrow-left" aria-hidden="true" /></button>
          <div className="footer-page-dots">
            {pages.map((item, index) => <button key={item.id} className={page === item.id ? 'footer-page-dot current' : 'footer-page-dot'} onClick={() => go(item.id)} aria-label={`Go to ${item.label}`} aria-current={page === item.id ? 'page' : undefined} title={item.label}><span>{String(index + 1).padStart(2, '0')}</span></button>)}
          </div>
          <button className="footer-page-arrow" onClick={() => navigateByOffset(1)} aria-label="Next page"><i className="fa-solid fa-arrow-right" aria-hidden="true" /></button>
        </div>
        <span className="footer-caption">{String(pageIndex + 1).padStart(2, '0')} / {String(pages.length).padStart(2, '0')} · MAHESH BHATT</span>
        <div className="footer-social">
          <a href="https://github.com/MAHESH549990" aria-label="GitHub"><i className="fa-brands fa-github" /></a>
          <a href="https://linkedin.com/in/mahesh-bhatt-286114325" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in" /></a>
          <a href="mailto:maheshbhattdev07@gmail.com" aria-label="Email"><i className="fa-solid fa-envelope" /></a>
        </div>
      </footer>
    </div>
  );
}
