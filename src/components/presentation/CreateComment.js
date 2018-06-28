import React, { Component } from 'react'

class CreateCommment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: {
        body: '',
        username: ''
      }
    }
  }

  updateComment (event) {
    let updatedComment = Object.assign({}, this.state.comment)
    updatedComment[event.target.id] = event.target.value
    this.setState({
      comment: updatedComment
    })
  }

  submitComment (event) {
    this.props.onCreate(this.state.comment)
  }

  render() {
    return (

      <div>
        <h3>Create Comment</h3>
        <input onChange={this.updateComment.bind(this)} id="username" className="form-control" type="text" placeholder="Username" /><br />
        <input onChange={this.updateComment.bind(this)} id="body" className="form-control" type="text" placeholder="Comment" /><br />
        <button onClick={this.submitComment.bind(this)} className="btn btn-info">Submit Comment</button>
      </div>
    )
  }
}

export default CreateCommment