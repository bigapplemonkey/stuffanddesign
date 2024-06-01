import { motion } from 'framer-motion';

const entry = OriginalComponent => {
  const animation = () => (
    <>
      <OriginalComponent />
      <motion.div
        className="overlay"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 10, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );

  return animation;
};

export default entry;
