import React from 'react';
import { 
    ListGroup,
    ListGroupItem,
    Button 
    } from 'reactstrap';
import { bindActionCreators } from "redux";
import * as actions  from "../../redux/actions";

import { connect } from "react-redux";

class MovieList extends React.Component {
    onSelectedMovie = movie => {
        const selectedMovies = this.props.selectedMovies;

        this.props.changeSelectedMovies([...selectedMovies, movie]);
    }
    renderMovieItems = () => {
        const movieList = this.props.movies.map(movie => {
            return <ListGroupItem 
                className="d-flex 
                align-items-center
                justify-content-between" 
                key={movie.id}>
                <span>{movie.title}</span>
                <div className="d-flex align-items-center">
                    <span className="mr-3">{movie.releaseYear}</span>
                    <Button color="success"
                    onClick={() => this.onSelectedMovie(movie)}
                    >+</Button>
                </div>
             
            </ListGroupItem>
        })
        return movieList
    }

    render = () =>
    <ListGroup className="mt-3">
        {this.renderMovieItems()}
    </ListGroup>
};

const mapStateToProps = state => {
    return {
        selectedMovies: state.selectedMovies
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

)(MovieList);