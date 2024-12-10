const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
	mode: "jit",
	purge: ["./src/**/*.{html,js,ts,tsx}"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			borderWidth:{
				small:"1px",
			},
			boxShadow: {
				custom: "0px 7px 29px 0px rgba(100, 100, 111, 0.2)",
			},
			colors: {
				primary: "white",
				textPrimary: "black",
				red: "#B41712",
			},
			outlineWidth: {
				primary:"0.75px",
			},
			spacing: {
				custom: "6rem",
			},
			zIndex: {
				1: "1",
				2: "2",
				3: "3",
				10: "10",
				50: "50",
				999: "999",
				max: "9999", // Giá trị cao nhất
			},
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				".flexCenter": {
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				},
				".transitionLow": {
					transition: "all 1s ease-in-out",
				},
				".transitionHight": {
					transition: "all 0.3s ease-in-out",
				},
			});
		}),
	],
};
