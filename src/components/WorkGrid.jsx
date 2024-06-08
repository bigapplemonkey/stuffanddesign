import WorkCard from '../components/WorkCard';
import GridFilter from '../components/GridFilter';
import jsonData from '../data.json';
import { useState, useEffect } from 'react';
import config from '../config';
import ScrollToTopButton from './ScrollToTopButton';

const WorkGrid = () => {
  const [cardsPerRow, setCardsPerRow] = useState(3);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const { works } = jsonData;
  const filteredWorks = selectedFilters.includes('All')
    ? works
    : works.filter(work => selectedFilters.includes(work.type));

  const handleFilterUpdate = filterArray => {
    setSelectedFilters(filterArray);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > config.STYLES.DESKTOP_BREAK_POINT + 1) {
        setCardsPerRow(3);
      } else if (width > config.STYLES.MOBILE_BREAK_POINT + 1) {
        setCardsPerRow(2);
      } else {
        setCardsPerRow(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="work-grid">
      <GridFilter
        filters={[...new Set(works.map(work => work.type))]}
        onUpdate={handleFilterUpdate}
      />
      <div className="work-cards">
        {filteredWorks.map((work, index) => (
          <>
            <WorkCard key={work.title + (index + 1)} work={work} />
            {(index + 1) % cardsPerRow === 0 &&
              index + 1 !== filteredWorks.length && (
                <hr className="break-line" />
              )}
          </>
        ))}
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default WorkGrid;
