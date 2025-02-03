import { useNavigate, Link } from 'react-router-dom';

const Navbar = ({ searchText, setSearchText }) => {
  const navigate = useNavigate();
  
  const updateSearchText = (e) => {
    setSearchText(e.target.value);
    if (e.target.value.length > 0) {
      navigate('/search');
    }
  };

  // 4. React 201 Assignment
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate('/search');
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Movie Browser</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" aria-disabled="true" to="/">Coming Soon</Link>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearchSubmit}> {/* 4. React 201 Assignment - onSubmit placed here to cater both clicking and pressing the enter key instead of placing it on the button element. */}
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchText} onChange={updateSearchText} />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;