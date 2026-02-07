export type ValentineDay = 
  | 'rose'
  | 'propose'
  | 'chocolate'
  | 'teddy'
  | 'promise'
  | 'hug'
  | 'kiss'
  | 'valentine';



export interface DayTheme {
  id: string
  name: string
  date: string
  tagline: string
  description: string
  emoji: string
  icon: string
  pattern: string

  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    backgroundLight: string
    text: string
    textLight: string
  }

  visuals: {
    gradient: string
    glow: string
    animation: 'float' | 'pulse' | 'fade' | 'sparkle'
    mistOpacity: number
  }
}