import config from '../config';
import { motion } from 'framer-motion';

const FilterButton = ({ content, onUpdate, isSelected }) => {
  const handleClick = () => {
    onUpdate(content);
  };

  const duration = 0.3;
  return (
    <motion.button
      className="filter-button body-large"
      onClick={handleClick}
      initial={{
        backgroundColor: config.APP_WHITE,
        color: config.APP_BLUE,
        gap: 0,
      }}
      animate={{
        backgroundColor: isSelected ? config.APP_BLUE : config.APP_WHITE,
        color: isSelected ? config.APP_WHITE : config.APP_BLUE,
        gap: isSelected ? '0.5rem' : 0,
      }}
      transition={{ duration }}
    >
      {content}
      <motion.div
        className="close-icon"
        initial={{ opacity: 0, width: 0 }}
        animate={{
          opacity: isSelected ? 1 : 0,
          width: isSelected ? '1.7rem' : 0,
        }}
        transition={{ duration }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" fill="none">
          <path
            d="M7.07108 7.42892L21.2132 21.5711"
            stroke={config.APP_WHITE}
            strokeWidth="1.2"
          />
          <path
            d="M7.07108 21.5711L21.2132 7.42892"
            stroke={config.APP_WHITE}
            strokeWidth="1.2"
          />
        </svg>
      </motion.div>
    </motion.button>
  );
};

export default FilterButton;
