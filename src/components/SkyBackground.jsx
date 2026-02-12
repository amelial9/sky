import { useEffect, useMemo, useRef } from 'react';
import './SkyBackground.css';

const STAR_COUNT = 140;
const CONNECT_DISTANCE = 140;

export default function SkyBackground() {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  const stars = useMemo(
    () =>
      Array.from({ length: STAR_COUNT }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 2 + Math.random() * 4,
      })),
    [],
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', onMouseMove, { passive: true });
    resize();

    let t = 0;

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      t += 0.03;
      const { x: mx, y: my } = mouseRef.current;

      for (const star of stars) {
        const sx = (star.left / 100) * w;
        const sy = (star.top / 100) * h;

        const dx = sx - mx;
        const dy = sy - my;
        const d = Math.sqrt(dx * dx + dy * dy);

        if (d < CONNECT_DISTANCE) {
          const pulse = (Math.sin(t - d * 0.05) + 1) / 2;
          ctx.strokeStyle = `rgba(235,245,255,${0.15 + pulse * 0.35})`;
          ctx.lineWidth = 0.6 + pulse * 1.2;

          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.lineTo(mx, my);
          ctx.stroke();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, [stars]);

  return (
    <div className="sky-bg" aria-hidden="true">
      <div className="sky-bg__stars">
        {stars.map((s, i) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className="sky-bg__star"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="sky-bg__aurora sky-bg__aurora--one" />
      <div className="sky-bg__aurora sky-bg__aurora--two" />

      <div className="sky-bg__cloud sky-bg__cloud--1" />
      <div className="sky-bg__cloud sky-bg__cloud--2" />
      <div className="sky-bg__cloud sky-bg__cloud--3" />
      <div className="sky-bg__cloud sky-bg__cloud--4" />

      <div className="sky-bg__fog" />
      <div className="sky-bg__horizon" />

      <canvas ref={canvasRef} className="sky-bg__constellation" />
    </div>
  );
}

