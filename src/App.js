import {useEffect, useState} from "react";
import MovieCard from "./MovieCard";
import './App.css';
import SearchIcon from './search.svg';
const Api_Url='http://www.omdbapi.com?apikey=2ae4e7c3';

const App = () => {

    const [movies,setmovies] = useState([]);
    const [searchTerm, setsearchTerm] = useState('');

    const searchmovies = async (title) => {
        const response = await fetch (`${Api_Url}&s=${title}`);
        const data = await response.json();

        setmovies(data.Search);
    } 
    useEffect(() => {
        searchmovies('leo');
    },[])

    return (
        <div className="app">
            <h1>FilmCart</h1>

            <div className="search">
                <input 
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setsearchTerm(e.target.value)}
                />

                <img 
                src={SearchIcon} 
                alt="Search" 
                onClick={() => searchmovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 
            ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>

            ) : (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )}

        </div>
    );
}

export default App;