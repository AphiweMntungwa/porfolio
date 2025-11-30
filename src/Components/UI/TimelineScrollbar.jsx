import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const TimelineScrollbar = () => {
    const { scrollYProgress } = useScroll();
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: '10px',
                background: 'rgba(255, 255, 255, 0.1)',
                transformOrigin: '0%',
                zIndex: 1000
            }}
        >
            <motion.div
                style={{
                    scaleY,
                    transformOrigin: 'top',
                    background: 'linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%)',
                    width: '100%',
                    height: '100%'
                }}
            />
        </motion.div>
    );
};

export default TimelineScrollbar;
