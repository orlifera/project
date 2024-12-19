import React, { useContext } from 'react'
import { Movie } from '../../types';
import { GlobalContext } from '../../context/GlobalState';
import { Link } from 'react-router-dom';

interface MovieCardProps {
    movie: Movie;
    type: string;
}

const MovieControls: React.FC<MovieCardProps> = ({ movie, type }) => {

    const { removeFromWatchlist, addToWatched, removeFromWatched } = useContext(GlobalContext);


    return (
        <div className='inner-card-controls'>

            {type === 'watchlist' &&
                <>
                    <button className="ctrl-btn"
                        onClick={() => addToWatched && addToWatched(movie)}>
                        <i className="fa-fw far fa-eye"></i>
                    </button>

                    <button className="ctrl-btn"
                        onClick={() => removeFromWatchlist && removeFromWatchlist(movie.id)}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                    <Link to={`/movie/${movie.id}`} className="details-link">
                        More Details
                    </Link>
                </>
            }
            {type === 'watched' &&
                (
                    <>
                        <button className="ctrl-btn"
                            onClick={() => removeFromWatched && removeFromWatched(movie.id)}>
                            <i className="fa-fw far fa-eye-slash"></i>
                        </button>
                        <Link to={`/movie/${encodeURIComponent(movie.title.replace(/\s+/g, '-').toLowerCase())}`} className="details-link">
                            More Details
                        </Link>

                    </>
                )
            }

        </div>
    )
}

export default MovieControls
