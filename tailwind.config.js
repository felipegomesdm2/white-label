import { tint } from "./tint";

const BASE_PRIMARY_COLOR = "#1e90ff";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.svelte"],
  theme: {
    variables: {
      DEFAULT: {
        colors: {
          primary: {
            100: tint(BASE_PRIMARY_COLOR, "brighten", 2),
            200: tint(BASE_PRIMARY_COLOR, "brighten", 1.75),
            300: tint(BASE_PRIMARY_COLOR, "brighten", 1.5),
            400: tint(BASE_PRIMARY_COLOR, "brighten", 1.25),
            500: tint(BASE_PRIMARY_COLOR, "brighten"),
            600: BASE_PRIMARY_COLOR, // Base color.
            700: tint(BASE_PRIMARY_COLOR, "darken"),
            800: tint(BASE_PRIMARY_COLOR, "darken", 1.5),
            900: tint(BASE_PRIMARY_COLOR, "darken", 2),
          },
        },
      },
    },
    extend: {
      colors: {
        primary: {
          100: `var(--colors-primary-100, ${BASE_PRIMARY_COLOR})`,
          200: `var(--colors-primary-200, ${BASE_PRIMARY_COLOR})`,
          300: `var(--colors-primary-300, ${BASE_PRIMARY_COLOR})`,
          400: `var(--colors-primary-400, ${BASE_PRIMARY_COLOR})`,
          500: `var(--colors-primary-500, ${BASE_PRIMARY_COLOR})`,
          600: `var(--colors-primary-600, ${BASE_PRIMARY_COLOR})`, // Base color.
          700: `var(--colors-primary-700, ${BASE_PRIMARY_COLOR})`,
          800: `var(--colors-primary-800, ${BASE_PRIMARY_COLOR})`,
          900: `var(--colors-primary-900, ${BASE_PRIMARY_COLOR})`,
        },
        custom: {
          100: `var(--colors-custom-100, ${BASE_PRIMARY_COLOR})`,
          200: `var(--colors-custom-200, ${BASE_PRIMARY_COLOR})`,
          300: `var(--colors-custom-300, ${BASE_PRIMARY_COLOR})`,
          400: `var(--colors-custom-400, ${BASE_PRIMARY_COLOR})`,
          500: `var(--colors-custom-500, ${BASE_PRIMARY_COLOR})`,
          600: `var(--colors-custom-600, ${BASE_PRIMARY_COLOR})`, // Base color.
          700: `var(--colors-custom-700, ${BASE_PRIMARY_COLOR})`,
          800: `var(--colors-custom-800, ${BASE_PRIMARY_COLOR})`,
          900: `var(--colors-custom-900, ${BASE_PRIMARY_COLOR})`,
        },
      },
    },
  },
  plugins: [require("@mertasan/tailwindcss-variables")],
};
