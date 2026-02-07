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
             Celebrating Our Love Forever
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
    rose: "You deserve 9,999 roses delivered to your footsteps everyday.",
    propose: "In all the world, there is no heart for me like yours. Will you be mine?",
    chocolate: "All you need is love, but a little chocolate now and then doesn't hurt.",
    teddy: "How are you, my dear teddy bear?",
    promise: "You are my dream among the stars; I promise to love you forever.",
    hug: "You are the perfect height for my warm embrace.",
    kiss: "My lips want to whisper endless love to you.",
    valentine: "Come be mine, my Valentine!",
  };

  return quotes[day] || quotes.rose;
}
