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
