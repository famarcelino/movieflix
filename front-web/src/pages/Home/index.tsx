import React from 'react';
import { ReactComponent as MainImage } from '../../core/assets/images/main-image.svg';
import ButtonIcon from '../../core/components/ButtonIcon';
import './styles.scss';

const Home = () => {
    return (
        <div className="home-container">
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
                    <form className="login-form">
                        <input
                            type="email"
                            className="form-control input-base margin-bottom-30"
                            placeholder="Email"
                        />
                        <input
                            type="password"
                            className="form-control input-base"
                            placeholder="Senha"
                        />
                        <div className="login-button">
                            <ButtonIcon text="logar" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;