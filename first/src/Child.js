import React, { Component } from 'react';

class Child extends Component {
  render() {
    return (
      <div className="Child">
      {this.props.blanket}
      </div>
    );
  }
}

export default Child;
