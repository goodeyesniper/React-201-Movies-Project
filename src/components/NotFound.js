// 1. React 201 Assignment
import React from 'react';
import Hero from './Hero';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const homeUrl = "/";
  return (
    <>
      <Hero text={<h1>404 - Page Not Found</h1>}/>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="lead mb-5 fs-3">Oops! The page you are looking for does not exist.</p>
              <Link to={homeUrl} className="btn btn-primary">Go to Home </Link>
            </div>
          </div>
        </div>
    </>
  );
}

export default NotFound;
