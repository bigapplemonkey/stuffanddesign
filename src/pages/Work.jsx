import TitleEntry from '../animations/TitleEntry';
import transition from '../animations/Transition';
import jsonData from '../data.json';
import ScrollToTopButton from '../components/ScrollToTopButton';
import WorkGrid from '../components/WorkGrid';
import GridFilter from '../components/GridFilter';
import { useState } from 'react';

const Work = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const { works } = jsonData;
  const filteredWorks = selectedFilters.includes('All')
    ? works
    : works.filter(work => selectedFilters.includes(work.type));

  const duration = 0.7;
  const delay = 0.8;
  const delayGap = -0.4;

  const handleFilterUpdate = filterArray => {
    setSelectedFilters(filterArray);
  };

  return (
    <section className="work-container">
      <TitleEntry
        classes="section-title header-main"
        delay={delay}
        duration={duration}
        content="Our Work"
      />
      <GridFilter
        filters={[...new Set(works.map(work => work.type))]}
        onUpdate={handleFilterUpdate}
      />
      <WorkGrid works={filteredWorks} />
      <ScrollToTopButton
        duration={duration}
        delay={delay}
        delayGap={delayGap}
      />
    </section>
  );
};

export default transition(Work);
