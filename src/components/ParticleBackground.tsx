"use client";

import { useEffect, useRef } from "react";

interface LayerNeuron {
  x: number;
  y: number;
  layer: number;
  index: number;
  baseY: number;
  phase: number;
  firing: boolean;
  fireTimer: number;
}

interface Synapse {
  fromLayer: number;
  fromIndex: number;
  toLayer: number;
  toIndex: number;
}

interface Spike {
  from: { x: number; y: number };
  to: { x: number; y: number };
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
    let neurons: LayerNeuron[] = [];
    let synapses: Synapse[] = [];
    let spikes: Spike[] = [];

    const LAYER_SIZES = [4, 7, 9, 7, 4];
    const NEURON_RADIUS = 2.5;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function buildNetwork() {
      if (!canvas) return;
      neurons = [];
      synapses = [];

      const totalLayers = LAYER_SIZES.length;
      const margin = canvas.width * 0.08;
      const layerSpacing = (canvas.width - margin * 2) / (totalLayers - 1);
      const centerY = canvas.height * 0.5;
      const spread = canvas.height * 0.22;

      for (let l = 0; l < totalLayers; l++) {
        const count = LAYER_SIZES[l];
        const layerX = margin + l * layerSpacing;
        const verticalSpread = spread * (0.6 + (count / 9) * 0.4);
        const startY = centerY - (verticalSpread * (count - 1)) / 2;

        for (let i = 0; i < count; i++) {
          neurons.push({
            x: layerX + (Math.random() - 0.5) * 6,
            y: startY + i * verticalSpread + (Math.random() - 0.5) * 4,
            layer: l,
            index: i,
            baseY: startY + i * verticalSpread,
            phase: Math.random() * Math.PI * 2,
            firing: false,
            fireTimer: 0,
          });
        }
      }

      // Build synapses: connect each neuron to ~60% of the next layer
      for (let l = 0; l < totalLayers - 1; l++) {
        const currentLayer = neurons.filter((n) => n.layer === l);
        const nextLayer = neurons.filter((n) => n.layer === l + 1);

        for (const from of currentLayer) {
          for (const to of nextLayer) {
            if (Math.random() < 0.55) {
              synapses.push({
                fromLayer: l,
                fromIndex: from.index,
                toLayer: l + 1,
                toIndex: to.index,
              });
            }
          }
        }
      }
    }

    function triggerRandomFire() {
      const inputNeurons = neurons.filter((n) => n.layer === 0);
      if (inputNeurons.length === 0) return;

      const count = 1 + Math.floor(Math.random() * 2);
      for (let c = 0; c < count; c++) {
        const idx = Math.floor(Math.random() * inputNeurons.length);
        inputNeurons[idx].firing = true;
        inputNeurons[idx].fireTimer = 0;
      }
    }

    function propagateFiring() {
      for (let l = 0; l < LAYER_SIZES.length - 1; l++) {
        const layerNeurons = neurons.filter((n) => n.layer === l && n.firing);
        const nextLayer = neurons.filter((n) => n.layer === l + 1);

        for (const from of layerNeurons) {
          const conns = synapses.filter(
            (s) => s.fromLayer === l && s.fromIndex === from.index
          );
          for (const conn of conns) {
            const to = nextLayer.find((n) => n.index === conn.toIndex);
            if (!to) continue;

            spikes.push({
              from: { x: from.x, y: from.y },
              to: { x: to.x, y: to.y },
              progress: 0,
              speed: 0.015 + Math.random() * 0.025,
            });

            if (Math.random() < 0.3) {
              to.firing = true;
              to.fireTimer = 0;
            }
          }
        }
      }
    }

    function draw() {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() / 1000;

      // Trigger firing periodically
      if (Math.random() < 0.02) triggerRandomFire();

      // Propagate
      propagateFiring();

      // Update neuron states
      for (const n of neurons) {
        if (n.firing) {
          n.fireTimer += 0.02;
          if (n.fireTimer > 1) {
            n.firing = false;
            n.fireTimer = 0;
          }
        }
        n.y += (n.baseY - n.y) * 0.005 + Math.sin(time * 0.3 + n.phase) * 0.08;
      }

      // Draw synapses
      for (const s of synapses) {
        const from = neurons.find((n) => n.layer === s.fromLayer && n.index === s.fromIndex);
        const to = neurons.find((n) => n.layer === s.toLayer && n.index === s.toIndex);
        if (!from || !to) continue;

        const dx = from.x - to.x;
        const dy = from.y - to.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const alpha = 0.025 * (1 - Math.min(dist / 300, 1));

        if (alpha < 0.005) continue;

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = `rgba(229, 9, 20, ${alpha})`;
        ctx.lineWidth = 0.4;
        ctx.stroke();
      }

      // Draw spikes
      for (let i = spikes.length - 1; i >= 0; i--) {
        const spike = spikes[i];
        spike.progress += spike.speed;

        if (spike.progress >= 1) {
          spikes.splice(i, 1);
          continue;
        }

        const x = spike.from.x + (spike.to.x - spike.from.x) * spike.progress;
        const y = spike.from.y + (spike.to.y - spike.from.y) * spike.progress;
        const brightness = Math.sin(spike.progress * Math.PI);

        ctx.beginPath();
        ctx.arc(x, y, 1 + brightness * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229, 9, 20, ${brightness * 0.6})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, 0.6 + brightness * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${brightness * 0.3})`;
        ctx.fill();
      }

      // Draw neurons
      for (const n of neurons) {
        const isFiring = n.firing;
        const firePhase = isFiring ? Math.sin(n.fireTimer * Math.PI) : 0;
        const idlePulse = Math.sin(time * 0.5 + n.phase) * 0.15 + 0.85;

        const alpha = isFiring
          ? 0.15 + firePhase * 0.35
          : 0.06 * idlePulse;
        const radius = isFiring
          ? NEURON_RADIUS + firePhase * 3
          : NEURON_RADIUS * idlePulse;

        // Outer glow
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius + 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(229, 9, 20, ${alpha * 0.3})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = isFiring
          ? `rgba(255, 255, 255, ${0.2 + firePhase * 0.4})`
          : `rgba(229, 9, 20, ${0.08 * idlePulse})`;
        ctx.fill();

        // Bright center
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = isFiring
          ? `rgba(255, 255, 255, ${0.3 + firePhase * 0.5})`
          : `rgba(229, 9, 20, ${0.12 * idlePulse})`;
        ctx.fill();
      }

      // Draw layer labels
      const labels = ["Input", "Hidden 1", "Hidden 2", "Hidden 3", "Output"];
      const margin = canvas.width * 0.08;
      const totalLayers = LAYER_SIZES.length;
      const layerSpacing = (canvas.width - margin * 2) / (totalLayers - 1);

      ctx.font = "10px system-ui";
      ctx.textAlign = "center";
      for (let l = 0; l < totalLayers; l++) {
        const layerX = margin + l * layerSpacing;
        const labelAlpha = 0.15 + Math.sin(time * 0.2 + l * 0.5) * 0.05;
        ctx.fillStyle = `rgba(100, 100, 130, ${labelAlpha})`;
        ctx.fillText(labels[l], layerX, canvas.height * 0.85);
      }

      // Clean up
      if (spikes.length > 80) spikes = spikes.slice(-60);

      animationId = requestAnimationFrame(draw);
    }

    resize();
    buildNetwork();
    draw();

    const handleResize = () => {
      resize();
      buildNetwork();
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
