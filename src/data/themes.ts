

import { DayTheme } from '../types/valentine'

export const valentineThemes: Record<string, DayTheme> = {
  rose: {
    id: 'rose',
    name: 'Rose Day',
    date: 'February 7',
    tagline: 'Your Love blooms in Full',
    description:
      'The week of love starts with the timeless elegance of roses. Each petal carries a promise, each color a story.',
    emoji: '🌹',
    icon: 'rose',
    pattern: 'floral',
    colors: {
      primary: '#FF6B9D',
      secondary: '#FFE5ED',
      accent: '#C41E3A',
      background: '#FFF5F7',
      backgroundLight: '#FFFAFC',
      text: '#2D1B1F',
      textLight: '#6B4B52',
    },
    visuals: {
      gradient: 'linear-gradient(135deg, #FFF5F7, #FFE5ED)',
      glow: '0 0 40px rgba(255,107,157,0.35)',
      animation: 'float',
      mistOpacity: 0.6,
    },
  },

  propose: {
    id: 'propose',
    name: 'Propose Day',
    date: 'February 8',
    tagline: 'Say Yes to our Forever',
    description:
      'Take the leap,and let your heart speak. This is where our beautiful journeys begins.',
    emoji: '💍',
    icon: 'ring',
    pattern: 'hearts',
    colors: {
      primary: '#B565D8',
      secondary: '#F5E6FF',
      accent: '#8B4FA3',
      background: '#FBF7FE',
      backgroundLight: '#FDFBFF',
      text: '#2B1A33',
      textLight: '#5C4566',
    },
    visuals: {
      gradient: 'linear-gradient(135deg, #FBF7FE, #F5E6FF)',
      glow: '0 0 45px rgba(181,101,216,0.4)',
      animation: 'pulse',
      mistOpacity: 0.55,
    },
  },

  chocolate: {
    id: 'chocolate',
    name: 'Chocolate Day',
    date: 'February 9',
    tagline: 'A little sweetness for my Honey',
    description:
      'Lets indulge in this chocolaty joy as our love melts and merges us together',
    emoji: '🍫',
    icon: 'chocolate',
    pattern: 'playful',
    colors: {
      primary: '#8B4513',
      secondary: '#F5E6D3',
      accent: '#D2691E',
      background: '#FFF9F0',
      backgroundLight: '#FFFCF7',
      text: '#3D2817',
      textLight: '#6B5544',
    },
    visuals: {
      gradient: 'linear-gradient(135deg, #FFF9F0, #F5E6D3)',
      glow: '0 0 35px rgba(139,69,19,0.35)',
      animation: 'fade',
      mistOpacity: 0.5,
    },
  },

  teddy: {
    id: 'teddy',
    name: 'Teddy Day',
    date: 'February 10',
    tagline: 'Cuddle Up to Cuteness',
    description:
      'Soft, cuddly, and full of warmth and then there is pippo ',
    emoji: '🧸',
    icon: 'teddy',
    pattern: 'soft',
    colors: {
      primary: '#FFB7C5',
      secondary: '#FFF0F5',
      accent: '#FF8FA3',
      background: '#FFFBFC',
      backgroundLight: '#FFFEFF',
      text: '#3D2830',
      textLight: '#7A5A66',
    },
    visuals: {
      gradient: 'linear-gradient(135deg, #FFFBFC, #FFF0F5)',
      glow: '0 0 40px rgba(255,183,197,0.45)',
      animation: 'float',
      mistOpacity: 0.65,
    },
  },

  promise: {
    id: 'promise',
    name: 'Promise Day',
    date: 'February 11',
    tagline: 'Seal of Commitment',
    description:
      'A  promises that matters. This one lasts forever',
    emoji: '🤝',
    icon: 'promise',
    pattern: 'ribbons',
    colors: {
      primary: '#6B9BD1',
      secondary: '#E8F2FA',
      accent: '#4A7BA7',
      background: '#F7FBFF',
      backgroundLight: '#FCFEFF',
      text: '#1A2D3D',
      textLight: '#4A5D6D',
    },
    visuals: {
      gradient: 'linear-gradient(135deg, #F7FBFF, #E8F2FA)',
      glow: '0 0 30px rgba(107,155,209,0.35)',
      animation: 'fade',
      mistOpacity: 0.45,
    },
  },

  hug: {
    id: 'hug',
    name: 'Hug Day',
    date: 'February 12',
    tagline: 'Wrapped in Warmth',
    description:
      'A hug says what words cannot. Lets hug in a way we can hear each others heartbeats .',
    emoji: '🤗',
    icon: 'hug',
    pattern: 'gradient',
    colors: {
      primary: '#FFAB91',
      secondary: '#FFF3E0',
      accent: '#FF8A65',
      background: '#FFFBF7',
      backgroundLight: '#FFFEFC',
      text: '#3D2B1F',
      textLight: '#6B5544',
    },
    visuals: {
      gradient: 'linear-gradient(135deg, #FFFBF7, #FFF3E0)',
      glow: '0 0 40px rgba(255,171,145,0.4)',
      animation: 'pulse',
      mistOpacity: 0.6,
    },
  },

  kiss: {
    id: 'kiss',
    name: 'Kiss Day',
    date: 'February 13',
    tagline: 'Seal It with a Kiss',
    description:
      'A kiss is the language of love and with those lips even hours arent enough.',
    emoji: '💋',
    icon: 'kiss',
    pattern: 'glow',
    colors: {
      primary: '#E91E63',
      secondary: '#FCE4EC',
      accent: '#C2185B',
      background: '#FFF5F8',
      backgroundLight: '#FFFAFC',
      text: '#2D1423',
      textLight: '#5C3A4D',
    },
    visuals: {
      gradient: 'linear-gradient(135deg, #FFF5F8, #FCE4EC)',
      glow: '0 0 50px rgba(233,30,99,0.5)',
      animation: 'sparkle',
      mistOpacity: 0.55,
    },
  },

  valentine: {
    id: 'valentine',
    name: "Valentine's Day",
    date: 'February 14',
    tagline: 'Happiest Velentines day my Love',
    description:
      'The grand finale! Today, we celebrate love, joy, and this beautiful connections that makes this life magical.',
    emoji: '❤️',
    icon: 'valentine',
    pattern: 'confetti',
    colors: {
      primary: '#FF0000',
      secondary: '#FFE5E5',
      accent: '#FFD700',
      background: '#FFFFFF',
      backgroundLight: '#FFF9F9',
      text: '#1A0000',
      textLight: '#4D1A1A',
    },
    visuals: {
      gradient: 'linear-gradient(135deg, #FFF9F9, #FFE5E5)',
      glow: '0 0 60px rgba(255,0,0,0.55)',
      animation: 'pulse',
      mistOpacity: 0.7,
    },
  },
}


export const dayOrder = [
  'rose',
  'propose',
  'chocolate',
  'teddy',
  'promise',
  'hug',
  'kiss',
  'valentine',
]