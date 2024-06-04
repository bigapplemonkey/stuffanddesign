import config from '../config';

const FilterButton = ({ content }) => {
  return (
    <button className="filter-button body-large">
      {content}
      <div className="close-icon">
        {' '}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" fill="none">
          <path
            d="M7.07108 7.42892L21.2132 21.5711"
            stroke={config.APP_BLUE}
            strokeWidth="1.2"
          />
          <path
            d="M7.07108 21.5711L21.2132 7.42892"
            stroke={config.APP_BLUE}
            strokeWidth="1.2"
          />
        </svg>
      </div>
    </button>
  );
};

export default FilterButton;
