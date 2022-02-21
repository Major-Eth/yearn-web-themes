const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	corePlugins: {
		ringColor: false,
	},
	darkMode: 'class',
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', ...defaultTheme.fontFamily.sans]
			},
			fontSize: {
				'sm': ['12px', '16px'],
				'base': ['16px', '24px'],
				'lg': ['20px', '32px'],
				'xl': ['24px', '32px'],
				'4xl': ['40px', '56px'],
			},
		},
	}
};