/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D6EFD',
          hover: '#0B5ED7',
          light: '#E7F1FF',
          dark: '#0A58CA'
        },
        secondary: {
          DEFAULT: '#20C997',
          hover: '#1BA87E',
          light: '#E6FAF5'
        },
        accent: {
          DEFAULT: '#00B4D8',
          hover: '#0096B4',
          light: '#E0F7FA'
        },
        surface: {
          DEFAULT: '#FFFFFF',
          glass: 'rgba(255, 255, 255, 0.75)',
          glassDark: 'rgba(15, 23, 42, 0.75)',
          ice: '#F8FBFF'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(13, 110, 253, 0.08)',
        'glass-hover': '0 12px 40px 0 rgba(13, 110, 253, 0.16)',
        'glow-primary': '0 0 25px rgba(13, 110, 253, 0.35)',
        'glow-teal': '0 0 25px rgba(32, 201, 151, 0.35)',
        'glow-accent': '0 0 25px rgba(0, 180, 216, 0.35)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
}
