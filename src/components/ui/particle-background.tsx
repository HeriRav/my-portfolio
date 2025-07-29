// ParticleBackground.tsx
import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | number>(null);
  const [, setParticles] = useState<Particle[]>([]);

  // Palette de couleurs inspirée de tsParticles
  const colors = [
    "#ffffff", // Blanc
    "#8a2be2", // Cyan clair
    "#b98eff", // Bleu cyan
    "#2BE28A", // Bleu clair
    "#1B4F08", // Bleu moyen
    "#eaeaea", // Blanc bleuté
  ];

  const createParticle = (canvas: HTMLCanvasElement): Particle => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.8,
    vy: (Math.random() - 0.5) * 0.8,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.7 + 0.3,
    color: colors[Math.floor(Math.random() * colors.length)],
  });

  const initParticles = (canvas: HTMLCanvasElement) => {
    const particleCount = Math.floor((canvas.width * canvas.height) / 12000);
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push(createParticle(canvas));
    }

    setParticles(newParticles);
  };

  const updateParticles = (
    canvas: HTMLCanvasElement,
    particles: Particle[]
  ) => {
    return particles.map((particle) => {
      let newX = particle.x + particle.vx;
      let newY = particle.y + particle.vy;

      // Téléportation aux bords opposés (style tsParticles)
      if (newX < 0) newX = canvas.width;
      if (newX > canvas.width) newX = 0;
      if (newY < 0) newY = canvas.height;
      if (newY > canvas.height) newY = 0;

      return {
        ...particle,
        x: newX,
        y: newY,
      };
    });
  };

  const drawParticles = (
    ctx: CanvasRenderingContext2D,
    particles: Particle[]
  ) => {
    // Effacer le canvas
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Dessiner les connexions d'abord (en arrière-plan)
    particles.forEach((p1, i) => {
      particles.slice(i + 1).forEach((p2) => {
        const distance = Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
        if (distance < 120) {
          ctx.save();
          const alpha = ((120 - distance) / 120) * 0.3;
          ctx.globalAlpha = alpha;

          // Gradient pour les lignes de connexion
          const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
          gradient.addColorStop(0, p1.color);
          gradient.addColorStop(1, p2.color);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
          ctx.restore();
        }
      });
    });

    // Dessiner les particules
    particles.forEach((particle) => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;

      // Particule principale
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();

      // Effet de lueur externe
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = 15;
      ctx.globalAlpha = particle.opacity * 0.3;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Noyau brillant au centre
      ctx.shadowBlur = 0;
      ctx.globalAlpha = particle.opacity * 0.8;
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    });
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    setParticles((prevParticles) => {
      const updatedParticles = updateParticles(canvas, prevParticles);
      drawParticles(ctx, updatedParticles);
      return updatedParticles;
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleResize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const container = canvas.parentElement;
    if (!container) return;

    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
    initParticles(canvas);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setParticles((prevParticles) =>
      prevParticles.map((particle) => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx ** 2 + dy ** 2);

        if (distance < 100) {
          const force = (100 - distance) / 100;
          return {
            ...particle,
            vx: particle.vx + (dx / distance) * force * 0.02,
            vy: particle.vy + (dy / distance) * force * 0.02,
            opacity: Math.min(1, particle.opacity + force * 0.2),
          };
        }
        return particle;
      })
    );
  };

  const handleClick = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Ajouter des particules temporaires au clic
    const newParticles: Particle[] = [];
    for (let i = 0; i < 5; i++) {
      newParticles.push({
        x: clickX + (Math.random() - 0.5) * 20,
        y: clickY + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        size: Math.random() * 3 + 2,
        opacity: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    setParticles((prev) => [...prev, ...newParticles]);

    // Supprimer les particules ajoutées après 2 secondes
    setTimeout(() => {
      setParticles((prev) => prev.slice(0, -5));
    }, 2000);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    handleResize();
    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: "auto" }}
    />
  );
};

export default ParticleBackground;
