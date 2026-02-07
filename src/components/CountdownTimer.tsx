import { useState, useEffect } from 'react';
import { DayTheme } from '../types/valentine';

interface CountdownTimerProps {
  theme: DayTheme;
  targetDate: Date;
}

export function CountdownTimer({ theme, targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div
          key={unit}
          className="flex flex-col items-center p-4 rounded-xl border-2 min-w-[80px]"
          style={{
            backgroundColor: theme.colors.backgroundLight,
            borderColor: theme.colors.primary,
          }}
        >
          <div
            className="text-3xl md:text-4xl"
            style={{ color: theme.colors.primary }}
          >
            {value}
          </div>
          <div
            className="text-xs uppercase mt-1"
            style={{ color: theme.colors.textLight }}
          >
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
}

function calculateTimeLeft(targetDate: Date) {
  const now = new Date();
  const difference = targetDate.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}
