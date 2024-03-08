tailwind.config = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                blue: "",
                blueShade: "hsl(220, 15%, 55%)",
                darkNavy: "hsl(218, 44%, 22%)",
                grey: "#7D889E",
                lightGrey: "hsl(212, 45%, 89%)",
            },
            fontFamily: {
                outfit: ["Outfit", "sans-serif"]
            }
        }
    }
}