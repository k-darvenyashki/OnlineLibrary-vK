import React, { Component } from 'react';
import Best from './bestOf/Best';
import BookShelf from './bookShelf/BookShelf';
import { connect } from "react-redux";


class Home extends Component {
    render() {
        return (
          <div className='Main'>
            <Best></Best>
            <BookShelf></BookShelf>
          </div>
        );
      }
}

const mapStateToProps = state => {
  return {
      inputText: state.inputText,
      selectedMovies: state.selectedMovies
  }
};

export default connect(mapStateToProps)(Home);