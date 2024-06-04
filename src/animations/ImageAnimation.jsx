import { useState } from 'react';
import { motion } from 'framer-motion';

function ImageAnimation({
  source,
  altText,
  imgClass,
  delay = 0,
  duration = 0.5,
}) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const imageVariants = {
    initial: {
      scaleX: 0,
      opacity: 0,
    },
    animate: {
      scaleX: 1,
      opacity: 1,
    },
  };

  return (
    <div className={imgClass}>
      <img
        src={source}
        alt={altText}
        onLoad={handleImageLoad}
        style={{ display: 'none' }} // Hide image until loaded
      />
      {isImageLoaded && (
        <motion.div
          initial="initial"
          animate="animate"
          variants={imageVariants}
          transition={{ duration, delay }}
        >
          <img src={source} alt={altText} />
        </motion.div>
      )}
      {!isImageLoaded && <p>Loading...</p>}
    </div>
  );
}

export default ImageAnimation;
