const light = {
	name: 'light',
	colors: {
		background: '#F4F7FB',
		backgroundVariant: '#E0EAFF',
		surface: '#FFFFFF',
		surfaceVariant: '#F9FBFD',
		primary: '#0657F9',
		primaryVariant: '#004ADF',
		secondary: '#E0EAFF',
		titles: '#001746',
		titlesVariant: '#0657F9',
		texts: '#7F8DA9',
		disabled: '#CED5E3',
		icons: {
			primary: '#CED5E3',
			variant: '#475570'
		},
		button: {
			filled: {
				primary: '#0657F9',
				variant: '#004ADF',
				text: '#FFFFFF',
			},
			outlined: {
				primary: '#FFFFFF',
				variant: '#E0EAFF',
				text: '#0657F9',
			},
			disabled: {
				primary: '#F4F7FB',
				text: '#CED5E3',
			}
		}
	}
}

const dark = {
	name: 'dark',
	colors: {
		background: '#141414',
		backgroundVariant: '#272727',
		surface: '#000000',
		surfaceVariant: '#191919',
		primary: '#FFFFFF',
		primaryVariant: '#FFFFFF',
		secondary: '#272727',
		titles: '#FFFFFF',
		titlesVariant: '#FFFFFF',
		texts: '#A8A8A8',
		disabled: '#A8A8A8',
		icons: {
			primary: '#A8A8A8',
			variant: '#FFFFFF'
		},
		button: {
			filled: {
				primary: '#0657F9',
				variant: '#004ADF',
				text: '#FFFFFF',
			},
			outlined: {
				primary: '#FFFFFF',
				variant: '#272727',
				text: '#FFFFFF',
			},
			disabled: {
				primary: '#141414',
				text: '#A8A8A8',
			}
		}
	}
}

const blue = {
	name: 'blue',
	colors: {
		background: '#012A7C',
		backgroundVariant: '#001E59',
		surface: '#001746',
		surfaceVariant: '#012A7C',
		primary: '#0657F9',
		primaryVariant: '#004ADF',
		secondary: '#0657F9',
		titles: '#FFFFFF',
		titlesVariant: '#FFFFFF',
		texts: '#7F8DA9',
		disabled: '#CED5E3',
		icons: {
			primary: '#7F8DA9',
			variant: '#FFFFFF'
		},
		button: {
			filled: {
				primary: '#0657F9',
				variant: '#004ADF',
				text: '#FFFFFF',
			},
			outlined: {
				primary: '#0657F9',
				variant: '#012A7C',
				text: '#0657F9',
			},
			disabled: {
				primary: '#012A7C',
				text: '#7F8DA9',
			}
		}
	}
}

export {light, dark, blue};
export default {light, dark, blue};