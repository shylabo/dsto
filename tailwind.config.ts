import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      blur: {
        xs: '1.5px',
      },
      colors: {
        primary: 'var(--background-color)',
      },
      transitionDuration: {
        '3000': '3000ms',
      },
    },
  },
  plugins: [],
}
export default config
