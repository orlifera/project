import React, { useContext } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';
import MovieCard from './MovieCard';

const WatchlistPage: React.FC = () => {
    const location = useLocation();
    const { watchlist } = useContext(GlobalContext);
    console.log(location.pathname);

    const isWatchlistPage = location.pathname === '/watchlist';
    return (
        <>

            {
                isWatchlistPage && (
                    <div className="movie-page">
                        <div className="movie-container">
                            <div className="movie-header">
                                <h1 className="heading">
                                    My Watchlist
                                </h1>

                                <span className='count-pill'>{watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}</span>
                            </div>
                            {watchlist.length > 0 ?
                                (<div className="movie-grid">
                                    <ul className='movie-list'>
                                        {
                                            watchlist.map(movie => (
                                                <li key={movie.id}>
                                                    <MovieCard movie={movie} type="watchlist" />
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>)
                                : <p className='empty'>No Movie in the watchlist</p>
                            }
                        </div>
                    </div>
                )
            }

            <Outlet />
        </>

    )
}

export default WatchlistPage
