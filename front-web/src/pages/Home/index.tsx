import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { ReactComponent as MainImage } from '../../core/assets/images/main-image.svg';
import ButtonIcon from '../../core/components/ButtonIcon';
import { saveSessionData } from '../../core/utils/auth';
import { makeLogin } from '../../core/utils/request';
import './styles.scss';

type FormData = {
    username: string;
    password: string;
};

const Home = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const [hasError, setHasError] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const history = useHistory();

    const onSubmit = (data: FormData) => {
        makeLogin(data)
            .then(response => {
                setHasError(false);
                setIsLogged(true);
                saveSessionData(response.data);
                history.push('/movies');
            })
            .catch(() => {
                setIsLogged(false);
                setHasError(true);
            });
    }

    return (
        <div className="home-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="row home-content">
                <div className="col-6">
                    <h1 className="home-title">Avalie Filmes</h1>
                    <p className="home-subtitle">
                        Faça parte do nosso catálogo de divulgação
                        e aumente a venda dos seus produtos.
                    </p>
                    <MainImage />
                </div>

                <div className="col-6 login-content card-base">
                    <h1 className="login-title">login</h1>
                    {hasError && (
                        <div className="alert alert-danger mt-5">
                            Usuário ou senha inválidos!
                        </div>
                    )}
                    {isLogged ? (
                        <div>
                            <p>Teste</p>
                        </div>
                    ) : (
                            <form className="login-form">
                                <input
                                    type="email"
                                    className="form-control input-base margin-bottom-30"
                                    placeholder="Email"
                                    name="username"
                                    ref={register({ required: true })}
                                />
                                <input
                                    type="password"
                                    className="form-control input-base"
                                    placeholder="Senha"
                                    name="password"
                                    ref={register({ required: true, minLength: 5 })}
                                />
                                <div className="login-button">
                                    <ButtonIcon text="logar" />
                                </div>
                            </form>
                        )}
                </div>
            </div>
        </div>
    );
};

export default Home;