import React from 'react'
import themes from 'yearn-web-themes'

function	ColorBox({color, hex, name}) {
	return (
		<div className={'flex flex-col col-span-1'}>
			<div className={`overflow-hidden relative my-1 w-24 h-24 border border-gray-blue-3`} style={{background: color}} />
			<p className={'mt-1 text-sm text-gray-blue-2'}>{hex}</p>
			{name ? <p className={'text-sm font-bold text-dark-blue-1'}>{name}</p> : <p className={'text-sm font-bold text-dark-blue-1'}>&nbsp;</p>}
		</div>
	);
}
function	ColorPalette({theme}) {
	return (
		<div className={'mb-10 w-full'}>
			<div className={'grid grid-cols-6 gap-4 gap-y-6 w-full'}>
				<ColorBox color={theme.colors['background']} hex={theme.colors['background']} name={'background'} />
				<ColorBox color={theme.colors['background-variant']} hex={theme.colors['background-variant']} name={'background-variant'} />
				<ColorBox color={theme.colors['surface']} hex={theme.colors['surface']} name={'surface'} />
				<ColorBox color={theme.colors['surface-variant']} hex={theme.colors['surface-variant']} name={'surface-variant'} />
				<ColorBox color={theme.colors['primary']} hex={theme.colors['primary']} name={'primary'} />
				<ColorBox color={theme.colors['primary-variant']} hex={theme.colors['primary-variant']} name={'primary-variant'} />
				<ColorBox color={theme.colors['secondary']} hex={theme.colors['secondary']} name={'secondary'} />
				<ColorBox color={theme.colors['titles']} hex={theme.colors['titles']} name={'titles'} />
				<ColorBox color={theme.colors['titles-variant']} hex={theme.colors['titles-variant']} name={'titles-variant'} />
				<ColorBox color={theme.colors['texts']} hex={theme.colors['texts']} name={'texts'} />
				<ColorBox color={theme.colors['icons']} hex={theme.colors['icons']} name={'icons'} />
				<ColorBox color={theme.colors['icons-variant']} hex={theme.colors['icons-variant']} name={'icons-variant'} />
			</div>
		</div>
	);
}

const App = () => {
  const [theme, set_theme] = React.useState(themes.light)
  return (
	<div className='w-full max-w-screen-lg mx-auto pt-10'>
		<div className={'p-6 w-full bg-white'}>
			<div className={'flex flex-row justify-between mb-8'}>
				<div className={'flex flex-row items-center'}>
					<div className={'mr-4 w-4 h-4 mt-1 rounded-sm'} style={{background: theme.colors.primary}} />
					<h1 className={'text-4xl font-bold text-dark-blue-1'}>{'Yearn Theme System'}</h1>
				</div>
				<div>
					<select
						onChange={(e) => {
							if (e.target.value === 'light') set_theme(themes.light)
							else if (e.target.value === 'dark') set_theme(themes.dark)
							else if (e.target.value === 'blue') set_theme(themes.blue)
						}}
						className={'relative py-1 w-33 text-light-primary-variant bg-light-secondary rounded-md border-none focus:border-none outline-none focus:outline-none ring-0 focus:ring-0 cursor-pointer'}>
						<option className={'capitalize'} value={themes.light.name}>{themes?.light?.name || ''}</option>
						<option className={'capitalize'} value={themes.dark.name}>{themes?.dark?.name || ''}</option>
						<option className={'capitalize'} value={themes.blue.name}>{themes?.blue?.name || ''}</option>
					</select>
				</div>
			</div>
			<ColorPalette theme={theme} />
		</div>
	</div>
  );
}

export default App
