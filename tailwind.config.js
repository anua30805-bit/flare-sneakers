/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#003D32',
          dark: '#002B23',
          deep: '#001E18',
          light: '#0D7058',
          hover: '#095844',
          accent: '#109B7A',
          subtle: '#E6EFEA',
        },
        brand: {
          black: '#101010',
          dark: '#171717',
          charcoal: '#222222',
          muted: '#666666',
          light: '#F4F4F4',
          offwhite: '#F9F9F9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 20px 40px -15px rgba(0, 61, 50, 0.15)',
        'glow': '0 0 35px rgba(13, 112, 88, 0.25)',
        'glow-lg': '0 0 60px rgba(13, 112, 88, 0.35)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-1deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.85' },
        }
      }
    },
  },
  plugins: [],
}
