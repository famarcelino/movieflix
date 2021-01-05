import ButtonIcon from 'core/components/ButtonIcon';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const WelcomeBack = () => {
    return (
        <div className="card-base welcome-content">
            <h1 className="welcome-title">Bem vindo de volta!</h1>
            <Link to="/movies">
                <div className="welcome-button">
                    <ButtonIcon text="Ver lista de filmes" />
                </div>
            </Link>
        </div>
    );
};

export default WelcomeBack;