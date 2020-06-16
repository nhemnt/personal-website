import React from 'react'
import Navbar from '../Navbar'
import MainNavbar from '../Navbar/main'
import BuyCoffee from '../BuyCoffee'
import { StyledLayout } from './styles'

const Child = props => {
  const { children } = props
  return (
    <StyledLayout>
      <MainNavbar {...props} />
      {children}
      <BuyCoffee />
      <Navbar />
    </StyledLayout>
  )
}

export default Child
