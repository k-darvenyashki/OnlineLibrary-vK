import { INPUT_TEXT_CHANGE, ADD_SELECTED_MOVIE } from "./types";

export function changeInputText(payload) {
    return ({type: INPUT_TEXT_CHANGE, payload });
}

export function changeSelectedMovies(payload) {
    return ({ type: ADD_SELECTED_MOVIE, payload });
}