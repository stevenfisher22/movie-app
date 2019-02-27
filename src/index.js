import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MovieList from './components/MovieList';
import BaseLayout from './components/BaseLayout';
import Details from './components/Details';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/movie-list" component={MovieList} />
                <Route path="/movie-details" component={Details} />
            </Switch>
        </BaseLayout>
    </BrowserRouter>
    , document.getElementById('root'));
