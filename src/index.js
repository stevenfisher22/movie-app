import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import BaseLayout from './components/BaseLayout';

ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/movie-list" component={MovieList} />
            </Switch>
        </BaseLayout>
    </BrowserRouter>
    , document.getElementById('root'));
