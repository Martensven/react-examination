import { useState } from 'react';
import React from 'react';
import './Movies.css';
import searchIcon from './search.svg';
import MovieCard from './moviecard';

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=2bb43543';

const MovieSearch = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    //Vi skapar en asynkron funktion för att anropa API och hämta data.
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search);
    }

    return (
        <div className="movieApp">
            <h1>Mårtens Movies</h1>

            <div className="movieSearch">
                {/* Vi tar värdet från vårt inputfält så att vi kan använda det för att söka efter filmer med hjälp av title */}
                <input type="text"
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && searchMovies(searchTerm)}
                />
                <img
                    src={searchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0
                    ? (
                        <div className='movieContainer'>
                            {movies.map((movie) => (
                                // Här mappar vi ut listan med filmer och skapar ett element för varje film.
                                <MovieCard movie={movie} />
                            ))}
                        </div>
                    ) :
                    (
                        <div className="empty">
                            <h2>No movies found!</h2>
                        </div>
                    )
            }


        </div>
    )
}

export default MovieSearch