import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const TitleEntry = ({ content, delay = 0.8, duration = 0.5, classes = '' }) => {
  //   const { ref, inView } = useInView();
  const controls1 = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    controls1.start({ opacity: 1, y: 0 });
    controls2.start({ opacity: 1, y: 0 });
  }, [controls1, controls2]);
  return (
    <motion.h1
      //   ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls1}
      transition={{ delay, duration }}
      className={classes}
    >
      {content.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={controls2}
          transition={{ duration, delay: delay + index * 0.05 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default TitleEntry;
