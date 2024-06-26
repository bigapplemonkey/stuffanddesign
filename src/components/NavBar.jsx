import { Link, useLocation } from 'react-router-dom';

const NavBar = ({ isHome }) => {
  const { pathname } = useLocation();

  return (
    <div className="nav-links">
      {isHome === true ? (
        <Link
          className={`nav-link body-large text-blue${pathname === '/' ? ' link-selected' : ''}`}
          to="/"
        >
          Home
        </Link>
      ) : (
        ''
      )}
      <Link
        className={`nav-link body-large text-blue${pathname === '/work' ? ' link-selected' : ''}`}
        to="/work?filters=All"
      >
        Work
      </Link>
      <Link
        className={`nav-link body-large text-blue${pathname === '/about' ? ' link-selected' : ''}`}
        to="/about"
      >
        About
      </Link>
      <Link
        className={`nav-link body-large text-blue${pathname === '/contact' ? ' link-selected' : ''}`}
        to="/contact"
      >
        Contact
      </Link>
    </div>
  );
};

export default NavBar;
