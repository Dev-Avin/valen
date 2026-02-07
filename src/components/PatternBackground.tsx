import { DayTheme } from '../types/valentine';

interface PatternBackgroundProps {
  theme: DayTheme;
}

export function PatternBackground({ theme }: PatternBackgroundProps) {
  const patterns: Record<string, React.ReactNode> = {
    floral: (
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl" 
             style={{ background: `radial-gradient(circle, ${theme.colors.primary}, transparent)` }} />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl" 
             style={{ background: `radial-gradient(circle, ${theme.colors.accent}, transparent)` }} />
      </div>
    ),
    hearts: (
      <div className="absolute inset-0 opacity-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 20}px`,
            }}
          >
            💜
          </div>
        ))}
      </div>
    ),
    playful: (
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full" 
             style={{ backgroundColor: theme.colors.primary }} />
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full" 
             style={{ backgroundColor: theme.colors.accent }} />
        <div className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full" 
             style={{ backgroundColor: theme.colors.secondary }} />
      </div>
    ),
    soft: (
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" 
             style={{ background: `linear-gradient(135deg, ${theme.colors.secondary} 0%, ${theme.colors.backgroundLight} 100%)` }} />
      </div>
    ),
    ribbons: (
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-2 h-full rotate-12" 
             style={{ backgroundColor: theme.colors.primary }} />
        <div className="absolute top-0 right-1/3 w-2 h-full -rotate-12" 
             style={{ backgroundColor: theme.colors.accent }} />
      </div>
    ),
    gradient: (
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" 
             style={{ background: `linear-gradient(180deg, ${theme.colors.secondary} 0%, ${theme.colors.background} 50%, ${theme.colors.secondary} 100%)` }} />
      </div>
    ),
    glow: (
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl" 
             style={{ background: `radial-gradient(circle, ${theme.colors.primary}, ${theme.colors.accent}, transparent)` }} />
      </div>
    ),
    confetti: (
      <div className="absolute inset-0 opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? theme.colors.primary : i % 3 === 1 ? theme.colors.accent : theme.colors.secondary,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>
    ),
  };

  return <>{patterns[theme.pattern] || patterns.floral}</>;
}
