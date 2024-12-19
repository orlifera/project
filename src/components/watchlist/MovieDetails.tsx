import React, { useEffect, useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState'
import { Movie } from '../../types';
import { useParams } from 'react-router-dom';


const MovieDetails: React.FC = () => {
    const { title } = useParams();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [error, setError] = useState<string | null>(null);

    const { addMovieToWatchlist, addToWatched, watchlist, watched } = useContext(GlobalContext);
    let storedMovie = watchlist.find(o => o.id === movie?.id);
    let watchedMovie = watched.find(o => o.id === movie?.id);

    let watchlistDisabled = storedMovie || watchedMovie ? true : false;
    let watchedDisabled = watchedMovie ? true : false;


    useEffect(() => {
        const fetchMovieByTitle = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=it_IT&query=${encodeURIComponent(title || '')}`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch movie details.");
                }
                const data = await response.json();

                // Assuming the first match is the desired movie
                const matchedMovie = data.results.find((m: Movie) =>
                    m.title.toLowerCase() === decodeURIComponent(title || '').replace(/-/g, ' ').toLowerCase()
                );

                if (!matchedMovie) {
                    throw new Error("Movie not found.");
                }

                // Fetch detailed data using the ID
                const detailsResponse = await fetch(
                    `https://api.themoviedb.org/3/movie/${matchedMovie.id}?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en&append_to_response=credits`
                );
                if (!detailsResponse.ok) {
                    throw new Error("Failed to fetch detailed movie data.");
                }

                const detailedData: Movie = await detailsResponse.json();
                setMovie(detailedData);
            } catch (err) {
                setError(err instanceof Error ? err.message : "An unexpected error occurred.");
            }
        };

        fetchMovieByTitle();
    }, [title]);

    if (error) return <div className="error-message">{error}</div>;
    if (!movie) return <div>Loading...</div>;

    return (
        <div className="movie-details">
            <h1 className='movie-title'>{movie.title}</h1>
            <img
                className='poster'
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`${movie.title} Poster`}
            />
            <article className='plot'>{movie.overview}</article>

            {movie.credits?.cast && movie.credits.cast.length > 0 ? (
                <>
                    <h3 className='actors'>Actors</h3>
                    <ul>
                        {movie.credits.cast.slice(0, 20).map((actor) => (
                            <li key={actor.id}>
                                <p className='actor-name'>{actor.name}</p>
                            </li>
                        ))}
                    </ul>
                    <div className='controls'>
                        <button className='btn btn-add' onClick={() => addMovieToWatchlist && addMovieToWatchlist(movie)}
                            disabled={watchlistDisabled}
                        >
                            Add to watchlist
                        </button>

                        <button className='btn btn-add' onClick={() => addToWatched && addToWatched(movie)}
                            disabled={watchedDisabled}
                        >
                            Add to watched
                        </button>
                    </div>

                </>
            ) : (
                <p>No actor information available.</p>
            )}
        </div>
    );
};

export default MovieDetails;
