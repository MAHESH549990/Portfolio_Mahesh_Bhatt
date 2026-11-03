import { useRef, useState } from 'react';

const items=[
 ['Hack The Spring 2025','24-hour hackathon · Data-driven solutions','21–22 April 2025','fa-trophy'],
 ['Niruan 2025','24-hour web application hackathon','16–17 October 2025','fa-code'],
 ['Monthly Coding Series 2025','Tech Geeks Club','25 April 2025','fa-laptop-code'],
 ['Design Spark 2026','Software Development Cell','23 April 2026','fa-lightbulb']
];
const storageKey=name=>'mahesh-portfolio-certificate-'+name.toLowerCase().replace(/[^a-z0-9]+/g,'-');

function AchievementCard({item,index}){
 const [name,detail,date,icon]=item;
 const inputRef=useRef(null);
 const key=storageKey(name);
 const [image,setImage]=useState(()=>{try{return localStorage.getItem(key)||''}catch{return ''}});
 const [message,setMessage]=useState('');
 const chooseImage=async event=>{
  const file=event.target.files?.[0];
  if(!file)return;
  if(!file.type.startsWith('image/')){setMessage('Choose an image file.');event.target.value='';return}
  if(file.size>12*1024*1024){setMessage('Choose an image smaller than 12 MB.');event.target.value='';return}
  try{
   const bitmap=await createImageBitmap(file);
   const scale=Math.min(1,1800/Math.max(bitmap.width,bitmap.height));
   const canvas=document.createElement('canvas');
   canvas.width=Math.round(bitmap.width*scale);canvas.height=Math.round(bitmap.height*scale);
   const context=canvas.getContext('2d');
   context.fillStyle='#fff';context.fillRect(0,0,canvas.width,canvas.height);context.drawImage(bitmap,0,0,canvas.width,canvas.height);bitmap.close();
   const optimized=canvas.toDataURL('image/jpeg',.88);
   setImage(optimized);
   try{localStorage.setItem(key,optimized);setMessage('Saved in this browser.')}catch{setMessage('Preview added, but browser storage is full. It may not stay after you close the page.')} 
  }catch{setMessage('This image could not be opened. Try a JPG or PNG file.')}
  event.target.value='';
 };
 const clearImage=()=>{setImage('');setMessage('');try{localStorage.removeItem(key)}catch{}}
 return <article className="credential-card achievement-card">
  <div className="achievement-top"><div className="credential-icon"><i className={`fa-solid ${icon}`} aria-hidden="true"/></div><span className="row-number">ACHIEVEMENT / 0{index+1}</span></div>
  <h2>{name}</h2><p>{detail}</p>
  {image?<img className="certificate-preview" src={image} alt={`${name} certificate`}/>:<div className="certificate-placeholder"><i className="fa-regular fa-image" aria-hidden="true"/><strong>Certificate image</strong><span>Add a photo or scan of your certificate</span></div>}
  <div className="credential-bottom"><span>{date}</span><i className="fa-solid fa-check" aria-hidden="true"/></div>
  <input ref={inputRef} className="certificate-file-input" type="file" accept="image/*" onChange={chooseImage} aria-label={`Choose a certificate image for ${name}`}/>
  <div className="certificate-actions"><button type="button" className="certificate-upload-button" onClick={()=>inputRef.current?.click()}><i className={`fa-solid ${image?'fa-arrows-rotate':'fa-upload'}`} aria-hidden="true"/>{image?'Change image':'Add certificate image'}</button>{image&&<button type="button" className="certificate-remove-button" onClick={clearImage}>Remove</button>}</div>
  {message&&<p className="certificate-message" role="status">{message}</p>}
 </article>
}

export default function Certificates(){return <section className="page-wrap content-page"><div className="eyebrow">03 / CERTIFICATIONS &amp; ACHIEVEMENTS</div><div className="page-heading"><h1>Achievements<span>.</span></h1><p>Hackathons and technical activities listed in my resume.</p></div><div className="credential-grid">{items.map((item,index)=><AchievementCard item={item} index={index} key={item[0]}/>)}</div><p className="page-note">Use each card’s button to add a certificate photo or scan. Images are saved in this browser.</p></section>}
