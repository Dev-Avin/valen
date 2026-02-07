import { DayTheme } from '../types/valentine';
import { Heart } from 'lucide-react';

interface FooterProps {
  theme: DayTheme;
}

export function Footer({ theme }: FooterProps) {
  return (
    <footer 
      className="py-12 px-6 border-t transition-colors duration-700"
      style={{ 
        backgroundColor: theme.colors.backgroundLight,
        borderColor: theme.colors.secondary 
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Heart 
              className="w-6 h-6" 
              style={{ color: theme.colors.primary }}
              fill="currentColor"
            />
            <span 
              className="text-xl"
              style={{ color: theme.colors.text }}
            >
              Valentine's Week 2026
            </span>
          </div>

          <div 
            className="text-center md:text-right"
            style={{ color: theme.colors.textLight }}
          >
            <p>Made with love for celebrating love</p>
            <p className="text-sm mt-1 opacity-70">
              February 7-14, 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
