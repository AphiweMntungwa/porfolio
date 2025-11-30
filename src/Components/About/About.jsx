import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profileImg from '../../Assets/aphiwe-mntungwa.jpg'; // Using the found image

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const birthDate = new Date('2000-12-20');
  const ageDiffMs = Date.now() - birthDate.getTime();
  const ageDate = new Date(ageDiffMs);
  const age = Math.abs(ageDate.getUTCFullYear() - 1970);

  return (
    <section id="about" style={{ padding: '6rem 2rem', background: '#111', color: 'white', display: 'flex', justifyContent: 'center' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <h2 style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center', background: 'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          About Me
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', md: { flexDirection: 'row' }, alignItems: 'center', gap: '3rem', width: '100%' }}>
          <div style={{ flexShrink: 0 }}>
            <img
              src={profileImg}
              alt="Aphiwe Mntungwa"
              style={{
                width: '250px',
                height: '250px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid #38f9d7',
                boxShadow: '0 0 20px rgba(56, 249, 215, 0.3)'
              }}
            />
            <p style={{ textAlign: 'center', marginTop: '1rem', color: '#888', fontSize: '0.9rem' }}>
              Age: {age}
            </p>
          </div>

          <div style={{ width: '100%' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem', color: '#ddd' }}>
              Welcome to my about page. I’ve always been drawn to how ideas work and how people make decisions, which naturally led me to think deeply about learning, information structure, and system design. This perspective shapes how I work: it makes me organized, adaptive, and effective at navigating complex concepts. Whether technical or personal, I approach challenges with clear reasoning, curiosity, and a commitment to understanding things at their core.
            </p>
            <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '2rem 0' }} />
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#ddd' }}>
              I’m a full-stack developer with a Bachelors Degree in Information and Communications Technology. I have a strong proficiency in the React ecosystem, Next.js, Node.js, .NET Core (Web API & MVC), SQL, and a range of modern development tools. I’ve deployed multiple applications, several of which are actively used in real environments.
            </p>

            <motion.a
              href="/cv.pdf"
              download="Aphiwe_Mntungwa_CV.pdf"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(56, 249, 215, 0.1)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'inline-block',
                marginTop: '2rem',
                padding: '1rem 2rem',
                border: '2px solid #38f9d7',
                borderRadius: '50px',
                color: '#38f9d7',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                transition: 'all 0.3s ease'
              }}
            >
              Download CV
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
