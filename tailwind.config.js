const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'p-1':'#7c3aed',
        'off-white':'#f3f4f6',
      },
      screens: {
        'xs': '480px',
      },
      left: {
        'left_box': '40%',
      },
      width: {
        '420': '420px',
        '465': '465px',
        '600':'600px',
        '800':'710px',
        'search_bar':'83%',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
      },
      keyframes: {
        // 'accordion-down': {
        //   from: { height: 0 },
        //   to: { height: 'var(--radix-accordion-content-height)' },
        // },
        // 'accordion-up': {
        //   from: { height: 'var(--radix-accordion-content-height)' },
        //   to: { height: 0 },
        // },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      // animation: {
      //   'accordion-down': 'accordion-down 0.2s ease-out',
      //   'accordion-up': 'accordion-up 0.2s ease-out',
      //   'scroll': 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      // },
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    addVariablesForColors
  ]
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
