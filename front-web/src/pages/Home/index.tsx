import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory /*, useLocation */ } from 'react-router-dom';
import { ReactComponent as MainImage } from '../../core/assets/images/main-image.svg';
import ButtonIcon from '../../core/components/ButtonIcon';
import { saveSessionData } from '../../core/utils/auth';
import { makeLogin } from '../../core/utils/request';
import './styles.scss';

type FormData = {
    username: string;
    password: string;
};
/*
type LocationState = {
    from: string;
}
*/
const Home = () => {
    const { register, handleSubmit, errors } = useForm<FormData>();
    const [hasError, setHasError] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const history = useHistory();

    //const location = useLocation<LocationState>();
    //const { from } = location.state || {from: { pathname: "/"}};

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
                                <div className="margin-bottom-30">
                                    <input
                                        type="email"
                                        className={`form-control input-base ${errors.username ? 'is-invalid' : ''}`}
                                        placeholder="Email"
                                        name="username"
                                        ref={register({
                                            required: "Campo obrigatório",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Email inválido"
                                            }
                                        })}
                                    />
                                    {errors.username && (
                                        <div className="invalid-feedback d-block">
                                            {errors.username.message}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        className={`form-control input-base ${errors.password ? 'is-invalid' : ''}`}
                                        placeholder="Senha"
                                        name="password"
                                        ref={register({ required: "Campo obrigatório" })}
                                    />
                                    {errors.password && (
                                        <div className="invalid-feedback d-block">
                                            {errors.password.message}
                                        </div>
                                    )}
                                </div>
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