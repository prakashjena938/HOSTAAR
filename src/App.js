// import logo from './logo.svg';
import './App.css';
import Moviecard from './componentes/Moviecard';
import { useEffect, useState } from "react";
import iconsearch from "./search.svg";
// import { HashRouter as Router } from "react-router-dom";

const defaultmovie = [
    {
        "Title": "Batman Begins",
        "Year": "2005",
        "imdbID": "tt0372784",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODIyMDdhNTgtNDlmOC00MjUxLWE2NDItODA5MTdkNzY3ZTdhXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "The Batman",
        "Year": "2022",
        "imdbID": "tt1877830",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMmU5NGJlMzAtMGNmOC00YjJjLTgyMzUtNjAyYmE4Njg5YWMyXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Batman v Superman: Dawn of Justice",
        "Year": "2016",
        "imdbID": "tt2975590",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTJkYjdmYjYtOGMyNC00ZGU1LThkY2ItYTc1OTVlMmE2YWY1XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Batman",
        "Year": "1989",
        "imdbID": "tt0096895",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzZmZWViM2EtNzhlMi00NzBlLWE0MWEtZDFjMjk3YjIyNTBhXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Batman Returns",
        "Year": "1992",
        "imdbID": "tt0103776",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTliMDVkYTktZDdlMS00NTAwLWJhNzYtMWIwMDZjN2ViMGFiXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Batman & Robin",
        "Year": "1997",
        "imdbID": "tt0118688",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYzU3ZjE3M2UtM2E4Ni00MDI5LTkyZGUtOTFkMGIyYjNjZGU3XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Batman Forever",
        "Year": "1995",
        "imdbID": "tt0112462",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTUyNjJhZWItMTZkNS00NDc4LTllNjUtYTg3NjczMzA5ZTViXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "The Lego Batman Movie",
        "Year": "2017",
        "imdbID": "tt4116284",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"
    },
    {
        "Title": "Batman: The Animated Series",
        "Year": "1992–1995",
        "imdbID": "tt0103359",
        "Type": "series",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjgwZWUzMzUtYTFkNi00MzM0LWFkMWUtMDViMjMxNGIxNDUxXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
        "Year": "2016",
        "imdbID": "tt18689424",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
    },
    {
        "Title": "Iron Man",
        "Year": "2008",
        "imdbID": "tt0371746",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg"
    },
    {
        "Title": "Iron Man 3",
        "Year": "2013",
        "imdbID": "tt1300854",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjIzMzAzMjQyM15BMl5BanBnXkFtZTcwNzM2NjcyOQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Iron Man 2",
        "Year": "2010",
        "imdbID": "tt1228705",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYWYyOGQzOGYtMGQ1My00ZWYxLTgzZjktZWYzN2IwYjkxYzM0XkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
        "Title": "The Man in the Iron Mask",
        "Year": "1998",
        "imdbID": "tt0120744",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDc4YWYzNzEtNWMwMC00Y2ZlLWEzZWEtZDcwYjcwYTE3Y2ZlXkEyXkFqcGc@._V1_SX300.jpg"
    }
]
// const dfilm = []

const URL = "https://www.omdbapi.com/?i=tt3896198&apikey=35b57794";

const App = () => {
    const [movies, setmovie] = useState(defaultmovie);
    // const [film, setfilm] = useState(dfilm)
    const [movieterm, setmovieterm] = useState("");



    //useeffect
    useEffect(() => {
        if (movieterm) {
            searchmovie(movieterm);
        }
        else if (movieterm===" "){
         setmovie(defaultmovie);
        }
        else {
            setmovie(defaultmovie);
        }
    }, [movieterm]);


    //search
    const searchmovie = async (tittle) => {
        const setmovieterm = await fetch(`${URL}&s=${tittle}`);
        const data = await setmovieterm.json();
        if (data.Search) {
            setmovie(data.Search);
        }
        else {
            setmovie([])

        }
    }

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            searchmovie(movieterm);
        }
    };



    return (
        // <Router>
            <div className='app'>
                <h1>Hostaar</h1>
                <div className="search" >
                    <input
                        placeholder='Search for a movie'
                        value={movieterm}
                        onChange={(e) => setmovieterm(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                    <img src={iconsearch} alt="search" onClick={() => searchmovie(movieterm)} />
                </div>
                {
                    movies.length > 0 ? (
                        <div className='container'>
                            {movies.map((movie) => (
                                <Moviecard movie={movie} key={movie.imdbID} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
                }
            </div>
        // </Router>
    );
}

export default App;