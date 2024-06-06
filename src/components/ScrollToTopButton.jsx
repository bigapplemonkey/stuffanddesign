import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import config from '../config';

const ScrollToTopButton = ({
  duration = 0.5,
  delay = 0,
  delayGap = 0,
  isDark = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const circleAnimation = useAnimation();
  const iconAnimation = useAnimation();
  const hoverInColor = isDark === true ? config.APP_WHITE : config.APP_BLUE;
  const hoverOutColor = isDark === true ? config.APP_BLUE : config.APP_WHITE;

  // Detect window scroll position for button visibility
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 100); // Show button only after scrolling past 100px
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    // Cleanup function to remove event listener on component unmount
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
        transition={{ duration, delay: delay - delayGap, ease: 'easeOut' }}
      >
        <hr
          className="break-line"
          //   initial={{ transformOrigin: 'left', scaleX: 0 }}
          //   animate={{ scaleX: inView ? 1 : 0 }}
          //   transition={{ duration, delay: delay - delayGap, ease: 'easeOut' }}
        />
        <motion.button
          className="to-top-button"
          onClick={scrollToTop}
          whileHover={() => {
            circleAnimation.start({
              borderColor: hoverOutColor,
              backgroundColor: hoverInColor,
              transition: { duration: 0.2, ease: 'easeIn' },
            });
            iconAnimation.start({
              fill: hoverOutColor,
              transition: { duration: 0.2, ease: 'easeIn' },
            });
          }}
          onHoverEnd={() => {
            circleAnimation.start({
              borderColor: hoverInColor,
              backgroundColor: hoverOutColor,
              transition: { duration: 0.2, ease: 'easeOut' },
            });
            iconAnimation.start({
              fill: hoverInColor,
              transition: { duration: 0.2, ease: 'easeIn' },
            });
          }}
        >
          <motion.div className="up-arrow" animate={circleAnimation}>
            {/* <img src={upArrow} alt="Up arrow icon" /> */}
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
              delay: delay - delayGap + 0.1,
              ease: 'easeOut',
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
