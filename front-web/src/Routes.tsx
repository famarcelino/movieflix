import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './core/components/NavBar';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/Movies';

const Routes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route path="/" exact><Home /></Route>
                <Route path="/movies"><Movies /></Route>
                <Route path="/movieDetail"><MovieDetail /></Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;