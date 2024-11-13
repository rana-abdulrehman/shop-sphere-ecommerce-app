module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        toastAnimation: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '20%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        toastAnimation: 'toastAnimation 2s linear',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}