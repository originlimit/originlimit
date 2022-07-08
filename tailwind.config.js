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
        crustOpaque: "rgba(17, 17, 27, 0.50)", //this is transparent to later use with a backdrop blur
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
        // to avoid classname bloat, we will have one media query for mobile and tablets and make the design naturally responsive at their respective sizings
        'mobile': {'max': '1023px'}
      },
      margins: {
        //to be done
      },
    },
  },
  plugins: [],
}
