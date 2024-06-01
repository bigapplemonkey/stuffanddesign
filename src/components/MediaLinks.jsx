import AnimatedSVG from './AnimatedSVG';
import jsonData from '../data.json';
import config from '../config';

const MediaLinks = ({ isNavigation = false }) => {
  const isDark = false;
  const navClass = isNavigation === true ? ' navigation' : '';
  return (
    <div className={`media-links${navClass}`}>
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
