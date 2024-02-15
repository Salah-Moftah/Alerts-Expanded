/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },
      colors: {
        "first-gray": "#202020",
        "second-gray": "#313131",
        "third-gray": "#181818",
        "text-gray-color": "#979797",
        "line-gray": "#414040",
        "accent-color": "#53ACFF",
        "orange-color": "#D94111",
        "green-color": "#118F4B",
      },
      boxShadow: {
        '3xl': '0 0 50px #181818',
      }
    },
  },
  plugins: [],
};
