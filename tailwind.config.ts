import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      colors: {
        brand: {
          50: '#f5f6ff',
          100: '#e7e9ff',
          500: '#3f46ff',
          700: '#2f36d6',
        },
      },
    },
  },
  plugins: [],
};

export default config;
