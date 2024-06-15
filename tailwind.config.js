/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/renderer/index.html',
    './src/renderer/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#19D08E',
        },
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#19D08E',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
