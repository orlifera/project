import React from 'react'
import { Movie } from '../../types'
import MovieControls from './MovieControls';



interface MovieCardProps {
    movie: Movie;
    type: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, type }) => { //types goes to the React element not the props 
    return (
        <div className='movie-card'>
            <div className="overlay"></div>

            {movie.poster_path ?
                (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`} />
                ) :
                (
                    <div className="filler-poster">

                    </div>
                )
            }

            <MovieControls type={type} movie={movie} />

        </div>

    )
}

export default MovieCard
