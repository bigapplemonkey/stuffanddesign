import NavBar from './NavBar';
import { ReactComponent as LogoSVG } from '../assets/logo_v3.svg';
import { Link } from 'react-router-dom';
// import emoji from '../assets/icons/hi-emoji.png';
// import { motion, useAnimation } from 'framer-motion';
// import jsonData from '../data.json';

const Navigation = ({ workAvailable }) => {
  // const controls = useAnimation();
  return (
    <>
      <div className="fixed-bar">
        <Link to="/">
          <LogoSVG className="logo" alt="Logo" />
        </Link>
        <NavBar isHome={true} />
      </div>
      {/* <a href={`mailto:${jsonData.personal.email}`} className="mail-link">
        <motion.div
          className="work-status"
          whileHover={() =>
            controls.start({
              rotate: [-15, 15, -15, 15, -15],
              scale: 1.2,
              transition: { duration: 0.4 },
            })
          }
          onHoverEnd={() => controls.start({ scale: 1 })}
        >
          <motion.img
            src={emoji}
            alt="Hi emoji"
            className="hi-emoji"
            animate={controls}
          />
          <div className="status">
            <motion.svg
              className="light"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="7"
              viewBox="0 0 6 7"
              fill="none"
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            >
              <circle cx="3" cy="3.5" r="3" fill="#00FF00" />
            </motion.svg>
            <div className="status-text body-small">
              Available
              <br />
              for work
            </div>
          </div>
        </motion.div>
      </a> */}
    </>
  );
};

export default Navigation;
