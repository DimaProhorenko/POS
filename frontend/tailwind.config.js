import daisyui from "daisyui";
import themes from "daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      // screens: {
      //   DEFAULT: "1200px",
      // },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        dark: { ...themes["dark"] },
        primary: "#4f46e5",
      },
    ],
  },
};
