/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./projects/**/*.{html,ts}",
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'bright-blue': 'oklch(51.01% 0.274 263.83)',
        'electric-violet': 'oklch(53.18% 0.28 296.97)',
        'french-violet': 'oklch(47.66% 0.246 305.88)',
        'vivid-pink': 'oklch(69.02% 0.277 332.77)',
        'hot-red': 'oklch(61.42% 0.238 15.34)',
        'orange-red': 'oklch(63.32% 0.24 31.68)',
        'gray-900': 'oklch(19.37% 0.006 300.98)',
        'gray-700': 'oklch(36.98% 0.014 302.71)',
        'gray-400': 'oklch(70.9% 0.015 304.04)',
      },
      fontFamily: {
        'inter': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        'inter-tight': ['Inter Tight', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'red-to-pink-to-purple-vertical': 'linear-gradient(180deg, oklch(63.32% 0.24 31.68) 0%, oklch(69.02% 0.277 332.77) 50%, oklch(53.18% 0.28 296.97) 100%)',
        'red-to-pink-to-purple-horizontal': 'linear-gradient(90deg, oklch(63.32% 0.24 31.68) 0%, oklch(69.02% 0.277 332.77) 50%, oklch(53.18% 0.28 296.97) 100%)',
      }
    },
  },
  plugins: [],
}