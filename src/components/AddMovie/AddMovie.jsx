import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'

function AddMovie (){

    const history = useHistory();
    const dispatch = useDispatch();

    const [newTitle, setNewTitle] = useState('');
    const [url, setUrl] = useState('');
    const [desc, setDesc] = useState('');
    const [genre, setGenre] = useState(0);

    const handleSave = () =>{

        const newMovie ={
            title: newTitle,
            poster: url,
            description: desc,
            genre_id: genre
        }

        dispatch({type:'ADD_MOVIE', payload: newMovie});
    }

    return(

        <div>
            <h2>Add a Movie</h2>
            <form>
                <input
                required
                placeholder="Movie Title"
                onChange={(event) => setNewTitle(event.target.value)}/>
                <input
                required
                placeholder="Poster URL" 
                onChange={(event) => setUrl(event.target.value)}/>
                <input
                required
                placeholder="Description" 
                onChange={(event) => setDesc(event.target.value)}/>
                <select onChange={(event) => setGenre(event.target.value)}>
                    <option id="default">Select Genre</option>
                    <option id="Adventure" value="1">Adventure</option>
                    <option id="Animated" value="2">Animated</option>
                    <option id="Biographical" value="3">Biographical</option>
                    <option id="Comedy" value="4">Comedy</option>
                    <option id="Disaster" value="5">Disaster</option>
                    <option id="Drama" value="6">Drama</option>
                    <option id="Epic" value="7">Epic</option>
                    <option id="Fantasy" value="8">Fantasy</option>
                    <option id="Musical" value="9">Musical</option>
                    <option id="Romantic" value="10">Romantic</option>
                    <option id="Science Fiction" value="11">Science Fiction</option>
                    <option id="Space-Opera" value="12">Space-Opera</option>
                    <option id="Superhero" value="13">Superhero</option>
                </select>
            </form>
            <div>
                <button onClick={()=> history.push('./')}>
                    Cancel
                </button>
                <button onClick={handleSave}>
                    Save
                </button>
            </div>

        </div>
    )
}

export default AddMovie;