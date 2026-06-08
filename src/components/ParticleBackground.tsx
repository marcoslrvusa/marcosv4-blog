"use client";

import { useEffect, useRef } from "react";

interface GraphNode {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
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

const CONNECT_DIST = 200;
const DRAW_DIST = 300;

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

      const w = canvas.width;
      const h = canvas.height;
      const margin = 60;

      // Place nodes in clusters for better visual connectivity
      const clusterCenters = [
        { x: w * 0.25, y: h * 0.35 },
        { x: w * 0.5, y: h * 0.25 },
        { x: w * 0.75, y: h * 0.35 },
        { x: w * 0.3, y: h * 0.6 },
        { x: w * 0.6, y: h * 0.65 },
        { x: w * 0.5, y: h * 0.45 },
      ];
      const clusterRadius = Math.min(w, h) * 0.12;
      const nodesPerCluster = 11;

      for (const center of clusterCenters) {
        for (let i = 0; i < nodesPerCluster; i++) {
          const angle = Math.random() * Math.PI * 2;
          const r = Math.random() * clusterRadius;
          const x = center.x + Math.cos(angle) * r;
          const y = center.y + Math.sin(angle) * r;

          if (x < margin || x > w - margin || y < margin || y > h - margin) continue;

          nodes.push({
            x, y,
            baseX: x, baseY: y,
            vx: (Math.random() - 0.5) * 0.06,
            vy: (Math.random() - 0.5) * 0.06,
            radius: 1.2 + Math.random() * 2.8,
            phase: Math.random() * Math.PI * 2,
            firing: false,
            fireTimer: 0,
            connections: [],
          });
        }
      }

      // Connect nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        const neighbors: { idx: number; dist: number }[] = [];
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          const dist = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (dist < CONNECT_DIST) {
            neighbors.push({ idx: j, dist });
          }
        }
        neighbors.sort((a, b) => a.dist - b.dist);
        nodes[i].connections = neighbors.slice(0, 3 + Math.floor(Math.random() * 3)).map((n) => n.idx);
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
            speed: 0.015 + Math.random() * 0.025,
          });

          if (Math.random() < 0.25) {
            nodes[connIdx].firing = true;
            nodes[connIdx].fireTimer = 0;
          }
        }
        n.firing = false;
      }
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() / 1000;

      // Periodic firing
      if (Math.random() < 0.02) triggerFire();

      propagate();

      // Update node positions — drift with elastic pull toward base
      for (const n of nodes) {
        n.x += n.vx + (n.baseX - n.x) * 0.0008;
        n.y += n.vy + (n.baseY - n.y) * 0.0008;
        n.vx *= 0.99;
        n.vy *= 0.99;

        if (n.x < 10 || n.x > canvas.width - 10) { n.vx *= -0.5; }
        if (n.y < 10 || n.y > canvas.height - 10) { n.vy *= -0.5; }

        if (n.firing) {
          n.fireTimer += 0.025;
          if (n.fireTimer > 1) {
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
          if (dist > DRAW_DIST) continue;

          const alpha = 0.06 * (1 - dist / DRAW_DIST);

          ctx.beginPath();
          ctx.moveTo(n.x, n.y);
          ctx.lineTo(target.x, target.y);
          ctx.strokeStyle = `rgba(229, 9, 20, ${alpha})`;
          ctx.lineWidth = 0.5 + alpha * 3;
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
        ctx.arc(x, y, 0.8 + b * 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229, 9, 20, ${b * 0.8})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 0.4 + b * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${b * 0.4})`;
        ctx.fill();
      }

      // Draw nodes
      for (const n of nodes) {
        const fp = n.firing ? Math.sin(n.fireTimer * Math.PI) : 0;
        const idle = Math.sin(time * 0.4 + n.phase) * 0.15 + 0.85;

        const alpha = n.firing ? 0.2 + fp * 0.5 : 0.06 * idle;
        const r = n.firing ? n.radius + fp * 5 : n.radius * idle;

        // Glow
        ctx.beginPath();
        ctx.arc(n.x, n.y, r + 4, 0, Math.PI * 2);
        ctx.fillStyle = n.firing
          ? `rgba(229, 9, 20, ${fp * 0.1})`
          : `rgba(229, 9, 20, 0.01)`;
        ctx.fill();

        // Body
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = n.firing
          ? `rgba(255, 255, 255, ${0.3 + fp * 0.6})`
          : `rgba(229, 9, 20, ${alpha})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = n.firing
          ? `rgba(255, 255, 255, ${0.5 + fp * 0.5})`
          : `rgba(229, 9, 20, ${0.1 * idle})`;
        ctx.fill();
      }

      if (spikes.length > 120) spikes = spikes.slice(-80);

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
