// import { createContext, useReducer } from "react"
// import { Movie } from '../types';
// import reducers from "./reducers"

// type GlobalContextType = {
//     watchlist: Movie[],
//     watched: Movie[]
// }

// const initialState: GlobalContextType = {
//     watchlist: [],
//     watched: []
//     addMovieToWatchlist,
//     removeMovieFromWatchlist,
//     addMovieToWatched,
//     removeMovieFromWatched,
// };

// const GlobalContext = createContext<GlobalContextType>(initialState);

// const GlobalProvider = ({ children }: any) => {
//     const [state, dispatch] = useReducer(reducers, initialState);

//     const addMovieToWatchlist = (movie: Movie) => {
//         dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });
//     };

//     const removeMovieFromWatchlist = (id: number) => {
//         dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id });
//     };

//     const addMovieToWatched = (movie: Movie) => {
//         dispatch({ type: 'ADD_MOVIE_TO_WATCHED', payload: movie });
//     };

//     const removeMovieFromWatched = (id: number) => {
//         dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHED', payload: id });
//     };

//     return (
//         <GlobalContext.Provider
//             value={{
//                 watchlist: state.watchlist,
//                 watched: state.watched,
//                 addMovieToWatchlist,
//                 removeMovieFromWatchlist,
//                 addMovieToWatched,
//                 removeMovieFromWatched,
//             }}
//         >
//             {children}
//         </GlobalContext.Provider>
//     );
// };

// export default GlobalProvider;