import { Link, useLocation } from 'react-router-dom';

const NavBar = ({ isHome }) => {
  const { pathname } = useLocation();

  return (
    <div className="nav-bar">
      {isHome === true ? (
        <Link
          className={`nav-link menu-button${pathname === '/' ? ' link-selected' : ''}`}
          to="/"
        >
          Home
        </Link>
      ) : (
        ''
      )}
      <Link
        className={`nav-link menu-button text-blue${pathname === '/work' ? ' link-selected' : ''}`}
        to="/work?filters=All"
      >
        Work
      </Link>
      <Link
        className={`nav-link menu-button text-blue${pathname === '/about' ? ' link-selected' : ''}`}
        to="/about"
      >
        About
      </Link>
      <Link
        className={`nav-link menu-button text-blue${pathname === '/contact' ? ' link-selected' : ''}`}
        to="/contact"
      >
        Contact
      </Link>
    </div>
  );
};

export default NavBar;
