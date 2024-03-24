/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      darkMode: 'class',
      backgroundImage: {
        covers: "url('/cover.png')",
      },
      backgroundColor: {
        "gradient-color": "rgba(250, 244, 244, 0.5)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        title: ["Berkshire Swash"]
      },
      colors: {
        // bg: "#EEEEEE",
        // primary1: "#053B50",
        // primary2: "#176B87",
        // primary3: "#64CCC5",


        firstColor: "#e5345b",
        secondColor: "#eeb1be",
     


        blackColorLight: "#666666",
        whiteColor: "#f2f2f2",
        
        buttonColor: "#000000",

        textColorLight: "#a3a3a3",


        bg: "#f2f2f2",
        cardHover: "#f2f2f2",
        skill: "#111",
        bodyColor: "#dedede",
        containerColor: "#d4d4d4",
        item : '#111',
        textContrast: "#f2f2f2",
        titleColor: "#111",
        blackColor: "#111",

        // for dark mode
        textContrast2: "#111",
        item2 : '#151515',
        bg2: "#111",
        cardHover2: "#111",
        skill2: "#e5345b",
        bodyColor2: "#151515",
        textColor2: "#707070",
        titleColor2: "#f2f2f2",
        blackColor2: "#f2f2f2",


      },
    },
    darkMode: "class",
  },
};
