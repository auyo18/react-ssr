import React, {Component} from 'react'
import {Link} from "react-router-dom"
import withStyle from '../../withStyle'
import styles from './index.scss'

class Header extends Component {
  render() {
    return (
        <div className={styles.header}>
          <Link to='/'>Home</Link>
          <br/>
          <Link to='/login'>Login</Link>
        </div>
    )
  }
}

export default withStyle(Header, styles)
