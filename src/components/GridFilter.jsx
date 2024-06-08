import FilterButton from '../components/FilterButton';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const GridFilter = ({ filters, onUpdate }) => {
  const [selectedFilters, setSelectedFilters] = useState(['All']);
  const [filterParams, setFilterParams] = useSearchParams();

  // console.log('in grid', selectedFilters);

  useEffect(() => {
    let initialFilter = ['All'];
    const urlArrayString = filterParams.get('filters');
    if (urlArrayString) {
      initialFilter = urlArrayString.split(',');
      setSelectedFilters(initialFilter);
    }
    onUpdate(initialFilter);
  }, [filterParams]);

  const handleUpdate = value => {
    let newSelectedFilters;
    if (value === 'All') {
      newSelectedFilters = ['All'];
    } else {
      newSelectedFilters = [...selectedFilters];
      const index = newSelectedFilters.indexOf(value);
      if (index !== -1) {
        newSelectedFilters.splice(index, 1);
      } else {
        const allIndex = newSelectedFilters.indexOf('All');
        if (allIndex !== -1) {
          newSelectedFilters.splice(allIndex, 1);
        }
        if (selectedFilters.length === filters.length - 1) {
          newSelectedFilters = ['All'];
        } else {
          newSelectedFilters.push(value);
        }
      }
    }
    newSelectedFilters =
      newSelectedFilters.length === 0 ? ['All'] : newSelectedFilters;
    setSelectedFilters(newSelectedFilters);
    setFilterParams({ filters: newSelectedFilters.join(',') });
    onUpdate(newSelectedFilters);
  };

  return (
    <div className="work-filters">
      <FilterButton
        content="All"
        onUpdate={handleUpdate}
        isSelected={selectedFilters.includes('All')}
      />
      {filters.map(filter => (
        <FilterButton
          key={filter}
          content={filter}
          onUpdate={handleUpdate}
          isSelected={selectedFilters.includes(filter)}
        />
      ))}
    </div>
  );
};

export default GridFilter;
