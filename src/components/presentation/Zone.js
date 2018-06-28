import React, { Component } from 'react'
import styles from './styles'

class Zone extends Component {

  onSelectTitle (event) {
    event.preventDefault()
    console.log('onSelectTitle: ' + this.props.index)
    this.props.select(this.props.index)
  }
  
  render() {
    const style = styles.zone
    const { name, zipCodes,numComments } = this.props.currentZone
    const zipCode = zipCodes[0]
    const title = (this.props.isSelected) ? <a style={style.title} href="#">{name}</a> : <a href="#">{name}</a>

    return (
      <div style={style.container}>
        <h2 onClick={this.onSelectTitle.bind(this)} style={style.header}>
          {title}
        </h2>
        <span className="detail">{zipCode}</span><br />
        <span className="detail">{numComments} comments</span>
      </div>
    )
  }
}

export default Zone