# yearn-web-themes

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Theming system for Yearn Finance and associated projects.  
A theme is a set of colors (could expand). A theme object looks like this
```js
{
	name: 'light',
	colors: {
		'background':		'#F4F7FB',
		'background-variant':	'#E0EAFF',
		'surface':		'#FFFFFF',
		'surface-variant':	'#F9FBFD',
		'primary':		'#0657F9',
		'primary-variant':	'#004ADF',
		'secondary':		'#E0EAFF',
		'titles':		'#001746',
		'titles-variant':	'#0657F9',
		'texts':		'#7F8DA9',
		'icons':		'#CED5E3',
		'icons-variant':	'#475570'
	}
}
```

Support themes are `light`, `dark` and `blue`.

## Install

```bash
yarn add @yearn/yearn-web-themes@1.0.0
```

## Usage

```jsx
import React, { Component, useState } from 'react'
import themes from 'yearn-web-themes'

class Example extends Component {
  const [theme, set_theme] = React.useState(themes.light)
  render() {
    return (
      <div className={'my-box-className'} style={{background: theme.colors.background}}>
        <h1 style={{color: theme.colors.title}}>Hello World</h1>
      </div>
    )
  }
}
```
