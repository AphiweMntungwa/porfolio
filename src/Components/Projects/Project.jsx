import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Import images if they exist, otherwise use placeholders or just text
// Assuming assets are still in the same place, but I might need to adjust paths if I moved things.
// Based on previous file structure: ../../Assets/snitcher.jpg
import snitcher from "../../Assets/snitcher.jpg";
import khalipha from "../../Assets/khalipha.png";
import morabaraba from "../../Assets/morabaraba.png";

const projectsData = [
  {
    title: "Reshub",
    description: "An integrated system featuring a Next.js client with TypeScript, instant messaging via WebSockets, and Material UI. The backend utilizes a .NET server for core logic and Node.js for network-intensive tasks like posts and real-time communication.",
    tech: ["Next.js", "TypeScript", "WebSockets", "Material UI", ".NET Core", "Node.js", "Microservices"],
    link: "", // No link provided
    github: "", // No github provided
    image: null
  },
  {
    title: "Khalipha",
    description: "Khalipha is a prototype for a data visualisation platform for countries and their constituencies. It utilises chart.js for data visualisation, Redux for state management and has easily reusable React components.",
    tech: ["React", "Redux", "Chart.js", "Axios", "Bootstrap", "REST", "Express & Mongo"],
    link: "https://khalipha.herokuapp.com/",
    github: "https://github.com/AphiweMntungwa/khalipha",
    image: khalipha
  },
  {
    title: "Mlabalaba",
    description: "Morabaraba is an ancient board game. It is a traditional African game, but people all over the world play it. The game uses SVG for display of board and movements across the board.",
    tech: ["React", "Redux", "SVG", "OOP", "SCSS", "Bootstrap"],
    link: "https://mlabalaba.netlify.app/",
    github: "https://github.com/AphiweMntungwa/mlabalaba",
    image: morabaraba
  },
  {
    title: "Snitcher",
    description: "Snitcher is a social platform where you can attach YouTube Playlists to your posts. Features profile pictures and http chat messaging.",
    tech: ["React", "Redux", "SCSS", "Bootstrap", "Ajax", "Express", "MongoDB", "Cloudinary"],
    link: "https://snitcherapp.herokuapp.com/",
    github: "https://github.com/AphiweMntungwa/Snitcher",
    image: null // No image in original for this one? Original had 'snitcherReact' box but no image import used there? 
    // Wait, original code: <ProjectInfo ... img={snitcher} ... /> was for "Deprecated Snitcher".
    // "Snitcher" (new) didn't have an image prop passed in the original code (Step 27, line 163).
  },
  {
    title: "Portfolio",
    description: "This is my static Portfolio app made of React. Updating this app means writing class components (well, not anymore!).",
    tech: ["React Application", "HTML", "CSS", "Fetch API", "Responsive"],
    link: "",
    github: "https://github.com/AphiweMntungwa/porfolio",
    image: null
  },
  {
    title: "Deprecated Snitcher",
    description: "Snitcher is a platform where you can post thoughts and attach resources like youtube videos on your posts to make a playlist for your post.",
    tech: ["Node.js", "RESTful", "HTML, CSS & VanillaJs", "Bootstrap", "AJAX", "M-V-C pattern", "Moongoose"],
    link: "https://snitcher-server.herokuapp.com",
    github: "https://github.com/AphiweMntungwa/snitcherReact",
    image: snitcher
  }
];

const ProjectCard = ({ project, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        overflow: 'hidden',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      {project.image && (
        <div style={{ height: '200px', overflow: 'hidden' }}>
          <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      )}
      <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#4facfe' }}>{project.title}</h3>
        <p style={{ marginBottom: '1.5rem', color: '#ccc', lineHeight: '1.6' }}>{project.description}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
          {project.tech.map((t, i) => (
            <span key={i} style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', borderRadius: '20px', background: 'rgba(255,255,255,0.1)', color: '#fff' }}>
              {t}
            </span>
          ))}
        </div>

        <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem' }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white', textDecoration: 'none' }}>
              <FaGithub /> Code
            </a>
          )}
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#4facfe', textDecoration: 'none' }}>
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '6rem 2rem', background: '#0a0a0a', color: 'white' }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center', background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Featured Projects
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
