const certificates = [
  {
    title: 'Apna College · Delta',
    subtitle: 'Full Stack Web Development',
    overview: 'Completed a full-stack course covering frontend, backend, and the tools used to build web applications.',
    date: 'COURSE COMPLETION',
    category: 'Courses',
    icon: 'fa-code',
    image: '/certificates/apna-college-delta-full-stack.png',
    featured: true,
  },
  {
    title: 'NIRVAN Techfest · 24-Hour Hackathon',
    subtitle: 'Tech Geeks · Graphic Era Hill University',
    overview: 'Participated in the 24-hour hackathon at Techfest 2025, collaborating to build and present a solution.',
    date: '16–17 OCTOBER 2025',
    category: 'Hackathons',
    icon: 'fa-code-branch',
    image: '/certificates/nirvan-24-hour-hackathon-2025.jpg',
  },
  {
    title: 'GRAFEST 2025 · Build For GEHU',
    subtitle: 'GEHU Bhimtal Campus · Youth Fest',
    overview: 'Joined the Build For GEHU event during the GRAFEST 2025 youth festival.',
    date: '21–23 APRIL 2025',
    category: 'Hackathons',
    icon: 'fa-people-group',
    image: '/certificates/grafest-build-for-gehu-2025.png',
  },
  {
    title: 'Design Spark 2026',
    subtitle: 'Software Development Cell · GEHU Haldwani',
    overview: 'Participated in Design Spark, celebrating creative design and active involvement in the campus community.',
    date: '23 APRIL 2026',
    category: 'Events',
    icon: 'fa-lightbulb',
    image: '/certificates/design-spark-2026.png',
  },
  {
    title: 'EngineerX · Tech Quiz',
    subtitle: 'Tech Geeks Club · Certificate of Participation',
    overview: 'Tested technical knowledge in the EngineerX quiz hosted at GEHU Haldwani.',
    date: '15 SEPTEMBER 2026',
    category: 'Events',
    icon: 'fa-laptop-code',
    image: '/certificates/engineerx-tech-quiz-2026.png',
  },
  {
    title: 'Monthly Coding Series',
    subtitle: 'Tech Geeks Club · Certificate of Participation',
    overview: 'Recognized for taking part in a coding challenge focused on consistent practice.',
    date: '25 APRIL 2025',
    category: 'Events',
    icon: 'fa-terminal',
    image: '/certificates/monthly-coding-series-2025.png',
  },
  {
    title: 'QuizVerse',
    subtitle: 'Synexis Club · Certificate of Participation',
    overview: 'Participated in a campus quiz hosted for BCA AI & Data Science students.',
    date: '21 SEPTEMBER 2024',
    category: 'Events',
    icon: 'fa-trophy',
    image: '/certificates/quizverse-synexis-2024.png',
  },
];

function CertificateCard({ certificate, index }) {
  const { title, subtitle, overview, date, icon, image, featured } = certificate;

  return (
    <article className={`credential-card achievement-card${featured ? ' featured-certificate' : ''}`}>
      <div className="achievement-top">
        <div className="credential-icon"><i className={`fa-solid ${icon}`} aria-hidden="true" /></div>
        <span className="row-number">CERTIFICATE / {String(index + 1).padStart(2, '0')}</span>
        {featured && <span className="featured-badge"><i className="fa-solid fa-star" aria-hidden="true" /> FEATURED</span>}
      </div>
      <div className="achievement-copy">
        <h2>{title}</h2>
        <p className="certificate-subtitle">{subtitle}</p>
        <p className="certificate-overview">{overview}</p>
        <div className="credential-bottom"><span>{date}</span><i className="fa-solid fa-certificate" aria-hidden="true" /></div>
      </div>
      <div className="certificate-display"><img src={image} alt={`${title} certificate`} loading={featured ? 'eager' : 'lazy'} /></div>
    </article>
  );
}

export default function Certificates() {
  const categories = ['Courses', 'Hackathons', 'Events'];

  return (
    <section className="page-wrap content-page certificates-page">
      <div className="eyebrow">03 / CERTIFICATES &amp; ACHIEVEMENTS</div>
      <div className="page-heading">
        <h1>Certificates<span>.</span></h1>
        <p>Course milestones, hackathons, and campus events—each with its certificate and a short overview.</p>
      </div>
      {categories.map((category) => {
        const entries = certificates.filter((certificate) => certificate.category === category);
        return (
          <section className="certificate-category" key={category} aria-labelledby={`certificate-${category.toLowerCase()}`}>
            <div className="certificate-category-heading">
              <h2 id={`certificate-${category.toLowerCase()}`}>{category}<span>.</span></h2>
              <span>{String(entries.length).padStart(2, '0')} CERTIFICATES</span>
            </div>
            <div className="credential-grid certificate-grid">
              {entries.map((certificate, index) => <CertificateCard certificate={certificate} index={index} key={certificate.title} />)}
            </div>
          </section>
        );
      })}
      <p className="page-note">The Apna College Delta course certificate is highlighted as a key learning milestone.</p>
    </section>
  );
}
