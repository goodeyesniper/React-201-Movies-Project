import { useState, useEffect } from 'react';
import Hero from './Hero';
import { useParams } from 'react-router-dom';

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWQ2MjFjMDczMTdjODNiOWYwNmFlNGZhNzUxOTEyYiIsIm5iZiI6MTczODMwNTc2NC40MDUsInN1YiI6IjY3OWM3MGU0MTZmZjgzMmU1N2JkZGZkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.sKk3rlW-OQPRa-KuqJBZFbgcPjXPVJAblzP2WdWOiX4'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        setMovieDetails(json);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
      });
  }, [id]);

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    if (movieDetails) {
        // TO DO: write code if the return image is null
        const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
        const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
        return (
          <>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="row">
              <div className="col-12 col-md-6 mb-3">
                <img src={posterPath} alt="Movie Poster" className="img-fluid shadow rounded" />
              </div>
              <div className="col-12 col-md-6 mb-3">
                <h2>{movieDetails.original_title}</h2>
                <p className="lead">{movieDetails.overview}</p>
              </div>
            </div>
          </div>
        </>
        );
    }
    return <p>No movie details found.</p>;
  }

  return renderMovieDetails();
};

export default MovieView;