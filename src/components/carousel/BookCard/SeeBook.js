import React, { Component } from 'react';
import '../carouselStyle.css';

class SeeBook extends Component{
  render() {
    return (
      <div className='SeeBook' style={this.props.color}>
        <button style={this.props.color}>Виж</button>
      </div>
    );
  }
}

export default SeeBook;