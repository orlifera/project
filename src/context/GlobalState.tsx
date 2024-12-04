
import { createContext, useReducer, useEffect } from 'react';
import { Movie } from '../types';
import AppReducer from './AppReducer';

type GlobalContextType = {
    watchlist: Movie[],
    watched: Movie[],
    addMovieToWatchlist?: (movie: Movie) => void
    removeFromWatchlist?: (id: number) => void
    addToWatched?: (movie: Movie) => void
    removeFromWatched?: (id: number) => void
}

const initialState: GlobalContextType = {
    watchlist: localStorage.getItem('watchlist')
        ? JSON.parse(localStorage.getItem('watchlist') || '[]')
        : [],
    watched: localStorage.getItem('watched')
        ? JSON.parse(localStorage.getItem('watched') || '[]')
        : [],
};

export const GlobalContext = createContext<GlobalContextType>(initialState);


export const GlobalProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const addMovieToWatchlist = (movie: Movie) => {
        dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });
    };

    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(state.watchlist));

        localStorage.setItem("watched", JSON.stringify(state.watched));

    }, [state]);

    const removeFromWatchlist = (id: number) => {
        dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id });

    }

    const addToWatched = (movie: Movie) => {
        dispatch({ type: "ADD_MOVIE_TO_WATCHED", payload: movie })
    }

    const removeFromWatched = (id: number) => {
        dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHED', payload: id });

    }

    return (
        <GlobalContext.Provider
            value={{
                watchlist: state.watchlist,
                watched: state.watched,
                addMovieToWatchlist: addMovieToWatchlist,
                removeFromWatchlist: removeFromWatchlist,
                addToWatched: addToWatched,
                removeFromWatched: removeFromWatched
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
