import { useState, useEffect } from 'react';
import { DayTheme } from '../types/valentine';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { dayImages } from '../data/images';

interface HeroSectionProps {
  theme: DayTheme;
}

// Local images from /PICs/p1.jpg → /PICs/p23.jpg
const floatingImages = Array.from({ length: 23 }, (_, i) => `/PICs/p${i + 1}.jpg`);

interface FloatingImageData {
  src: string;
  top: number;
  left: number;
  width: number;
  animationDelay: number;
  animationDuration: number;
}

export function HeroSection({ theme }: HeroSectionProps) {
  const [floatingData, setFloatingData] = useState<FloatingImageData[]>([]);

  useEffect(() => {
    // Start adding images gradually after 15s
    const startDelay = 1500;
    const intervalDelay = 500; // add one heart every 0.5s
    let idx = 0;

    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (idx >= floatingImages.length) {
          clearInterval(interval);
          return;
        }
        if (Math.random() > 0.5) {
          // 50% chance to skip for sparser hearts
          idx++;
          return;
        }

        const newHeart: FloatingImageData = {
          src: floatingImages[idx],
          top: 30 + Math.random() * 60, // anywhere from 80% → 110%, starts below screen
          left: Math.random() * 80,    // anywhere across the width
          width: 30 + Math.random() * 120, // 30px → 150px for more size variation
          animationDelay: 0,
          animationDuration: 4 + Math.random() * 20, // 15 → 35s float lifetime
        };

        setFloatingData((prev) => [...prev, newHeart]);
        idx++;
      }, intervalDelay);
    }, startDelay);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative overflow-hidden transition-all duration-700 ease-in-out">
      {/* SVG Clip Path for Heart Shape */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="heart-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.5,0.95 
               C0.2,0.75 0,0.55 0,0.3 
               C0,0.1 0.2,0 0.5,0.25 
               C0.8,0 1,0.1 1,0.3 
               C1,0.55 0.8,0.75 0.5,0.95 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Floating Images */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {floatingData.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt="floating"
            className="absolute opacity-40 animate-float"
            style={{
              width: `${img.width}px`,
              height: `${img.width}px`,
              top: `${img.top}%`,
              left: `${img.left}%`,
              animationDelay: `${img.animationDelay}s`,
              animationDuration: `${img.animationDuration}s`,
              pointerEvents: 'none',
              objectFit: 'cover',
              clipPath: 'url(#heart-clip)',
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-3">
              <span className="text-6xl">{theme.emoji}</span>
              <div>
                <p
                  className="text-sm uppercase tracking-wider opacity-70"
                  style={{ color: theme.colors.textLight }}
                >
                  {theme.date}
                </p>
                <h1
                  className="text-5xl md:text-6xl lg:text-7xl mt-1"
                  style={{ color: theme.colors.text }}
                >
                  {theme.name}
                </h1>
              </div>
            </div>

            <h2
              className="text-3xl md:text-4xl"
              style={{ color: theme.colors.primary }}
            >
              {theme.tagline}
            </h2>

            <p
              className="text-lg md:text-xl max-w-lg leading-relaxed"
              style={{ color: theme.colors.textLight }}
            >
              {theme.description}
            </p>
          </div>

          <div className="relative">
            <div
              className="absolute inset-0 blur-3xl opacity-30 rounded-full"
              style={{ backgroundColor: theme.colors.primary }}
            />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <ImageWithFallback
                src={dayImages[theme.id]}
                alt={theme.name}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
            opacity: 0;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            transform: translateY(-50px);
            opacity: 0;
          }
        }

        .animate-float {
          animation-name: float;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}