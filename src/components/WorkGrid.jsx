import WorkCard from '../components/WorkCard';
import config from '../config';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WorkGrid = ({ works }) => {
  const [cardsPerRow, setCardsPerRow] = useState(3);

  const duration = 0.7;
  const delay = 0.8;
  const delayGap = -0.4;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > config.DESKTOP_BREAK_POINT + 1) {
        setCardsPerRow(3);
      } else if (width > config.MOBILE_BREAK_POINT + 1) {
        setCardsPerRow(2);
      } else {
        setCardsPerRow(1);
      }
    };

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Initial call to handleResize
    handleResize();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const workCards = () => {
    const elements = [];
    elements.push(
      <motion.hr
        key="hr-start"
        className="break-line"
        initial={{ transformOrigin: 'left', scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration, delay: delay - delayGap, ease: 'easeOut' }}
      />
    );
    for (let i = 0; i < works.length; i++) {
      elements.push(
        <WorkCard
          key={works[i].title + (i + 1)}
          work={works[i]}
          delay={delay - 0.3}
          duration={duration}
        />
      );
      if ((i + 1) % cardsPerRow === 0 && i !== works.length - 1) {
        elements.push(
          <motion.hr
            key={`hr-${i}`}
            className="break-line"
            initial={{ transformOrigin: 'left', scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration, delay: delay - delayGap, ease: 'easeOut' }}
          />
        );
      }
    }
    return elements;
  };

  return <div className="work-grid">{workCards()}</div>;
};

export default WorkGrid;
