import { motion, useViewportScroll, useTransform } from 'framer-motion';
import React from 'react';

const ExpandingVideo = () => {
  const { scrollY } = useViewportScroll();
  
  // Change these values to adjust the expansion effect
  const scale = useTransform(scrollY, [0, 300], [1, 1.5]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        zIndex: -1,
        scale,
      }}
    >
      <video
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        src="/n.mp4"
        autoPlay
        loop
        muted
      />
    </motion.div>
  );
};

export default ExpandingVideo;
