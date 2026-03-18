/**
 * Maxly Web Design Tokens
 * Ported from clients/maxly/constants/theme.ts + fonts.ts + glowPresets.ts
 */

export const Colors = {
  background: '#0D0D0F',
  surface: '#141418',
  surfaceLight: '#1C1C22',

  text: '#FFFFFF',
  textSecondary: '#8A929E',
  textTertiary: '#5A6068',

  primary: '#2D7DD2',
  primaryMuted: '#4A9EFF',
  accent: '#A8B2C0',
  accentMuted: '#D0D8E4',
  secondary: '#D0D8E4',

  success: '#34D399',
  warning: '#FBBF24',
  error: '#F87171',
  info: '#60A5FA',

  border: '#222228',
  surfaceBorder: '#2A2A32',
  overlay: 'rgba(0,0,0,0.6)',
} as const;

export const GlowColors = {
  electricBlue: '#001cff',
  deepBlue: 'rgba(2, 62, 138, 1)',
  cyan: 'rgba(0, 180, 216, 1)',
  lightCyan: 'rgba(129, 236, 236, 1)',
  aqua: 'rgba(72, 202, 228, 1)',
  brightCyan: 'rgba(0, 171, 255, 1)',
  skyBlue: 'rgba(0, 190, 255, 1)',
} as const;

export const FontFamily = {
  brand: "'Fredoka', sans-serif",
  heading: "'Bungee', sans-serif",
  body: "'Exo 2', sans-serif",
  button: "'Audiowide', sans-serif",
} as const;
