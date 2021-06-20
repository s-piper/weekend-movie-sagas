import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';


function Details() {

    const movieInfo = useSelector(store => store.selectedPoster);
    const movieGenres = useSelector(store => store.genres)
    const history = useHistory();
    

    useEffect(() => {
        console.log('Details', movieInfo);;
    }, []);

    const goBack = () => {
        history.push('/');
    }

    console.log('Genres', movieGenres);


    return (
        <div>
            <h2> Movie Details</h2>
            <div className="poster">
            {/* maps out the returned genres from DB */}
            <img src={movieInfo.poster} width="185" height="274" />
            </div>

            <Button variant="contained" color="primary" onClick={goBack}>Back to List</Button>
            
            <div className="genre">
                <h4>Genres</h4>
                <p>
                    {movieGenres.map((item, i) => {
                        return (
                            <span key={i}>-{item.name}-</span>
                        )
                    })}
                </p>
            </div >
            <div className="description">
                <h4>Description</h4>
                <p>{movieInfo.desc}</p>
            </div>
        </div >
    )
}


export default Details;