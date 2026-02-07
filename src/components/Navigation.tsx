import { DayTheme } from '../types/valentine';
import { Heart } from 'lucide-react';
import { dayOrder, valentineThemes } from '../data/themes';

interface NavigationProps {
  theme: DayTheme;
  currentDay: string;
}

export function Navigation({ theme, currentDay }: NavigationProps) {
  const currentIndex = dayOrder.indexOf(currentDay);

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-700"
      style={{
        backgroundColor: `${theme.colors.background}f0`,
        borderColor: theme.colors.secondary,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Heart
              className="w-8 h-8"
              style={{ color: theme.colors.primary }}
              fill="currentColor"
            />
            <span className="text-2xl" style={{ color: theme.colors.text }}>
              Valentine's Week
            </span>
          </div>

          {/* Current Day Display */}
          <div className="flex items-center gap-3">
            <div className="text-center">
              <div className="text-3xl mb-1">{theme.emoji}</div>
              <div className="text-sm" style={{ color: theme.colors.textLight }}>
                Day {currentIndex + 1} of {dayOrder.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}