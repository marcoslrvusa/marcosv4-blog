"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; isRed: boolean;
    }[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticles() {
      if (!canvas) return;
      const count = Math.min(50, Math.floor((canvas.width * canvas.height) / 25000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2.5 + 1,
        alpha: Math.random() * 0.4 + 0.15,
        isRed: Math.random() < 0.08,
      }));
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        const color = p.isRed
          ? `rgba(229, 9, 20, ${p.alpha * 0.5})`
          : `rgba(0, 255, 136, ${p.alpha * 0.35})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();

        for (const other of particles) {
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            const fade = 0.025 * (1 - dist / 160);
            if (p.isRed || other.isRed) {
              ctx.strokeStyle = `rgba(229, 9, 20, ${fade * 1.5})`;
            } else {
              ctx.strokeStyle = `rgba(0, 255, 136, ${fade})`;
            }
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();

    const handleResize = () => {
      resize();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
