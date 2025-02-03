// 3. React 201 Assignment - error page for non-existing movies

import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = ({ message }) => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12 text-center">
          <p className="lead fs-1 pb-5"><strong>No results found.</strong></p>
          <p className="lead">{message}</p>
          <Link to="/" className="btn btn-primary">Go to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
