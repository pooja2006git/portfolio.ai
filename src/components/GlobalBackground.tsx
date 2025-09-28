import React from 'react';

const GlobalBackground: React.FC = () => {
  const glowRef = React.useRef<HTMLDivElement>(null);
  const rafRef = React.useRef<number | null>(null);
  const lastPos = React.useRef({ x: 0, y: 0, visible: false });

  React.useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const edgeThreshold = 140; // only show glow near edges
      const w = window.innerWidth;
      const h = window.innerHeight;
      const nearEdge = x < edgeThreshold || y < edgeThreshold || w - x < edgeThreshold || h - y < edgeThreshold;
      lastPos.current = { x, y, visible: nearEdge };

      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(() => {
          rafRef.current = null;
          const glow = glowRef.current;
          if (!glow) return;
          glow.style.transform = `translate(${lastPos.current.x - 250}px, ${lastPos.current.y - 250}px)`;
          glow.style.opacity = lastPos.current.visible ? '0.4' : '0';
        });
      }
    };

    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Animated geometric shapes - corners */}
      <div className="absolute top-[-80px] left-[-80px] w-64 h-64 opacity-20">
        <div className="w-full h-full border-2 border-cyan-400/50 rounded-xl animate-[spin_30s_linear_infinite]"></div>
      </div>
      <div className="absolute bottom-[-100px] right-[-100px] w-80 h-80 opacity-15">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-violet-500/30 to-fuchsia-400/20 animate-[pulse_4s_ease-in-out_infinite]"></div>
      </div>

      {/* Cursor-follow subtle glow near edges only */}
      <div
        ref={glowRef}
        className="absolute w-[500px] h-[500px] rounded-full opacity-0 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(closest-side, rgba(56,189,248,0.20), rgba(99,102,241,0.12) 45%, rgba(0,0,0,0) 70%)'
        }}
      />

      {/* Extra faint side glows to add depth, kept away from center */}
      <div className="absolute left-[-120px] top-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-500/5 blur-3xl"></div>
      <div className="absolute right-[-140px] bottom-1/3 w-[28rem] h-[28rem] rounded-full bg-gradient-to-tr from-purple-500/10 to-rose-400/5 blur-3xl"></div>
    </div>
  );
};

export default GlobalBackground;


