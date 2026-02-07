import { DayTheme } from '../types/valentine';
import { DayIcon } from './DayIcon';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  theme: DayTheme;
}

export function FeatureCard({ icon, title, description, theme }: FeatureCardProps) {
  return (
    <div
      className="p-6 rounded-2xl backdrop-blur-sm border transition-all duration-300 hover:scale-105 hover:shadow-xl"
      style={{
        backgroundColor: theme.colors.backgroundLight,
        borderColor: theme.colors.secondary,
      }}
    >
      <div
        className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
        style={{ backgroundColor: theme.colors.secondary }}
      >
        <DayIcon icon={icon} className="w-7 h-7" style={{ color: theme.colors.primary }} />
      </div>
      <h3 className="text-xl mb-2" style={{ color: theme.colors.text }}>
        {title}
      </h3>
      <p style={{ color: theme.colors.textLight }}>
        {description}
      </p>
    </div>
  );
}
