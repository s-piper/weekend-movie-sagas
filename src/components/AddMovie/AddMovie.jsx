import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';



function AddMovie() {

    const history = useHistory();
    const dispatch = useDispatch();

    //Grabs values from inputs
    const [newTitle, setNewTitle] = useState('');
    const [url, setUrl] = useState('');
    const [desc, setDesc] = useState('');
    const [genre, setGenre] = useState(0);

    const handleSave = () => {
        //Consolidates input data into object headed to router
        const newMovie = {
            title: newTitle,
            poster: url,
            description: desc,
            genre_id: genre
        }
        //Sends object to router
        dispatch({ type: 'ADD_MOVIE', payload: newMovie });
        //Returns users to MovieList
        history.push('/');
    }

    return (

        <div>
            <h2>Add a Movie</h2>
            <FormControl>
                <TextField
                    required
                    onChange={(event) => setNewTitle(event.target.value)}
                    id="standard-basic"
                    label="Movie Title" />
                <TextField
                    required
                    onChange={(event) => setUrl(event.target.value)}
                    id="standard-basic"
                    label="Poster URL" />
                <TextField
                    required
                    onChange={(event) => setDesc(event.target.value)}
                    id="standard-basic"
                    label="Description" />

                <Select onChange={(event) => setGenre(event.target.value)}>

                    <MenuItem id="Adventure" value="1">Adventure</MenuItem>
                    <MenuItem id="Animated" value="2">Animated</MenuItem>
                    <MenuItem id="Biographical" value="3">Biographical</MenuItem>
                    <MenuItem id="Comedy" value="4">Comedy</MenuItem>
                    <MenuItem id="Disaster" value="5">Disaster</MenuItem>
                    <MenuItem id="Drama" value="6">Drama</MenuItem>
                    <MenuItem id="Epic" value="7">Epic</MenuItem>
                    <MenuItem id="Fantasy" value="8">Fantasy</MenuItem>
                    <MenuItem id="Musical" value="9">Musical</MenuItem>
                    <MenuItem id="Romantic" value="10">Romantic</MenuItem>
                    <MenuItem id="Science Fiction" value="11">Science Fiction</MenuItem>
                    <MenuItem id="Space-Opera" value="12">Space-Opera</MenuItem>
                    <MenuItem id="Superhero" value="13">Superhero</MenuItem>
                </Select>
            </FormControl>
            <div>
                <h1></h1>
            </div>
            <div>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => history.push('./')}>
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSave}>
                    Save
                </Button>
            </div>

        </div>
    )
}

export default AddMovie;