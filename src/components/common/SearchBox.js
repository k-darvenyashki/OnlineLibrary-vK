import React from 'react';
import SearchField from './SearchField';
import MovieList from './MovieList';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions";

class SearchBox extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            movies: [],
            filteredMovies: [],
            searchValue: '',
        }
    }
    componentDidMount = async () => {
        const response = await this.fetchMovies();
        this.setState({
            movies: response,
            filteredMovies: response
        })
    }
    searchValueChanged = event => {
        const inputValue = event.target.value;
        this.setState({
            searchValue: inputValue,
            filteredMovies: this.getRemainingMovies(inputValue)
        });

        this.props.changeInputText(inputValue);
    }
    getRemainingMovies = searchValue => {
        const remainingMovies = 
        this.state.movies.filter( movie => {
            return movie.title.toLowerCase()
            .indexOf(searchValue.toLowerCase()) !== -1 
            || movie.releaseYear.indexOf(searchValue) !== -1;
        })
        return remainingMovies;
    }
    fetchMovies = async () => {
        try {
            const response = await fetch(
              'https://facebook.github.io/react-native/movies.json',
            );
            const responseJson = await response.json();
            return responseJson.movies;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
    render = () => 
    <div className="search-box-container">
        <SearchField 
            searchValue={this.state.searchValue}
            searchValueChanged={this.searchValueChanged}
        />
        <MovieList movies={this.state.filteredMovies}/>
    </div>
}

const mapStateToProps = state => {
    return {
        inputText: state.inputText
    }
};

const mapStateToDispatch = dispatch =>  
    bindActionCreators({
        changeInputText: actions.changeInputText,
        changeSelectedMovies: actions.changeSelectedMovies
    }, dispatch)


export default connect(
    mapStateToProps,
    mapStateToDispatch
)(SearchBox);