import { DayTheme } from '../types/valentine';
import { useEffect, useState } from 'react';

interface FloatingElementsProps {
  theme: DayTheme;
}

export function FloatingElements({ theme }: FloatingElementsProps) {
  const [elements, setElements] = useState<Array<{ id: number; emoji: string; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generate floating elements based on the theme
    const emojis = getThemeEmojis(theme.id);
    const newElements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      emoji: emojis[i % emojis.length],
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
    }));
    setElements(newElements);
  }, [theme.id]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {elements.map((element) => (
        <div
          key={element.id}
          className="absolute opacity-20 animate-float"
          style={{
            left: `${element.left}%`,
            top: '-10%',
            fontSize: '2rem',
            animationDelay: `${element.delay}s`,
            animationDuration: `${element.duration}s`,
          }}
        >
          {element.emoji}
        </div>
      ))}
    </div>
  );
}

function getThemeEmojis(dayId: string): string[] {
  const emojiMap: Record<string, string[]> = {
    rose: ['🌹', '🌺', '🌸', '💐'],
    propose: ['💍', '💎', '✨', '💜'],
    chocolate: ['🍫', '🍬', '🍰', '🧁'],
    teddy: ['🧸', '💝', '🎀', '💖'],
    promise: ['🤝', '💙', '🎗️', '💌'],
    hug: ['🤗', '🫂', '🧡', '☕'],
    kiss: ['💋', '💗', '💄', '🌹'],
    valentine: ['❤️', '💖', '💕', '💗', '🎉'],
  };

  return emojiMap[dayId] || emojiMap.rose;
}
