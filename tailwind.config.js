const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,ts,tsx}'],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			spacing: {
				"custom":"6rem",
			  },
			boxShadow: {
				'custom': '0px 7px 29px 0px rgba(100, 100, 111, 0.2)',
			  },
			colors: {
				primary: "#FF4949",
			},
			
		},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
			  '.transitionLow': {
				transition: 'all 0.8s ease-in-out',
			  },
			  '.transitionHight': {
				transition: 'all 0.3s ease-in-out',
			  },
			});
		  }),
	],
};
