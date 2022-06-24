module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#1e1e2e",
        mantle: "#181825",
        crust: "#11111b",
        textBase: "#cdd6f4",
        subtextBase: "#a6adc8",
        subtextAlt: "#bac2de",
        blue: "#89b4fa",
        red: "#f38ba8",
        lavender: "#b4befe",
        yellow: "#f9e2af",
        peach: "#fab387",
        green: "#a6e3a1"
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'
      },
      margins: {
        //to be done
      }
    },
  },
  plugins: [],
}
