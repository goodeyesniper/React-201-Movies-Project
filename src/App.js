import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/navbar';
import Home from './components/Home';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import NotFound from './components/NotFound'; // 1. React 201 Assignment - return page for 404 pages
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchText) {
      const url = `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`;
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        }
      };

      fetch(url, options)
        .then(res => res.json())
        .then(json => {
          setSearchResults(json.results);
        })
        .catch(err => console.error(err));
    }
  }, [searchText]);

  return (
    <>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults} />} />
        <Route path="/movies/:id" element={<MovieView />} />
        <Route path="*" element={<NotFound />} /> {/* 1. React 201 Assignment - return page for 404 pages */}
      </Routes>
    </>
  );
}

export default App;