import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MoviesResponse } from '../../core/types/Movie';
import { makePrivateRequest } from '../../core/utils/request';
import MovieCard from './components/MovieCard';
import MovieCardLoader from './components/Loaders/MovieCardLoader';
import './styles.scss';
import Pagination from 'core/components/Pagination';

const Movies = () => {
    const [moviesResponse, setMoviesResponse] = useState<MoviesResponse>();
    const [isLoading, setIsLoading] = useState(false);
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        const params = {
            page: activePage,
            size: 8
        };
        setIsLoading(true);
        makePrivateRequest ({ url: '/movies', params })
            .then(response => setMoviesResponse(response.data))
            .finally(() => {
                setIsLoading(false);
            });
    }, [activePage]);

    return (
        <div className="movie-container">
            <div className="movie-filter border-radius-10">
                <h2>Aventura</h2>
            </div>
            <div className="movies-list">
                {isLoading ? <MovieCardLoader /> : (
                    moviesResponse?.content.map(movie => (
                        <Link to={`/movies/${movie.id}`} key={movie.id}>
                            <MovieCard movie={movie} />
                        </Link>
                    ))
                )}
            </div>
            {moviesResponse && <Pagination
                size={moviesResponse.totalPages}
                activePage={activePage}
                onChange={page => setActivePage(page)}
            />}
        </div>
    );
};

export default Movies;