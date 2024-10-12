/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				lato: ["Lato", "sans-serif"],
			},
			keyframes: {
				pulseCustom: {
					"0%, 100%": { opacity: 1 },
					"50%": { opacity: 0.5 },
				},
			},
			animation: {
				"pulse-slow": "pulseCustom 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			},
			colors: {
				"movie-red": {
					50: "#ffeff2",
					100: "#ffdce1",
					200: "#ffbfc9",
					300: "#ff92a3",
					400: "#ff546f",
					500: "#ff1f42",
					600: "#ff0028",
					700: "#db0022",
					800: "#b3001c",
					900: "#94081e",
					950: "#52000d",
				},
			},
		},
	},
	plugins: [],
};
