import React from 'react'
export default React.createClass({
  render() {
  	console.log(this.props)
    return (
      <div>
        <h2>repoName: {this.props.params.repoName}</h2>
        <h2>userName: {this.props.params.userName}</h2>
      </div>
    )
  }
})