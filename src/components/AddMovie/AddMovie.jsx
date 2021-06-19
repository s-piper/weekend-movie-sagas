function AddMovie (){

    return(

        <div>
            <h2>Add a Movie</h2>
            <form>
                <input
                required
                placeholder="Movie Title" />
                <input
                required
                placeholder="Poster URL" />
                <input
                required
                placeholder="Description" />
                <select>
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

        </div>
    )
}

export default AddMovie;