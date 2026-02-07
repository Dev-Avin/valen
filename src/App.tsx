import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { TimelineSection } from './components/TimelineSection';
import { PatternBackground } from './components/PatternBackground';
import { FloatingElements } from './components/FloatingElements';
import { DailyToken } from './components/DailyToken.tsx'
import { CountdownTimer } from './components/CountdownTimer';
import { Footer } from './components/Footer';
import { valentineThemes } from './data/themes';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const [currentDay, setCurrentDay] = useState<string>('rose');

  const theme = valentineThemes[currentDay];

  useEffect(() => {
    // Auto-detect the current day based on today's date
    const today = new Date();
    const month = today.getMonth(); // 0-indexed, so February is 1
    const date = today.getDate();

    // Valentine's Week runs from Feb 7-14
    if (month === 1) { // February
      if (date === 7) setCurrentDay('rose');
      else if (date === 8) setCurrentDay('propose');
      else if (date === 9) setCurrentDay('chocolate');
      else if (date === 10) setCurrentDay('teddy');
      else if (date === 11) setCurrentDay('promise');
      else if (date === 12) setCurrentDay('hug');
      else if (date === 13) setCurrentDay('kiss');
      else if (date === 14) setCurrentDay('valentine');
    }
    // If outside Valentine's Week, default to Rose Day for demo
  }, []);

  return (
    <div
      className="min-h-screen transition-all duration-700 ease-in-out relative"
      style={{ backgroundColor: theme.colors.background }}
    >
      
<Toaster position="top-center" />
      {/* Background Pattern */}
      <PatternBackground theme={theme} />


      {/* Floating Elements */}
      <FloatingElements theme={theme} />

      {/* Navigation */}
      <Navigation 
        theme={theme} 
        currentDay={currentDay}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection theme={theme} />
        <DailyToken currentDay={currentDay} />

        {/* Timeline Section */}
        <TimelineSection 
          theme={theme} 
          currentDay={currentDay}
        />

        {/* Countdown Section */}
        <section 
          className="py-16 px-6"
          style={{ backgroundColor: theme.colors.backgroundLight }}
        >
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div>
              <h2 
                className="text-3xl md:text-4xl mb-2"
                style={{ color: theme.colors.text }}
              >
                Time Until Valentine's Day
              </h2>
              <p style={{ color: theme.colors.textLight }}>
                The celebration of love is almost here!
              </p>
            </div>
            <CountdownTimer 
              theme={theme} 
              targetDate={new Date('2026-02-14T00:00:00')} 
            />
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="text-6xl mb-6">{theme.emoji}</div>
            <h2 
              className="text-3xl md:text-4xl italic"
              style={{ color: theme.colors.primary }}
            >
              "{getQuote(currentDay)}"
            </h2>
            <p 
              className="text-lg"
              style={{ color: theme.colors.textLight }}
            >
              Celebrate love in all its beautiful forms
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer theme={theme} />
    </div>
  );
}

function getQuote(day: string) {
  const quotes: Record<string, string> = {
    rose: "A rose speaks of love silently, in a language known only to the heart.",
    propose: "In all the world, there is no heart for me like yours.",
    chocolate: "All you need is love. But a little chocolate now and then doesn't hurt.",
    teddy: "A hug is a perfect gift - one size fits all, and nobody minds if you exchange it.",
    promise: "Promises are the uniquely human way of ordering the future.",
    hug: "A hug is like a boomerang - you get it back right away.",
    kiss: "A kiss is a lovely trick designed by nature to stop speech when words become superfluous.",
    valentine: "Love is composed of a single soul inhabiting two bodies.",
  };

  return quotes[day] || quotes.rose;
}
