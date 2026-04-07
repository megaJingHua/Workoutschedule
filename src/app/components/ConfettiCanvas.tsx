import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';

export interface ConfettiCanvasHandle {
  launchConfetti: (sourceEl?: HTMLElement | null, big?: boolean) => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
  life: number;
  decay: number;
  rotation: number;
  rotSpeed: number;
  shape: 'rect' | 'circle';
}

export const ConfettiCanvas = forwardRef<ConfettiCanvasHandle>((_, ref) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>();

  useImperativeHandle(ref, () => ({
    launchConfetti: (sourceEl?: HTMLElement | null, big = false) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const colors = ['#D4603A', '#C4A882', '#7A8F5A', '#5A7A8F', '#C17F5A', '#FFD700', '#FF6B6B', '#4ECDC4'];
      const count = big ? 180 : 60;
      const particles: Particle[] = [];

      let originX = canvas.width / 2;
      let originY = canvas.height / 2;

      if (sourceEl) {
        const r = sourceEl.getBoundingClientRect();
        originX = r.left + r.width / 2;
        originY = r.top + r.height / 2;
      }

      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = big ? (3 + Math.random() * 8) : (2 + Math.random() * 5);
        particles.push({
          x: originX,
          y: originY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - (big ? 4 : 2),
          color: colors[Math.floor(Math.random() * colors.length)],
          size: big ? (4 + Math.random() * 6) : (3 + Math.random() * 4),
          life: 1,
          decay: 0.015 + Math.random() * 0.015,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.2,
          shape: Math.random() > 0.5 ? 'rect' : 'circle'
        });
      }

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;

        for (const p of particles) {
          if (p.life <= 0) continue;
          alive = true;

          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.18;
          p.vx *= 0.99;
          p.life -= p.decay;
          p.rotation += p.rotSpeed;

          ctx.save();
          ctx.globalAlpha = Math.max(0, p.life);
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);
          ctx.fillStyle = p.color;

          if (p.shape === 'rect') {
            ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
          } else {
            ctx.beginPath();
            ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
            ctx.fill();
          }

          ctx.restore();
        }

        if (alive) {
          frameRef.current = requestAnimationFrame(animate);
        } else {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      };

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      animate();
    }
  }));

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
    />
  );
});

ConfettiCanvas.displayName = 'ConfettiCanvas';
