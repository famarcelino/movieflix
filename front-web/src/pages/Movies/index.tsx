import React from 'react';
import MovieCard from './components/MovieCard';
import './styles.scss';

const Movies = () => {
    return (
        <div className="movie-container">
            <div className="movie-filter border-radius-10">
                <h2>Aventura</h2>
            </div>
            <div className="movies-list">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </div>
    );
};

export default Movies;