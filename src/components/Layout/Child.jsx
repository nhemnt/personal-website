import React  from 'react'
class Child extends React.Component {
  
  render() {

    const { children } = this.props
    return (
      <>
        {children}
      </>
    )
  }
}

export default Child
