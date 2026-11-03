import { useRef, useState } from 'react';

const certificates=[
 {title:'Apna College · Delta',subtitle:'Full Stack Web Development',overview:'Completed the Delta course in full-stack web development, covering the skills and tools used to build complete web applications.',date:'COURSE COMPLETION',icon:'fa-code',image:'/certificates/apna-college-delta-full-stack.png',featured:true},
 {title:'EngineerX · Tech Quiz',subtitle:'Tech Geeks Club · Certificate of Participation',overview:'Participated in the EngineerX technology quiz hosted by Tech Geeks Club at Graphic Era Hill University, Haldwani Campus.',date:'15 SEPTEMBER 2026',icon:'fa-laptop-code',image:'/certificates/engineerx-tech-quiz-2026.png'},
 {title:'GRAFEST 2025 · Build For GEHU',subtitle:'GEHU Bhimtal Campus · Youth Fest',overview:'Represented GEHU Haldwani at the GRAFEST 2025 youth festival and participated in the Build For GEHU event.',date:'21–23 APRIL 2025',icon:'fa-people-group',image:'/certificates/grafest-build-for-gehu-2025.png'},
 {title:'Hackathon Round I · Nirvan 25',subtitle:'Tech Geeks Club · Certificate of Participation',overview:'Participated in the first round of Nirvan 25, a web application hackathon organized by Tech Geeks Club.',date:'13 OCTOBER 2025',icon:'fa-code-branch',image:'/certificates/nirvan-hackathon-round-1-2025.png'},
 {title:'Monthly Coding Series 2025',subtitle:'Tech Geeks Club · Certificate of Participation',overview:'Completed the Monthly Coding Series, an event organized by Tech Geeks Club to encourage regular coding practice.',date:'25 APRIL 2025',icon:'fa-terminal',image:'/certificates/monthly-coding-series-2025.png'},
 {title:'QuizVerse',subtitle:'Synexis Club · Certificate of Participation',overview:'Participated in QuizVerse, organized by Synexis Club for BCA Artificial Intelligence and Data Science students.',date:'21 SEPTEMBER 2024',icon:'fa-trophy',image:'/certificates/quizverse-synexis-2024.png'}
];
const storageKey=title=>'mahesh-portfolio-certificate-'+title.toLowerCase().replace(/[^a-z0-9]+/g,'-');

function CertificateCard({certificate,index}){
 const {title,subtitle,overview,date,icon,image:providedImage,featured}=certificate;
 const inputRef=useRef(null),key=storageKey(title);
 const [savedImage,setSavedImage]=useState(()=>{try{return localStorage.getItem(key)||''}catch{return ''}});
 const [message,setMessage]=useState('');
 const image=savedImage||providedImage;
 const chooseImage=async event=>{
  const file=event.target.files?.[0];if(!file)return;
  if(!file.type.startsWith('image/')){setMessage('Choose an image file.');event.target.value='';return}
  if(file.size>12*1024*1024){setMessage('Choose an image smaller than 12 MB.');event.target.value='';return}
  try{
   const bitmap=await createImageBitmap(file),scale=Math.min(1,1800/Math.max(bitmap.width,bitmap.height));
   const canvas=document.createElement('canvas');canvas.width=Math.round(bitmap.width*scale);canvas.height=Math.round(bitmap.height*scale);
   const context=canvas.getContext('2d');context.fillStyle='#fff';context.fillRect(0,0,canvas.width,canvas.height);context.drawImage(bitmap,0,0,canvas.width,canvas.height);bitmap.close();
   const optimized=canvas.toDataURL('image/jpeg',.88);setSavedImage(optimized);
   try{localStorage.setItem(key,optimized);setMessage('Your image is saved in this browser.')}catch{setMessage('Image preview added. Browser storage is full, so it may not stay after you close the page.')}
  }catch{setMessage('This image could not be opened. Try a JPG or PNG file.')}
  event.target.value='';
 };
 const restoreProvided=()=>{setSavedImage('');setMessage('Showing the original certificate.');try{localStorage.removeItem(key)}catch{}};
 return <article className={`credential-card achievement-card${featured?' featured-certificate':''}`}>
  <div className="achievement-top"><div className="credential-icon"><i className={`fa-solid ${icon}`} aria-hidden="true"/></div><span className="row-number">CERTIFICATE / {String(index+1).padStart(2,'0')}</span>{featured&&<span className="featured-badge"><i className="fa-solid fa-star"/> FEATURED · IMPORTANT</span>}</div>
  <div className="achievement-copy"><h2>{title}</h2><p className="certificate-subtitle">{subtitle}</p><p className="certificate-overview">{overview}</p><div className="credential-bottom"><span>{date}</span><i className="fa-solid fa-certificate" aria-hidden="true"/></div></div>
  <div className="certificate-display"><img src={image} alt={`${title} certificate`} loading={featured?'eager':'lazy'}/></div>
  <input ref={inputRef} className="certificate-file-input" type="file" accept="image/*" onChange={chooseImage} aria-label={`Choose a certificate image for ${title}`}/>
  <div className="certificate-actions"><button type="button" className="certificate-upload-button" onClick={()=>inputRef.current?.click()}><i className="fa-solid fa-image" aria-hidden="true"/> Add or replace image</button>{savedImage&&<button type="button" className="certificate-remove-button" onClick={restoreProvided}>Restore original</button>}</div>
  {message&&<p className="certificate-message" role="status">{message}</p>}
 </article>
}

export default function Certificates(){return <section className="page-wrap content-page"><div className="eyebrow">03 / CERTIFICATES &amp; ACHIEVEMENTS</div><div className="page-heading"><h1>Certificates<span>.</span></h1><p>Event participation and course completion certificates, with a short overview of each.</p></div><div className="credential-grid certificate-grid">{certificates.map((certificate,index)=><CertificateCard certificate={certificate} index={index} key={certificate.title}/>)}</div><p className="page-note">The Apna College Delta full-stack certificate is highlighted as your priority certificate. Use “Add or replace image” to personalize any certificate with your own scan; added images are saved in this browser.</p></section>}
