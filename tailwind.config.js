/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#131313",
          dim: "#131313",
          bright: "#393939",
          "container-lowest": "#0e0e0e",
          "container-low": "#1b1b1b",
          container: "#1f1f1f",
          "container-high": "#2a2a2a",
          "container-highest": "#353535",
        },
        "on-surface": {
          DEFAULT: "#e2e2e2",
          variant: "#c4c7c8",
        },
        outline: {
          DEFAULT: "#8e9192",
          variant: "#444748",
        },
        primary: {
          DEFAULT: "#ffffff",
          container: "#e2e2e2",
        },
        "on-primary": {
          DEFAULT: "#2f3131",
          container: "#636565",
        },
        secondary: {
          DEFAULT: "#c6c6cb",
          container: "#46464b",
        },
        "on-secondary": {
          DEFAULT: "#2f3034",
          container: "#b5b4ba",
        },
        error: {
          DEFAULT: "#ffb4ab",
          container: "#93000a",
        },
        background: "#131313",
        "on-background": "#e2e2e2",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["94px", { lineHeight: "100px", letterSpacing: "-0.04em", fontWeight: "800" }],
        "display-lg-mobile": ["48px", { lineHeight: "52px", letterSpacing: "-0.03em", fontWeight: "800" }],
        "headline-xl": ["64px", { lineHeight: "72px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "600" }],
        "button-text": ["14px", { lineHeight: "20px", fontWeight: "500" }],
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
      spacing: {
        base: "8px",
        "section-gap": "160px",
        "container-padding": "40px",
        gutter: "24px",
        "margin-mobile": "20px",
      },
      boxShadow: {
        elevated: "0 20px 50px rgba(0, 0, 0, 0.1)",
      },
      backdropBlur: {
        glass: "20px",
      },
    },
  },
  plugins: [],
};