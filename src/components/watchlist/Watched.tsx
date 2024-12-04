import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import MovieCard from './MovieCard'
import { Movie } from '../../types'

const Watched: React.FC = () => {

    const { watched } = useContext(GlobalContext);

    return (
        <div className="movie-page">
            <div className="movie-container">
                <div className="movie-header">
                    <h1 className="heading">
                        Watched Movies
                    </h1>

                    <span className='count-pill'>{watched.length} {watched.length === 1 ? "Movie" : "Movies"}</span>
                </div>
                {watched.length > 0 ?
                    (<div className="movie-grid">
                        <ul className='movie-list'>
                            {
                                watched.map((movie: Movie) => (
                                    <li key={movie.id}>
                                        <MovieCard movie={movie} type="watched" />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    )
                    : <p className='empty'>No Movie in the watchlist</p>
                }
            </div>
        </div>
    )
}

export default Watched
