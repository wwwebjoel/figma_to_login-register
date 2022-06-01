module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter"],
    },
    extend: {
      colors: {
        "primary-background": "#5E3B76",
        "text-primary": "#212529",
        "text-secondary": "#6C757D",
        "input-border": "#CED4DA",
        separator: "#EDF2F7",
      },
    },
  },
  plugins: [],
};
