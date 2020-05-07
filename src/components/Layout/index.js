import React, { Component } from 'react'
// import loadable from '@loadable/component';
import Child from './Child';
// const OtherComponent = loadable(() => import('./Child'))
const Layout = (props) => {
  
    return (
      <>
         <Child {...props} />
      </>
    )
}

export default Layout
