import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('GET_DETAILS', fetchGenres);
    yield takeEvery('ADD_MOVIE', addMovie)

}

function* fetchAllMovies() {
    // Gets all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}
//Sends the selected movies Id to router and sends genre info to genres reducer
function* fetchGenres (action) {
    try{
        console.log('fetchGenres Payload:', action.payload);
        
        const genres = yield axios.get(`/api/genre/${action.payload}`);
        yield put({type: 'SET_GENRES', payload: genres.data});
    } catch {
        console.log('get genres error');
    }
}
//Sends the object from /movie and refreshes movies state
function* addMovie (action) {
    try{
        console.log('new movie', action.payload);
        const response = yield axios.post(`api/movie`, action.payload);
        yield put({type: 'FETCH_MOVIES'})
    } catch {
        console.log('addMovie error');
        
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
// SELECTED_POSTER case changes state to post image url
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}
//Holds poster url and description user selected
const selectedPoster = ( state = [], action) => {
    switch (action.type) {
        case 'SELECTED_POSTER':
            return action.payload;
        default:
            return state;
    }

}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        selectedPoster,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
