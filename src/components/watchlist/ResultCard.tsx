import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import { Movie } from '../../types'

const ResultCard: React.FC<{ movie: Movie }> = ({ movie }) => {

    const { addMovieToWatchlist, addToWatched, watchlist, watched } = useContext(GlobalContext);
    let storedMovie = watchlist.find(o => o.id === movie.id);
    let watchedMovie = watched.find(o => o.id === movie.id);

    let watchlistDisabled = storedMovie || watchedMovie ? true : false;
    let watchedDisabled = watchedMovie ? true : false;

    return (
        <div className="result-card">
            <div className="poster-wrapper">


                {movie.poster_path ?
                    (
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
                    ) :
                    (
                        <div className="filler-poster">

                        </div>
                    )
                }
            </div>

            <div className="info">
                <div className="movie-header">
                    <h4 className="release-date">{movie.release_date ? movie.release_date.substring(0, 4) : "No Release date available"}</h4>
                </div>
            </div>

            <div className='controls'>
                <button className='btn btn-add' onClick={() => addMovieToWatchlist && addMovieToWatchlist(movie)}
                    disabled={watchlistDisabled}
                >
                    Add to Watchlist
                </button>

                <button className='btn btn-add' onClick={() => addToWatched && addToWatched(movie)}
                    disabled={watchedDisabled}
                >
                    Add to Watched
                </button>
            </div>
        </div>
    )
}

export default ResultCard
