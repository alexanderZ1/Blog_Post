//RCE = template

import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class Navbar extends Component {

    static propTypes = {
        // title: PropTypes.string.isRequired, 
        title: PropTypes.number.isRequired
       }
  render() {
    return (
      <nav className='nav_1'>
        <h1> {this.props.title}</h1>
      </nav>
    )
  }
}

export default Navbar