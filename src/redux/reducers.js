

import { combineReducers } from "redux";
import { INPUT_TEXT_CHANGE, ADD_SELECTED_MOVIE } from "./types";

function inputTextReducer(state = "", action) {
    if (action.type === INPUT_TEXT_CHANGE) {
        return action.payload;
    }

    return state;
}

function selectedMoviesReducer(state = [], action) {
    if (action.type === ADD_SELECTED_MOVIE) {
        return [...action.payload];
    }

    return state;
}

export default combineReducers({
    inputText: inputTextReducer,
    selectedMovies: selectedMoviesReducer
});