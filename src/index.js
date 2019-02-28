import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MovieList from './components/MovieList';
import BaseLayout from './components/BaseLayout';
import MovieDetails from './components/MovieDetails';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import movieList from './reducers/movieList';

const store = createStore(movieList, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <BaseLayout>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/movie-list" component={MovieList} />
                    <Route path="/movie-details/:id" component={MovieDetails} />
                </Switch>
            </BaseLayout>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
