import { DayTheme } from '../types/valentine';
import { valentineThemes, dayOrder } from '../data/themes';
import { Check } from 'lucide-react';

interface TimelineSectionProps {
  theme: DayTheme;
  currentDay: string;
}

export function TimelineSection({ theme, currentDay }: TimelineSectionProps) {
  const currentIndex = dayOrder.indexOf(currentDay);

  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl mb-4" style={{ color: theme.colors.text }}>
            The Week of Love
          </h2>
          <p className="text-lg" style={{ color: theme.colors.textLight }}>
            Eight days to celebrate, eight ways to express your heart
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {dayOrder.map((dayId, index) => {
            const dayTheme = valentineThemes[dayId];
            const isActive = currentDay === dayId;
            const isPast = index < currentIndex;

            return (
              <div
                key={dayId}
                className="relative p-6 rounded-2xl border-2 transition-all duration-300"
                style={{
                  backgroundColor: isActive ? dayTheme.colors.primary : dayTheme.colors.backgroundLight,
                  borderColor: isActive ? dayTheme.colors.primary : isPast ? dayTheme.colors.primary : dayTheme.colors.secondary,
                  color: isActive ? 'white' : dayTheme.colors.text,
                  opacity: isPast ? 0.6 : 1,
                }}
              >
                <div className="text-center space-y-2">
                  <div className="text-4xl mb-2">{dayTheme.emoji}</div>
                  <div className="text-sm opacity-70">{dayTheme.date}</div>
                  <div className="font-medium">{dayTheme.name}</div>
                </div>

                {isPast && (
                  <div className="absolute top-2 right-2">
                    <div 
                      className="w-6 h-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: dayTheme.colors.primary }}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}

                {isActive && (
                  <div
                    className="absolute inset-0 opacity-20 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, white, transparent)`,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}