import React from 'react';
import { motion } from 'framer-motion';
import CanvasBackground from './CanvasBackground';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope, FaPhone } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="home" style={{ position: 'relative', height: '100vh', width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
            <CanvasBackground />

            <div style={{ zIndex: 1, textAlign: 'center', padding: '2rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem', background: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Aphiwe Mntungwa
                    </h1>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#ccc' }}>
                        Full Stack Developer & Software Engineer
                    </h2>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', fontSize: '2rem' }}>
                        <motion.a whileHover={{ scale: 1.2, color: '#4facfe' }} href="https://github.com/AphiweMntungwa" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}><FaGithub /></motion.a>
                        <motion.a whileHover={{ scale: 1.2, color: '#0077b5' }} href="https://www.linkedin.com/in/aphiwe-mntungwa-a0b412218/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}><FaLinkedin /></motion.a>
                        <motion.a whileHover={{ scale: 1.2, color: '#1877f2' }} href="https://facebook.com/AphiweMntungwa" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}><FaFacebook /></motion.a>
                        <motion.a whileHover={{ scale: 1.2, color: '#ea4335' }} href="mailto:aphiwemntungwa66@gmail.com" style={{ color: '#ffffff' }}><FaEnvelope /></motion.a>
                        <motion.a whileHover={{ scale: 1.2, color: '#34a853' }} href="tel:0607759253" style={{ color: '#ffffff' }}><FaPhone /></motion.a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
            >
                <div style={{ width: '30px', height: '50px', border: '2px solid white', borderRadius: '15px', position: 'relative' }}>
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        style={{ width: '6px', height: '6px', background: 'white', borderRadius: '50%', position: 'absolute', left: '50%', top: '10px', marginLeft: '-3px' }}
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
