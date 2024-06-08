import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import config from '../config';

const ScrollToTopButton = ({ isDark = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const duration = config.ANIMATION.FILTER_BUTTON_DURATION;
  const ease = config.ANIMATION.CUBIC_BEZIER;

  const circleAnimation = useAnimation();
  const iconAnimation = useAnimation();

  const hoverInColor =
    isDark === true ? config.STYLES.APP_WHITE : config.STYLES.APP_BLUE;
  const hoverOutColor =
    isDark === true ? config.STYLES.APP_BLUE : config.STYLES.APP_WHITE;

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.div
        className={`back-to-top ${isVisible ? 'visible' : ''}`}
        ref={ref}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration, ease }}
      >
        <hr className="break-line" />
        <motion.button
          className="to-top-button"
          onClick={scrollToTop}
          whileHover={() => {
            circleAnimation.start({
              borderColor: hoverOutColor,
              backgroundColor: hoverInColor,
              transition: { duration, ease },
            });
            iconAnimation.start({
              fill: hoverOutColor,
              transition: { duration, ease },
            });
          }}
          onHoverEnd={() => {
            circleAnimation.start({
              borderColor: hoverInColor,
              backgroundColor: '#e2eaf4', //hoverOutColor <--- Fix
              transition: { duration, ease },
            });
            iconAnimation.start({
              fill: hoverInColor,
              transition: { duration, ease },
            });
          }}
        >
          <motion.div className="up-arrow" animate={circleAnimation}>
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 40 49"
            >
              <defs>
                <clipPath id="clippath">
                  <rect
                    className="cls-2"
                    x=".8"
                    y=".1"
                    width="38.4"
                    height="48.6"
                  />
                </clipPath>
              </defs>
              <g className="cls-1">
                <motion.path
                  className="cls-3"
                  initial={{ fill: hoverInColor }}
                  animate={iconAnimation}
                  d="M38.4,15.6L20,.6,1.6,15.6c-.2.2-.2.5,0,.7.2.2.5.2.7,0L19.5,2.3v45.3c0,.3.2.5.5.5s.5-.2.5-.5V2.3l17.3,14c0,0,.2.1.3.1s.3,0,.4-.2c.2-.2.1-.5,0-.7Z"
                />
              </g>
            </svg>
          </motion.div>
          <motion.div
            className="body-large"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{
              duration,
              ease,
            }}
          >
            BACK TO TOP
          </motion.div>
        </motion.button>
      </motion.div>
    </>
  );
};

export default ScrollToTopButton;
