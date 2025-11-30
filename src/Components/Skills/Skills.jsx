import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiGit, SiGithub, SiGitlab,
    SiAndroid, SiMysql, SiNodedotjs, SiNpm,
    SiPython, SiFlask, SiPandas, SiScikitlearn, SiNumpy, SiJson, SiMongodb,
    SiDocker, SiKubernetes
} from 'react-icons/si';
import { FaDatabase, FaServer, FaJava } from 'react-icons/fa';
import { DiDotnet } from 'react-icons/di';
import { TbBrandCSharp } from 'react-icons/tb';

const skillsData = [
    // { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    { name: '.NET Core', icon: DiDotnet, color: '#512BD4' },
    // { name: 'C#', icon: TbBrandCSharp, color: '#239120' },
    { name: 'Flask', icon: SiFlask, color: '#000000' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
    { name: 'SQL', icon: SiMysql, color: '#4479A1' },
    { name: 'Docker', icon: SiDocker, color: '#2496ED' },
    { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
    // { name: 'Java', icon: FaJava, color: '#007396' },
    // { name: 'Android SDK', icon: SiAndroid, color: '#3DDC84' },
    // { name: 'Python', icon: SiPython, color: '#3776AB' },
    { name: 'Pandas', icon: SiPandas, color: '#150458' },
    { name: 'NumPy', icon: SiNumpy, color: '#013243' },
    { name: 'Scikit-Learn', icon: SiScikitlearn, color: '#F7931E' },
    { name: 'Git', icon: SiGit, color: '#F05032' },
    // { name: 'GitHub', icon: SiGithub, color: '#181717' },
    // { name: 'GitLab', icon: SiGitlab, color: '#FC6D26' },
    // { name: 'NPM', icon: SiNpm, color: '#CB3837' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    // { name: 'REST API', icon: FaServer, color: '#ccc' },
    // { name: 'JSON & XML', icon: SiJson, color: '#ccc' },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
};

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="skills" style={{ minHeight: '100vh', padding: '4rem 2rem', background: '#111', color: 'white' }}>
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
                style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center', background: 'linear-gradient(to right, #f83600 0%, #f9d423 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
                Skills & Technologies
            </motion.h2>

            <motion.div
                ref={ref}
                variants={container}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}
            >
                {skillsData.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ scale: 1.1, y: -5 }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.05)',
                            borderRadius: '15px',
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '120px',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                    >
                        <skill.icon size={40} color={skill.color} style={{ marginBottom: '1rem' }} />
                        <span style={{ fontSize: '0.9rem', textAlign: 'center' }}>{skill.name}</span>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Skills;
