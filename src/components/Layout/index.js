import React, { useState } from 'react'
import Child from './Child'
import { ThemeProvider } from 'styled-components'
import themes from './themes'
import colors from '../../constants/colors'
import { defaultColor } from '../../constants/defaultValues'
import {GlobalStyles} from './GlobalStyles'; 
import ColorSwitcher from '../common/ColorSwitcher'

const Layout = props => {
  const [theme, setTheme] = useState(colors['DARK_BLUE'])
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyles />
      <ColorSwitcher selectedColor={theme} setTheme={setTheme} />
      <Child {...props} />
    </ThemeProvider>
  )
}

export default Layout
