import config from '../config';
import { motion } from 'framer-motion';

const FilterButton = ({ content, onUpdate, isSelected }) => {
  const handleClick = () => {
    onUpdate(content);
  };
  const duration = config.ANIMATION.FILTER_BUTTON_DURATION;
  const ease = config.ANIMATION.CUBIC_BEZIER;

  return (
    <motion.button
      className="filter-button filter-text"
      onClick={handleClick}
      initial={{
        backgroundColor: config.STYLES.APP_WHITE,
        color: config.STYLES.APP_BLUE,
        gap: 0,
      }}
      animate={{
        backgroundColor: isSelected
          ? config.STYLES.APP_BLUE
          : config.STYLES.APP_WHITE,
        color: isSelected ? config.STYLES.APP_WHITE : config.STYLES.APP_BLUE,
        gap: isSelected ? '0.5rem' : 0,
      }}
      transition={{ duration, ease }}
    >
      <span className="move-text">{content}</span>
      <motion.div
        className="close-icon"
        initial={{ opacity: 0, width: 0 }}
        animate={{
          opacity: isSelected ? 1 : 0,
          width: isSelected ? '1.7rem' : 0,
        }}
        transition={{ duration, ease }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" fill="none">
          <path
            d="M7.07108 7.42892L21.2132 21.5711"
            stroke={config.STYLES.APP_WHITE}
            strokeWidth="1.2"
          />
          <path
            d="M7.07108 21.5711L21.2132 7.42892"
            stroke={config.STYLES.APP_WHITE}
            strokeWidth="1.2"
          />
        </svg>
      </motion.div>
    </motion.button>
  );
};

export default FilterButton;
