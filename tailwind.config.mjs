import defaultTheme from 'tailwindcss/defaultTheme'


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	important: true,
	theme: {
		extend: {
			  fontFamily: {
        sans: ['Barlow-Regular', ...defaultTheme.fontFamily.sans],
      },
		},
	},
	plugins: [],
}
