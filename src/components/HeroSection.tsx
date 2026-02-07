import { DayTheme } from '../types/valentine';
import { DayIcon } from './DayIcon';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { dayImages } from '../data/images';

interface HeroSectionProps {
  theme: DayTheme;
}

export function HeroSection({ theme }: HeroSectionProps) {
  return (
    <div className="relative overflow-hidden transition-all duration-700 ease-in-out">
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
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

          {/* Right Column - Image */}
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
              <div 
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}