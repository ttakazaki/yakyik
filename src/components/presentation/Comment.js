import React, {Component} from 'react'

class Comment extends Component {
  render() {
    const {body, username, timestamp} = this.props.currentComment
    return (
      <div style={{marginBottom: 16}}>
        <p style={{fontSize: 20, fontWeight: 400}}>{body}</p>

        <span style={{fontWeight: 200}}>{username}</span>
        <span style={{fontWeight: 200, marginLeft: 12, marginRight: 12}}>|</span>
        <span style={{fontWeight: 200}}>{timestamp}</span>
        <hr/>
      </div>
    )
  }
}

export default Comment
