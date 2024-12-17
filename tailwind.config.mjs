/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				blue: "#167DB7",
				'background-blue': "#A7C7E7",
			},
			backgroundImage: {
				"card-background": 'url(/card_background.webp)',
			}
		},
	},
	plugins: [],
}
