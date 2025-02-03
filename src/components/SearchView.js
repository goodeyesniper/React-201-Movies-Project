import Hero from './Hero';
import { Link } from 'react-router-dom';
import ErrorPage from './ErrorPage'

const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path // 2. React 201 Assignment - add global image for non-exisiting image
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/photo_unavailable.jpg';

    // let posterUrl;
    // if (movie.poster_path) {
    //   posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    // } else {
    //   posterUrl = 'photo_unavailable.jpg';
    // }

  const detailUrl = `/movies/${movie.id}`;

  return (
    <div className="col-lg-3 col-md-6 my-4">
      <div className="card">
        <img src={posterUrl} className="card-img-top" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>
          <Link to={detailUrl} className="btn btn-primary">Show Details</Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for "${keyword}"`;
  const resultsHtml = searchResults.map((movie, i) => (
    <MovieCard movie={movie} key={i} />
  ));
  
  return (
    <>
      <Hero text={title} />
      {resultsHtml.length > 0 ? (
        <div className="container">
          <div className="row">{resultsHtml}</div>
        </div>
      ) : (
        <div className="container my-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <ErrorPage /> {/* 3. React 201 Assignment - error page for non-existing movies */} 
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchView;