import TitleEntry from '../animations/TitleEntry';
import transition from '../animations/transition';
import FilterButton from '../components/FilterButton';
import WorkCard from '../components/WorkCard';
import config from '../config';
import jsonData from '../data.json';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Work = () => {
  const { works } = jsonData;

  const [cardsPerRow, setCardsPerRow] = useState(3);

  const duration = 0.5;
  const delay = 0.8;

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
        transition={{ duration, delay: delay - 0.2 }}
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
            transition={{ duration, delay: delay - 0.2 }}
          />
        );
      }
    }
    // if (works.length % cardsPerRow !== 0) {
    //   elements.push(<hr key="hr-end" className="break-line" />);
    // }
    return elements;
  };

  return (
    <section className="work-container">
      <TitleEntry
        classes="section-title header-main"
        delay={delay}
        duration={duration}
        content="Our Work"
      />
      <div className="work-filters">
        {works.map(work => (
          <FilterButton key={work.type} content={work.type} />
        ))}
      </div>
      <div className="work-grid">{workCards()}</div>
    </section>
  );
};

export default transition(Work);
