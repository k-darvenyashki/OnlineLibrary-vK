import React, { Component } from 'react';
import '../carouselStyle.css';

class BookCover extends Component{
  render() {
    return (
      <div className='Cover'>
        <img src={require('../../home/bookShelf/booksImgs/' + this.props.img)} />
      </div>
    );
  }
}

export default BookCover;