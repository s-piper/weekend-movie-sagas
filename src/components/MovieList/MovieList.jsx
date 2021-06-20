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
    },[]);

    
    //Pushes to details page and makes GET request for movie details
    //SELECTED_POSTER contains clicked img url
    const handleClick = (event) => {
        console.log('clicked movie', event);

        const movieInfo = {poster: event.poster, desc: event.description}

        dispatch({type:'GET_DETAILS', payload: event.id });
        dispatch({type:'SELECTED_POSTER', payload: movieInfo});
    //Pushes to detail page
        history.push('/details',)
    }

    return (
        <main>
            <h1>MovieList</h1>
            <div>
                <button onClick ={event => history.push('/movie')}>
                    Add New Movie
                </button>
            </div>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} width="185" height="274"  onClick={event => handleClick(movie)}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;