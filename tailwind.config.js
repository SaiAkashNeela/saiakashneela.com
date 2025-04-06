/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0a192f", // Dark mode primary
          light: "#f5f9ff"    // Light mode primary
        },
        secondary: {
          DEFAULT: "#64ffda", // Dark mode secondary
          light: "#3b82f6"    // Light mode secondary (light blue)
        },
        tertiary: {
          DEFAULT: "#112240", // Dark mode tertiary
          light: "#e5e7eb"    // Light mode tertiary
        },
        navy: {
          light: "#233554",   // Dark mode navy light 
          dark: "#0a192f"     // Dark mode navy dark
        },
        slate: {
          light: "#f8fafc",    // Light mode background
          dark: "#1e293b"      // Light mode darker shade
        }
      },
      boxShadow: {
        'neo-light': '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
        'neo-dark': '8px 8px 16px #060e1a, -8px -8px 16px #0e2444'
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(100, 255, 218, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(100, 255, 218, 0.8)' }
        }
      }
    },
  },
  plugins: [],
} 