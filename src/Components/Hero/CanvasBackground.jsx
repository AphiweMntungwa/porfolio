import React, { useRef, useEffect } from 'react';

const CanvasBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Star/Particle System
    const stars = [];
    const starCount = 100;

    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5;
        this.opacity = Math.random();
        this.speed = Math.random() * 0.2;
      }

      update() {
        this.y -= this.speed;
        if (this.y < 0) this.y = canvas.height;
        this.opacity = Math.sin(Date.now() * 0.001 * this.speed * 10) * 0.5 + 0.5;
      }

      draw(ctx) {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    // Light Trail System
    let mouseX = 0;
    let mouseY = 0;
    const trail = [];
    const maxTrailLength = 50;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      // Add point to trail
      trail.push({
        x: mouseX,
        y: mouseY,
        age: 1.0, // 1.0 = fresh, 0.0 = dead
        vx: (Math.random() - 0.5) * 2, // Slight drift
        vy: (Math.random() - 0.5) * 2
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      // Fade effect for trails
      ctx.fillStyle = 'rgba(10, 10, 10, 0.2)'; // Low opacity clear for trails
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Stars
      stars.forEach(star => {
        star.update();
        star.draw(ctx);
      });

      // Update and Draw Trail
      for (let i = trail.length - 1; i >= 0; i--) {
        const point = trail[i];
        point.age -= 0.02; // Decay rate
        point.x += point.vx;
        point.y += point.vy;

        if (point.age <= 0) {
          trail.splice(i, 1);
          continue;
        }

        const size = point.age * 10; // Shrink as it ages

        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgba(0, 242, 254, ${point.age})`;

        ctx.fillStyle = `rgba(255, 255, 255, ${point.age})`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, size / 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0; // Reset
      }

      // Connect points with a glowing line
      if (trail.length > 1) {
        ctx.beginPath();
        ctx.moveTo(trail[trail.length - 1].x, trail[trail.length - 1].y);

        for (let i = trail.length - 2; i >= 0; i--) {
          // ctx.lineTo(trail[i].x, trail[i].y);
          const xc = (trail[i].x + trail[i + 1].x) / 2;
          const yc = (trail[i].y + trail[i + 1].y) / 2;
          ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        }

        ctx.strokeStyle = `rgba(0, 242, 254, 0.5)`;
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#00f2fe';
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, background: '#0a0a0a' }} />;
};

export default CanvasBackground;
