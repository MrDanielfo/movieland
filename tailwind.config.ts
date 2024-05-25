import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textShadow: {
        'sm': '#000 4px 6px 5px',
        'md': '#000 4px 6px 5px',
        'lg': '#000 4px 2px 5px',
        'xl': '#000 4px 6px 5px',
      }
    },
  },
  plugins: [function({ addUtilities }: any) {
    const newUtilities = {
      '.text-shadow-sm': {
        'text-shadow': '#000 4px 6px 5px'
      },
      '.text-shadow-md': {
        'text-shadow': '#000 4px 6px 5px'
      },
      '.text-shadow-lg': {
        'text-shadow': '#000 4px 6px 5px',
      },
      '.text-shadow-xl': {
        'text-shadow': '#000 4px 6px 5px',
      },
      // You can add more custom shadows here
    }
    addUtilities(newUtilities, ['responsive', 'hover'])
  }],
};
export default config;
