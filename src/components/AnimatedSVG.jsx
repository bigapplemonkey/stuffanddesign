import { motion, useAnimation } from 'framer-motion';
import config from '../config';

const AnimatedSVG = ({ iconPath, isDark = false, altProp }) => {
  const hoverInColor =
    isDark === true ? config.STYLES.APP_WHITE : config.STYLES.APP_BLUE;
  const hoverOutColor =
    isDark === true ? config.STYLES.APP_BLUE : config.STYLES.APP_WHITE;
  const duration = 0.2;

  const circleAnimation = useAnimation();
  const iconAnimation = useAnimation();

  return (
    <motion.svg
      //   width="100%"
      //   height="100%"
      viewBox="0 0 36 36"
      alt={altProp}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover={() => {
        circleAnimation.start({
          fill: hoverInColor,
          stroke: hoverOutColor,
          transition: { duration, ease: 'easeIn' },
        });
        iconAnimation.start({
          fill: hoverOutColor,
          transition: { duration, ease: 'easeIn' },
        });
      }}
      onHoverEnd={() => {
        circleAnimation.start({
          fill: hoverOutColor,
          stroke: hoverInColor,
          transition: { duration, ease: 'easeOut' },
        });
        iconAnimation.start({
          fill: hoverInColor,
          transition: { duration, ease: 'easeIn' },
        });
      }}
    >
      <g id="github">
        <motion.circle
          id="circle"
          cx={18}
          cy={18}
          r={17.4}
          stroke="#0018DF"
          strokeWidth={1.2}
          initial={{ fill: hoverOutColor, stroke: hoverInColor }}
          animate={circleAnimation}
          //   whileHover={{ stroke: 'red' }} // Animate stroke color on hover
        />
        <g id="icon">
          {iconPath.map((path, index) => (
            <motion.path
              key={`path${index + 1}`}
              id={`path${index + 1}`}
              d={iconPath}
              initial={{ fill: hoverInColor }}
              animate={iconAnimation}
            />
          ))}
        </g>
      </g>
    </motion.svg>
  );
};

export default AnimatedSVG;
