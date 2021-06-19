import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom'
import './MovieList.css'

function MovieList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);


    //pushes to details page and makes GET request for movie details
    //SELECTED_POSTER contains clicked img url
    const handleClick = (event) => {
        console.log('clicked movie', event);

        dispatch({type:'GET_DETAILS', payload: event.id });
        dispatch({type:'SELECTED_POSTER', payload: event.poster});
    //pushes to detail page
        history.push('/details',)
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}  onClick={event => handleClick(movie)}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;