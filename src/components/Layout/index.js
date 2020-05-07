import React, { Component } from 'react'
import loadable from '@loadable/component';

const OtherComponent = loadable(() => import('./Child'))
const Layout = (props) => {
  
    return (
      <>
         <OtherComponent {...props} />
      </>
    )
}

export default Layout
