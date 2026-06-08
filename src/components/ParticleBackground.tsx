"use client";

import { useEffect, useRef } from "react";

interface GraphNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
  firing: boolean;
  fireTimer: number;
  connections: number[];
}

interface Spike {
  from: number;
  to: number;
  progress: number;
  speed: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let nodes: GraphNode[] = [];
    let spikes: Spike[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function buildGraph() {
      if (!canvas) return;
      nodes = [];
      spikes = [];

      const count = 70;
      const w = canvas.width;
      const h = canvas.height;

      // Generate nodes with Poisson-disc-like distribution
      for (let i = 0; i < count; i++) {
        let x: number, y: number;
        let attempts = 0;
        do {
          x = w * 0.03 + Math.random() * w * 0.94;
          y = h * 0.05 + Math.random() * h * 0.90;
          attempts++;
        } while (
          attempts < 50 &&
          nodes.some(
            (n) => Math.hypot(n.x - x, n.y - y) < 50
          )
        );

        nodes.push({
          x,
          y,
          vx: (Math.random() - 0.5) * 0.08,
          vy: (Math.random() - 0.5) * 0.08,
          radius: 1.5 + Math.random() * 2.5,
          phase: Math.random() * Math.PI * 2,
          firing: false,
          fireTimer: 0,
          connections: [],
        });
      }

      // Connect nodes within distance
      for (let i = 0; i < nodes.length; i++) {
        const neighbors: number[] = [];
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (dist < 180 && dist > 20) {
            neighbors.push(j);
          }
        }
        // Keep 2-5 connections
        const shuffled = neighbors.sort(() => Math.random() - 0.5);
        nodes[i].connections = shuffled.slice(0, 2 + Math.floor(Math.random() * 4));
      }
    }

    function triggerFire() {
      const idx = Math.floor(Math.random() * nodes.length);
      nodes[idx].firing = true;
      nodes[idx].fireTimer = 0;
    }

    function propagate() {
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (!n.firing) continue;

        for (const connIdx of n.connections) {
          if (!nodes[connIdx]) continue;

          spikes.push({
            from: i,
            to: connIdx,
            progress: 0,
            speed: 0.02 + Math.random() * 0.03,
          });

          if (Math.random() < 0.2) {
            nodes[connIdx].firing = true;
            nodes[connIdx].fireTimer = 0;
          }
        }
      }
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() / 1000;

      // Random firing
      if (Math.random() < 0.015) triggerFire();
      if (Math.random() < 0.01) triggerFire();

      propagate();

      // Update nodes
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 5 || n.x > canvas.width - 5) n.vx *= -1;
        if (n.y < 5 || n.y > canvas.height - 5) n.vy *= -1;

        if (n.firing) {
          n.fireTimer += 0.02;
          if (n.fireTimer > 0.8) {
            n.firing = false;
            n.fireTimer = 0;
          }
        }
      }

      // Draw connections
      for (const n of nodes) {
        for (const connIdx of n.connections) {
          const target = nodes[connIdx];
          if (!target) continue;
          const dx = n.x - target.x;
          const dy = n.y - target.y;
          const dist = Math.hypot(dx, dy);
          const alpha = 0.035 * (1 - dist / 220);

          if (alpha < 0.008) continue;

          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(target.x, target.y);
          ctx.strokeStyle = `rgba(229, 9, 20, ${alpha})`;
          ctx.lineWidth = 0.3 + alpha * 2;
          ctx.stroke();
        }
      }

      // Draw spikes
      for (let i = spikes.length - 1; i >= 0; i--) {
        const s = spikes[i];
        s.progress += s.speed;

        if (s.progress >= 1) {
          spikes.splice(i, 1);
          continue;
        }

        const from = nodes[s.from];
        const to = nodes[s.to];
        if (!from || !to) { spikes.splice(i, 1); continue; }

        const x = from.x + (to.x - from.x) * s.progress;
        const y = from.y + (to.y - from.y) * s.progress;
        const b = Math.sin(s.progress * Math.PI);

        ctx.beginPath();
        ctx.arc(x, y, 1 + b * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229, 9, 20, ${b * 0.65})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 0.5 + b * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b * 0.35})`;
        ctx.fill();
      }

      // Draw nodes
      for (const n of nodes) {
        const firing = n.firing;
        const fp = firing ? Math.sin(n.fireTimer * Math.PI) : 0;
        const idle = Math.sin(time * 0.3 + n.phase) * 0.15 + 0.85;

        const alpha = firing ? 0.1 + fp * 0.4 : 0.04 * idle;
        const r = firing ? n.radius + fp * 4 : n.radius * idle;

        // Outer glow (firing only)
        if (firing) {
          ctx.beginPath();
          ctx.arc(n.x, n.y, r + 6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(229, 9, 20, ${fp * 0.08})`;
          ctx.fill();
        }

        // Body
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = firing
          ? `rgba(255, 255, 255, ${0.25 + fp * 0.5})`
          : `rgba(229, 9, 20, ${alpha})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = firing
          ? `rgba(255, 255, 255, ${0.4 + fp * 0.5})`
          : `rgba(229, 9, 20, ${0.08 * idle})`;
        ctx.fill();
      }

      // Clean spikes
      if (spikes.length > 100) spikes = spikes.slice(-80);

      animationId = requestAnimationFrame(draw);
    }

    resize();
    buildGraph();
    draw();

    const handleResize = () => {
      resize();
      buildGraph();
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
