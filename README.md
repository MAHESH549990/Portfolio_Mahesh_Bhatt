# Mahesh Bhatt — Portfolio

A responsive, multi-section personal portfolio for Mahesh Bhatt, a BCA student specializing in Artificial Intelligence and Data Science. The site presents his profile, technical skills, education, projects, certificates, and contact information in a clean black-and-white design.

## Portfolio sections

- **Home** — introduction, profile photo, and social links
- **Skills** — programming languages, development tools, and AI/ML interests
- **Education** — current degree and academic history
- **Projects** — selected software and full-stack work
- **Achievements** — certificates grouped into Courses, Hackathons, and Participation; certificate scans are stored in `public/certificates/`
- **Contact** — email and professional profile links

## Technology

- React
- Vite
- CSS
- Font Awesome and Lucide icons

## Run locally

Requirements: Node.js and npm.

```bash
git clone https://github.com/MAHESH549990/Portfolio_Mahesh_Bhatt.git
cd Portfolio_Mahesh_Bhatt
npm install
npm run dev
```

Vite prints a local URL after the development server starts, usually `http://localhost:5173/`.

## Build for production

```bash
npm run build
npm run preview
```

The production site is generated in `dist/`.

## Deploy on Render

Create a **Static Site** connected to this GitHub repository and use:

- **Build command:** `npm install && npm run build`
- **Publish directory:** `dist`

Render will build and publish the site whenever changes are pushed to the selected branch.

## Project structure

```text
public/
  certificates/       Certificate images
  mahesh-bhatt.jpeg   Profile photo
src/
  components/         Portfolio pages and sections
  App.jsx             Page navigation
  main.jsx            React entry point
  style.css           Site styling
```

Portfolio content is maintained in the components under `src/components/`.
