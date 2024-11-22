/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths to match your project structure
  ],
  theme: {
    extend: {
      keyframes: {
        smoothBounce: {
          '0%, 20%': { transform: 'translateY(0)' },
          '80%': { transform: 'translateY(-50px)' },
        },

        // smoothBounces: {
        //   '0%, 10%': { transform: 'translateX(0)' },
        //   '10%': { transform: 'translateX(-50px)' },
        // },
      },
      animation: {
        smoothBounce: 'smoothBounce 3s infinite ease-in-out',
        smoothBounces: 'smoothBounce 0.5s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'scroll-line': 'scroll-line 1.5s linear forwards',
        'cart-move': 'cart-move 1.5s linear forwards',
      },
      keyframes: {
        'scroll-line': {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
        'cart-move': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(100vw - 2rem))' },
        },
      },
    },
  },
  plugins: [],
};
