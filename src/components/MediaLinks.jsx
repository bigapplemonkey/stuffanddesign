import AnimatedSVG from './AnimatedSVG';
import jsonData from '../data.json';
import config from '../config';

const MediaLinks = ({ isNavigation = false, isFixed = false }) => {
  const isDark = false;
  let extraClasses = isNavigation === true ? ' navigation' : '';
  extraClasses =
    isFixed === true ? `${extraClasses} fixed-links` : extraClasses;
  return (
    <div className={`media-links${extraClasses}`}>
      {jsonData.medias.map(media => (
        <div className="media-icon" key={media.type}>
          <a href={media.link} target="_blank" rel="noopener noreferrer">
            <AnimatedSVG
              altProp={`${media.type} icon`}
              isDark={isDark}
              iconPath={config.ICON_PATHS[`${media.type.toUpperCase()}`]}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default MediaLinks;
