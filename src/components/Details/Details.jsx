import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

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
            <h3> Movie Details</h3>
            <div className="poster">
            {/* maps out the returned genres from DB */}
            <img src={movieInfo.poster} />
            </div>

            <button onClick={goBack}>Back to List</button>
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