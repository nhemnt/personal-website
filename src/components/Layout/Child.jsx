import React from 'react'
import {
  defaultColor,
  themeColorStorageKey,
  } from '../../constants/defaultValues'
import ColorSwitcher from '../common/ColorSwitcher';
import Navbar from "../Navbar";

class Child extends React.Component {
  constructor(props) {
    super(props)
    this.state = { Module: false }
  }
  componentDidMount() {
    const color =
    typeof window !== undefined && localStorage.getItem(themeColorStorageKey)
        ? localStorage.getItem(themeColorStorageKey)
        : defaultColor
    if (typeof window !== undefined) {
      localStorage.setItem(themeColorStorageKey, color)  
    }
    const path = `./themes/${color}.scss`
    import(`${path}`).then(module => this.setState({ loading: true }))
  }
  render() {
    const { loading } = this.state
    const { children } = this.props
    return (
      <>
        {loading && <ColorSwitcher />}
        {children}
        <Navbar />
      </>
    )
  }
}

export default Child
