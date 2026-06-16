import '@/styles/globals.css'
import { displayFont, bodyFont, monoFont } from '@/lib/fonts'

// Font variable classes are applied to <html> in _document.js.
// Importing here ensures next/font injects the @font-face CSS.
void displayFont; void bodyFont; void monoFont;

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
