"use client";

import { useEffect, useRef } from "react";

interface Neuron {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
  phase: number;
  frequency: number;
}

interface Signal {
  from: number;
  to: number;
  progress: number;
  speed: number;
  path: { x: number; y: number }[];
}

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
    let neurons: Neuron[] = [];
    let signals: Signal[] = [];
    let time = 0;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticles() {
      if (!canvas) return;
      const count = Math.min(40, Math.floor((canvas.width * canvas.height) / 30000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.3 + 0.1,
        isRed: Math.random() < 0.08,
      }));
    }

    function createNeuralNetwork() {
      if (!canvas) return;
      const neuronCount = 18;
      const cx = canvas.width * 0.85;
      const cy = canvas.height * 0.5;
      const spreadX = canvas.width * 0.12;
      const spreadY = canvas.height * 0.25;

      neurons = Array.from({ length: neuronCount }, (_, i) => {
        const angle = (i / neuronCount) * Math.PI * 2;
        const radius = Math.random() * spreadY * 0.5 + spreadY * 0.15;
        return {
          x: cx + Math.cos(angle) * radius * (0.5 + Math.random() * 0.5) + (Math.random() - 0.5) * spreadX * 0.5,
          y: cy + Math.sin(angle) * radius * (0.3 + Math.random() * 0.7) + (Math.random() - 0.5) * spreadY * 0.3,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          connections: [],
          phase: Math.random() * Math.PI * 2,
          frequency: 0.3 + Math.random() * 0.7,
        };
      });

      for (let i = 0; i < neurons.length; i++) {
        const connCount = 2 + Math.floor(Math.random() * 4);
        for (let j = 0; j < connCount; j++) {
          let target: number;
          do {
            target = Math.floor(Math.random() * neurons.length);
          } while (target === i || neurons[i].connections.includes(target));
          neurons[i].connections.push(target);
        }
      }
    }

    function spawnSignal() {
      if (neurons.length < 3) return;
      const from = Math.floor(Math.random() * neurons.length);
      if (neurons[from].connections.length === 0) return;
      const to = neurons[from].connections[Math.floor(Math.random() * neurons[from].connections.length)];
      if (!neurons[to]) return;

      const path: { x: number; y: number }[] = [];
      const steps = 5 + Math.floor(Math.random() * 8);
      for (let s = 0; s <= steps; s++) {
        const t = s / steps;
        const x = neurons[from].x + (neurons[to].x - neurons[from].x) * t + (Math.random() - 0.5) * 20;
        const y = neurons[from].y + (neurons[to].y - neurons[from].y) * t + (Math.random() - 0.5) * 20;
        path.push({ x, y });
      }

      signals.push({
        from,
        to,
        progress: 0,
        speed: 0.008 + Math.random() * 0.012,
        path,
      });

      if (signals.length > 12) signals.shift();
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time++;

      // Spawn signals periodically
      if (time % 30 === 0) spawnSignal();
      if (time % 45 === 0) spawnSignal();

      // --- Green matrix particles (keep original) ---
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
      }

      // Particle connections (green/red lines)
      for (const p of particles) {
        for (const other of particles) {
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(other.x, other.y);
            const fade = 0.02 * (1 - dist / 160);
            if (p.isRed || other.isRed) {
              ctx.strokeStyle = `rgba(229, 9, 20, ${fade * 1.5})`;
            } else {
              ctx.strokeStyle = `rgba(0, 255, 136, ${fade})`;
            }
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      // --- Neural network: draw connections ---
      for (const neuron of neurons) {
        const pulse = Math.sin(time * 0.02 * neuron.frequency + neuron.phase) * 0.3 + 0.7;
        for (const connIdx of neuron.connections) {
          const target = neurons[connIdx];
          if (!target) continue;
          const dx = neuron.x - target.x;
          const dy = neuron.y - target.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const alpha = 0.06 * (1 - dist / 500);
          if (alpha > 0.01) {
            ctx.beginPath();
            ctx.moveTo(neuron.x, neuron.y);
            ctx.lineTo(target.x, target.y);
            ctx.strokeStyle = `rgba(229, 9, 20, ${alpha * pulse})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // --- Neural network: draw neurons ---
      for (const neuron of neurons) {
        neuron.x += neuron.vx;
        neuron.y += neuron.vy;
        if (neuron.x < 0 || neuron.x > canvas.width) neuron.vx *= -1;
        if (neuron.y < 0 || neuron.y > canvas.height) neuron.vy *= -1;

        const pulse = Math.sin(time * 0.02 * neuron.frequency + neuron.phase) * 0.3 + 0.7;

        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, 1.2 + pulse * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229, 9, 20, ${0.15 * pulse})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, 0.6 + pulse * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229, 9, 20, ${0.35 * pulse})`;
        ctx.fill();
      }

      // --- Neural network: draw signals ---
      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        sig.progress += sig.speed;
        if (sig.progress >= 1) {
          signals.splice(s, 1);
          continue;
        }

        const idx = sig.progress * (sig.path.length - 1);
        const i = Math.floor(idx);
        const t = idx - i;
        const next = Math.min(i + 1, sig.path.length - 1);

        const x = sig.path[i].x + (sig.path[next].x - sig.path[i].x) * t;
        const y = sig.path[i].y + (sig.path[next].y - sig.path[i].y) * t;

        const brightness = Math.sin(sig.progress * Math.PI) * 0.8 + 0.2;

        ctx.beginPath();
        ctx.arc(x, y, 1.5 + brightness * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229, 9, 20, ${brightness * 0.7})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 0.8 + brightness * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 50, 60, ${brightness * 0.5})`;
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    createNeuralNetwork();
    draw();

    const handleResize = () => {
      resize();
      createParticles();
      createNeuralNetwork();
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
