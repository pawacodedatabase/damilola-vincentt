/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        // Custom colors for dark/light mode
        'dark-bg': '#121212',
        'light-text': '#f4f4f4',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out',
        'marquee': 'marquee 10s linear infinite', // New marquee animation
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(100%)' }, // Start from the right
          '100%': { transform: 'translateX(-100%)' }, // Move to the left
        },
      },
    },
  },
  plugins: [
    // Add Tailwind plugins if needed, e.g., typography, forms
  ],
};
