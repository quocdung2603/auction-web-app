import Icons from "vite-plugin-icons";
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#FF4949",
			},
		},
	},
	plugins: [Icons()],
};
