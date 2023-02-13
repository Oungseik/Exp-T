/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				unbounded: ["Unbounded", "cursive"],
				roboto: ["Roboto", "sans-serif"]
			}
		}
	},
	plugins: []
};
