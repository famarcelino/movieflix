import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { ReactComponent as MovieImage } from '../../core/assets/images/movie.svg';
import './styles.scss';
import CommentCard from '../Movies/components/CommentCard';

type ParamsType = {
    movieId: string;
}

const MovieDetail = () => {
    const { movieId } = useParams<ParamsType>();

    console.log(movieId);

    return (
        <div className="movie-detail-container">
            <div className="movie-detail-content card-base border-radius-10">
                <div className="row">
                    <div className="col-6">
                        <MovieImage className="movie-detail-image" />
                    </div>
                    <div className="col-6 movie-detail">
                        <h1 className="movie-detail-title">O Retorno do Rei</h1>
                        <h2 className="movie-detail-year">2013</h2>
                        <p className="movie-detail-subtitle">O olho do inimigo está se movendo.</p>
                        <p className="movie-detail-synopse">
                            O confronto final entre as forças do bem e do mal que lutam pelo controle do
                            futuro da Terra Média se aproxima. Sauron planeja um grande ataque a Minas Tirith,
                            capital de Gondor, o que faz com que Gandalf e Pippin partam para o local na
                            intenção de ajudar a resistência. Um exército é reunido por Theoden em Rohan,
                            em mais uma tentativa de deter as forças de Sauron. Enquanto isso, Frodo,
                            Sam e Gollum seguem sua viagem rumo à Montanha da Perdição para destruir o anel.
                    </p>
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
                <CommentCard />
                <CommentCard />
                <CommentCard />
            </div>
        </div>
    );
};

export default MovieDetail;