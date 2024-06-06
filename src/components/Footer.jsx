import MarqueeText from './MarqueeText';
import NavBar from './NavBar';
import { ReactComponent as LogoSVG } from '../assets/logo_v3.svg';
import jsonData from '../data.json';
import { Link } from 'react-router-dom';
import MediaLinks from './MediaLinks';

const Footer = () => {
  return (
    <footer className="footer">
      <hr className="break-line" />
      <div className="footer-content">
        <div className="footer-nav">
          <div className="body-large">EXPLORE</div>
          <NavBar isHome={true} />
        </div>
        <div className="footer-contact">
          <a href={`mailto:${jsonData.personal.email}`} className="mail-link">
            <div className="body-large">CONTACT US</div>
            <div className="subheadline-small">{jsonData.personal.email}</div>
          </a>
          <MediaLinks />
        </div>
        <div className="footer-logo">
          <Link to="/">
            <LogoSVG className="logo" alt="Logo" />
            <div className="body-small">© 2024</div>
          </Link>
        </div>
      </div>
      <MarqueeText text="Creativity. Technology. Design." />
    </footer>
  );
};

export default Footer;
