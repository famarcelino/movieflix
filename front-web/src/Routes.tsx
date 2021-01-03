import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import NavBar from './core/components/NavBar';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/Movies';
import history from './core/utils/history';

const Routes = () => {
    return (
        <Router history={history}>
            <NavBar />
            <Switch>
                <Route path="/" exact><Home /></Route>
                <Route path="/movies" exact><Movies /></Route>
                <Route path="/movies/:movieId"><MovieDetail /></Route>
            </Switch>
        </Router>
    );
};

export default Routes;