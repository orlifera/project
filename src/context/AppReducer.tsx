
import { Movie } from "../types";

export default (state: any, action: any) => {
    switch (action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            }
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return {
                ...state,
                watchlist: state.watchlist.filter((movie: Movie) => movie.id !== action.payload)
            }

        case "ADD_MOVIE_TO_WATCHED":
            return {
                ...state,
                watchlist: state.watchlist.filter((movie: Movie) => movie.id !== action.payload.id),
                watched: [action.payload, ...state.watched]
            }

        case "REMOVE_MOVIE_FROM_WATCHED":
            return {
                ...state,
                watched: state.watched.filter((movie: Movie) => movie.id !== action.payload)
            }
        default:
            return state;
    }
}

