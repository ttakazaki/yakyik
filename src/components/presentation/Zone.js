import React, { Component } from 'react'
import styles from './styles'

class Zone extends Component {
  
  render() {
    const style = styles.zone
    const { name, zipCodes, numComments } = this.props.currentZone
    const zipCode = zipCodes[0]

    return (
      <div style={style.container}>
        <h2 style={style.header}>
          <a style={style.title} href="#">{name}</a>
        </h2>
        <span className="detail">{zipCode}</span><br />
        <span className="detail">{numComments} comments</span>
      </div>
    )
  }
}

export default Zone