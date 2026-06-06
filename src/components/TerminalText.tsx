"use client";

import { useState, useEffect } from "react";

export default function TerminalText({ lines, className = "" }: { lines: string[]; className?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`font-mono text-xs leading-relaxed ${className}`}>
      {lines.map((line, i) => (
        <p
          key={i}
          className={`text-muted-foreground ${visible ? "opacity-100" : "opacity-0"}`}
          style={{
            transition: `opacity 0.3s ease ${i * 0.15}s, transform 0.3s ease ${i * 0.15}s`,
            transform: visible ? "translateX(0)" : "translateX(-8px)",
          }}
        >
          <span className="text-v4-red">$</span> {line}
        </p>
      ))}
    </div>
  );
}
