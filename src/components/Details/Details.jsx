import { Container } from '@material-ui/core';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom';

function Details(){

    const movieInfo = useSelector(store => store.movies);
    const movieGenres = useSelector(store => store.genres)
    const history = useHistory();

    useEffect(() => {
        console.log('Details', movieInfo);;
    }, []);

    const goBack = () =>{
        history.push('./')
    }

    console.log('Genres', movieGenres);
    

    return(
        <div>
            <h3> Movie Details</h3>

            <button onClick={goBack}>Movie List</button>

            <img src={movieInfo.poster} />
            <div>
                <h4>Genres</h4>
                    {movieGenres.map((item, i)=> {
                        return(
                            <p key={i}>{item.name}</p>
                        )
                    })}
            </div>
        </div>
    )
}


export default Details;