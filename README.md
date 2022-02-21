# yearn-web-themes

> base themes for Yearn's projects

[![NPM](https://img.shields.io/npm/v/yearn-web-themes.svg)](https://www.npmjs.com/package/yearn-web-themes) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save yearn-web-themes
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

## License

MIT © [Major](https://github.com/Major)
