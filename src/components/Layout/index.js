import React from 'react'
import Child from './Child'
import { ThemeProvider } from 'styled-components'
import themes from './themes'
import { GlobalStyles } from './GlobalStyles'
import ColorSwitcher from '../common/ColorSwitcher'
import { connect } from 'react-redux'

const Layout = props => {
  return (
    <ThemeProvider theme={themes[props.theme]}>
      <GlobalStyles />
      <ColorSwitcher />
      <Child {...props} />
    </ThemeProvider>
  )
}

const mapStateToProps = ({ theme }) => {
  return { theme }
}

export default connect(mapStateToProps, null)(Layout)
