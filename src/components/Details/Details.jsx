import React, {useEffect} from 'react';
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom';

function Details(){

    const poster = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        console.log('Details', poster);;
    }, []);

    const goBack = () =>{
        history.push('./')
    }
    

    return(
        <div>
            <h3> Movie Details</h3>

            <button onClick={goBack}>Movie List</button>

            <img src={poster} />
        </div>
    )
}


export default Details;