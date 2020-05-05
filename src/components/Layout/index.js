import React, { Component } from 'react'
import Child from './Child'
import {
  defaultColor,
  themeColorStorageKey,
  } from '../../constants/defaultValues'
import ColorSwitcher from '../common/ColorSwitcher'

class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = { Module: false }
  }
  componentDidMount() {
    const color =
      localStorage.getItem(themeColorStorageKey)
        ? localStorage.getItem(themeColorStorageKey)
        : defaultColor

    localStorage.setItem(themeColorStorageKey, color)

    const path = `./themes/${color}.scss`
    import(`${path}`).then(module => this.setState({ loading: true }))
  }
  render() {
    const { loading } = this.state
    return (
      <>
        <ColorSwitcher />
        {loading ? <Child {...this.props} /> : ''}
      </>
    )
  }
}

export default Layout
