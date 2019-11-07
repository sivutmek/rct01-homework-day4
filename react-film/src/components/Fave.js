import React, { Component } from 'react';

class Fave extends Component {
  // state = {
  //   isFave: false
  // }

  handleClick = e => {
    e.stopPropagation();
    console.log('Handling Fave click!');
    // this.setState({
    //   isFave: !this.state.isFave
    // })
    this.props.onFaveToggle();
  }

  render() {
    return (
      <div className={"film-row-fave " + (this.props.isFave ? "remove_from_queue" : "add_to_queue")} onClick={this.handleClick}>
        <p className="material-icons">add_to_queue</p>
      </div>
    )
  }
}

export default Fave;