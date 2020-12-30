import React from 'react';
import { ReactComponent as MovieImage } from '../../../../core/assets/images/movie.svg';
import './styles.scss';

const MovieCard = () => {
    return (
        <div className="card-base border-radius-10 movie-card">
            <MovieImage />
            <div className="movie-info">
                <h6 className="movie-name">O retorno do rei</h6>
                <h6 className="movie-year">2013</h6>
                <p className="movie-synopse">O olho do inimigo está se movendo.</p>
            </div>
        </div>
    );
};

export default MovieCard;