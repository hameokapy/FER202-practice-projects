import React from 'react'

class Welcome extends React.Component {

  render() {
    return (
      <>
        <h1>Hello {this.props.name}</h1>
        <h2>I am {this.props.age}</h2>
      </>
    )
  }
}

export default Welcome;