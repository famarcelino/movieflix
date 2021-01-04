import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import './styles.scss';
import CommentCard from '../Movies/components/CommentCard';
import { makePrivateRequest } from 'core/utils/request';
import { Movie } from 'core/types/Movie';

type ParamsType = {
    movieId: string;
}

const MovieDetail = () => {
    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        makePrivateRequest({ url: `/movies/${movieId}` })
            .then(response => setMovie(response.data));
    }, [movieId]);

    return (
        <div className="movie-detail-container">
            <div className="movie-detail-content card-base border-radius-10">
                <div className="row">
                    <div className="col-6">
                        <img src={movie?.imgUrl} alt={movie?.title} className="movie-detail-image" />
                    </div>
                    <div className="col-6 movie-detail">
                        <h1 className="movie-detail-title">{movie?.title}</h1>
                        <h2 className="movie-detail-year">{movie?.year}</h2>
                        <p className="movie-detail-subtitle">{movie?.subTitle}</p>
                        <p className="movie-detail-synopse">{movie?.synopsis}</p>
                    </div>
                </div>
            </div>

            <div className="card-base border-radius-10 text-center movie-detail-form-comment">
                <form>
                    <div>
                        <textarea
                            name="description"
                            rows={2}
                            placeholder="Deixe sua avaliação aqui"
                            className="movie-detail-form-input border-radius-10"
                        />
                    </div>
                    <button className="btn btn-primary movie-detail-form-button">salvar avaliação</button>
                </form>
            </div>

            <div className="card-base border-radius-10 movie-detail-comments">
                {
                    movie?.reviews.map(review => (
                        <CommentCard reviews={review} />
                    ))
                }
            </div>
        </div>
    );
};

export default MovieDetail;