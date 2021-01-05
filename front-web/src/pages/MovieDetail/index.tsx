import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import CommentCard from '../Movies/components/CommentCard';
import { makePrivateRequest } from 'core/utils/request';
import { Movie } from 'core/types/Movie';
import { getSessionData, isAllowedByRole } from 'core/utils/auth';
import './styles.scss';

type ParamsType = {
    movieId: string;
}

type FormState = {
    text: string;
    userId: number;
    movieId: number;
}

const MovieDetail = () => {
    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();
    const { register, handleSubmit, errors } = useForm<FormState>();
    const [currentUser, setCurrentUser] = useState(0);
    const location = useLocation();
    const history = useHistory();

    const onSubmit = (data: FormState) => {
        makePrivateRequest({ url: '/reviews', method: 'POST', data })
            .then(() => {
                toast.info('Comentário inserido com sucesso!');
                history.push('/movies');
            })
            .catch(() => {
                toast.error('Erro ao inserir comentário!');
            });
    }

    useEffect(() => {
        const currentUserData = getSessionData();
        setCurrentUser(currentUserData.userId);
    }, [location]);

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
            {isAllowedByRole(['ROLE_MEMBER']) && (
                <div className="card-base border-radius-10 text-center movie-detail-form-comment">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <textarea
                                ref={register({ required: "Esse campo não pode ser vazio" })}
                                name="text"
                                rows={2}
                                placeholder="Deixe sua avaliação aqui"
                                className="movie-detail-form-input border-radius-10"
                            />
                            {errors.text && (
                                <div className="invalid-feedback d-block text-left">
                                    {errors.text.message}
                                </div>
                            )}
                        </div>
                        <div><input type="hidden" value={currentUser} name="userId" ref={register} /></div>
                        <div><input type="hidden" value={movieId} name="movieId" ref={register} /></div>
                        <button className="btn btn-primary movie-detail-form-button">salvar avaliação</button>
                    </form>
                </div>
            )}
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