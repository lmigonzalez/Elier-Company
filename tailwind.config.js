/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: 
      {
        "custom": 'hsl(var(--custom))', // color-variable
      }
    },
  },
  daisyui: {
      themes: [
        {
          mytheme: {          
          "primary": "#8B8BCC",             
          "secondary": "#bbf7d0",          
          "accent": "#37CDBE",          
          "neutral": "#f3f4f6",          
          "base-100": "#FFFFFF",          
          "info": "#3ABFF8",          
          "success": "#36D399",          
          "warning": "#FBBD23",          
          "error": "#F87272",   
          "--custom":"#383030"
          },
        },
      ],
    },
  plugins: [require("daisyui")],
}
