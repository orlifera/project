import React, { useState } from 'react'
import ResultCard from './ResultCard.tsx';
import { Movie } from '../../types';

const AddMovie: React.FC = () => {

    const [query, setQuery] = useState<string>('');
    const [results, setResults] = useState([]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=it_IT&page=1&adult=false&query=${e.target.value}`).then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    setResults(data.results);
                } else {
                    setResults([]);
                }
            })

    }

    //fetches everytime i type a letter

    return (
        <div className='add-page'>
            <div className='container'>
                <div className='add-content'>
                    <div className='input-wrapper'>
                        <h1 className='title'>Cerca un film!</h1>
                        <input
                            className='search-movie'
                            onChange={onChange}
                            value={query}
                            type="text"
                            placeholder="Search for a movie"
                        />
                    </div>
                    {results.length > 0 && (
                        <ul className='results-list'>
                            {results.map((movie: Movie) => (
                                <li key={movie.id} className='result-li'>
                                    <ResultCard movie={movie} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div >
    )
}

export default AddMovie
