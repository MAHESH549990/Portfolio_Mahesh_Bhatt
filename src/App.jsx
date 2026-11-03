import { useState } from 'react';
import Home from './components/Home.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Projects from './components/Projects.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contact.jsx';
import './style.css';
const pages={home:Home,skills:Skills,education:Education,projects:Projects,certificates:Certificates,contact:Contact};
const navItems=[['home','Home','fa-house'],['skills','Skills','fa-code'],['education','Education','fa-graduation-cap'],['projects','Projects','fa-diagram-project'],['certificates','Achievements','fa-award']];
export default function App(){const [page,setPage]=useState(location.hash.slice(1)||'home');const [menu,setMenu]=useState(false);const go=id=>{setPage(id);setMenu(false);history.replaceState(null,'','#'+id);window.scrollTo({top:0,behavior:'smooth'});};const Page=pages[page]||Home;return <div className="site"><header className="topbar"><button className="brand" onClick={()=>go('home')} aria-label="Mahesh Bhatt home"><span className="brand-glyph">M<span>.</span></span></button><button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-label="Toggle menu"><i className={`fa-solid ${menu?'fa-xmark':'fa-bars'}`} aria-hidden="true"/></button><nav className={menu?'main-nav open':'main-nav'}>{navItems.map(([id,label,icon])=><button className={page===id?'nav-current':''} key={id} onClick={()=>go(id)}><i className={`fa-solid ${icon}`} aria-hidden="true"/>{label}</button>)}<button className="nav-contact" onClick={()=>go('contact')}><i className="fa-solid fa-envelope" aria-hidden="true"/>Contact me <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"/></button></nav></header><main key={page}><Page go={go}/></main><footer className="footer"><button className="footer-brand" onClick={()=>go('home')}>MB<span>.</span></button><span>BUILT WITH CURIOSITY · MAHESH BHATT</span><div className="footer-social"><a href="https://github.com/MAHESH549990" aria-label="GitHub"><i className="fa-brands fa-github"/></a><a href="https://linkedin.com/in/mahesh-bhatt-286114325" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"/></a><a href="mailto:maheshbhattdev07@gmail.com" aria-label="Email"><i className="fa-solid fa-envelope"/></a></div></footer></div>}


