import { IBM_Plex_Sans, DM_Serif_Display, JetBrains_Mono } from 'next/font/google'

export const displayFont = DM_Serif_Display({
  subsets: ['latin'],
  variable: '--font-dm-serif',
  weight: '400',
  display: 'swap',
})

export const bodyFont = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-plex',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const monoFont = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jb-mono',
  weight: ['400', '500'],
  display: 'swap',
})
