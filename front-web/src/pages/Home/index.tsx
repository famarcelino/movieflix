import { getAccessTokenDecoded } from 'core/utils/auth';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as MainImage } from '../../core/assets/images/main-image.svg';
import Login from './components/Login';
import WelcomeBack from './components/WelcomeBack';
import './styles.scss';

const Home = () => {
    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();

    useEffect(() => {
        const currentUserData = getAccessTokenDecoded();
        setCurrentUser(currentUserData.user_name);
    }, [location]);

    return (
        <div className="home-container" >
            <div className="row home-content">
                <div className="col-6">
                    <h1 className="home-title">Avalie Filmes</h1>
                    <p className="home-subtitle">
                        Faça parte do nosso catálogo de divulgação
                        e aumente a venda dos seus produtos.
                    </p>
                    <MainImage />
                </div>

                <div className="col-6">
                    {currentUser ? (
                        <WelcomeBack />
                    ) : (
                        <Login />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;