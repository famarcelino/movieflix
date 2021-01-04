import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAccessTokenDecoded, logout } from 'core/utils/auth';
import './styles.scss';

const NavBar = () => {
    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();

    useEffect(() => {
        const currentUserData = getAccessTokenDecoded();
        setCurrentUser(currentUserData.user_name);
    }, [location]);

    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => { 
        event.preventDefault();
        logout();
    }

    return (
        <nav className="row bg-primary main-nav">
            <div className="col-10">
                <Link to="/" className="nav-logo-text">
                    <h4>MovieFlix</h4>
                </Link>
            </div>
            {currentUser && (
                <div className="col-2">
                    <a
                        href="#logout"
                        className="nav-link"
                        onClick={handleLogout}
                    >
                        sair
                    </a>
                </div>
            )}
        </nav>
    );
};

export default NavBar;