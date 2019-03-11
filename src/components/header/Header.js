import React, { Component } from 'react';
import './headerStyle.css';
import BrowseCategory from './BrowseCategory';
import SearchBook from './SearchBook';
import Title from './Title';
import User from './User';
import Menu from './Menu';

//import { NavLink as RRNavLink } from 'react-router-dom';  

class HeaderComponent extends Component {
    render () {
        return (
          <header>
            <BrowseCategory></BrowseCategory>
            <SearchBook></SearchBook>
            <Title></Title>
            <User></User>
            <Menu></Menu>
          </header>
        );
      }
}
export default HeaderComponent;