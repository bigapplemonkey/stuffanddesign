import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import test_image from '../assets/test_img.jpg';

const WorkCard = ({ work, duration = 0.4, delay = 0.1 }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

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

  const imageVariants = {
    hidden: { scaleX: 0 },
    visible: { transformOrigin: 'left', scaleX: 1 },
  };

  return (
    <div className="work-card" ref={ref}>
      <motion.div
        className="work-image"
        style={{ backgroundImage: `url(${work.feature_image})` }}
        initial="hidden"
        animate={inView && imageLoaded ? 'visible' : 'hidden'}
        variants={imageVariants}
        transition={{ duration, delay }}
        onLoad={handleImageLoad}
      >
        <img
          src={work.feature_image}
          alt={work.title}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '1px',
            height: '1px',
            opacity: 0,
          }}
          onLoad={handleImageLoad}
        />
        {/* {imageLoaded && <p>Background image loaded!</p>} */}
      </motion.div>
      <motion.div
        className="work-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView && imageLoaded ? 1 : 0 }}
        transition={{ delay: delay + 0.2, duration }}
      >
        <div className="work-title subheadline-large">{work.title}</div>
        <div className="work-tags body-small">{work.tags}</div>
      </motion.div>
    </div>
  );
};

export default WorkCard;
