import { motion } from 'framer-motion';

const transition = OriginalComponent => {
  const animation = () => (
    <>
      <OriginalComponent />

      <motion.div
        className="slide-in blue"
        key="slide-in blue"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-in dark"
        key="slide-in dark"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.45, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="slide-out dark"
        key="slide-out dark"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.45, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );

  return animation;
};

export default transition;
