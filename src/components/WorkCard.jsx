import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import test_image from '../assets/test_img.jpg';

const WorkCard = ({ work, duration = 0.4, delay = 0.1 }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  //   useEffect(() => {
  //     if (inView && !imageLoaded) {
  //       const image = new Image();
  //       image.src = test_image; //work.feature_image;
  //       image.onload = () => {
  //         setImageLoaded(true);
  //       };
  //     }
  //   }, [inView, imageLoaded]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="work-card">
      <div
        className="work-image"
        style={{ backgroundImage: `url(${test_image})` }}
      >
        {/* <img src={test_image} alt={work.title} onLoad={handleImageLoad} /> */}
      </div>
      <div className="work-info">
        <div className="work-title card-title">{work.title}</div>
        <div className="work-tags card-tags">{work.tags}</div>
      </div>
    </div>
  );
};

export default WorkCard;
