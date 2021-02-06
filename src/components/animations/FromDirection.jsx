/* eslint-disable react/prop-types */
import React, {useState, useRef} from 'react';
import {motion} from 'framer-motion';
import classNames from 'classnames';

export default function FromDirection({
  children,
  from,
  delay = 0,
  duration = 0.6,
  className,
  innerClassName,
  onAnimationComplete,
  ...props
}) {
  const [overflow, setOverflow] = useState('overflow-hidden');
  const variants = {
    show: (i = 1) => ({
      y: 0,
      x: 0,
      transition: {
        duration,
        delay: i * delay,
      },
    }),
    hidden: {
      ...(from.includes('top') && {y: '-100%'}),
      ...(from.includes('bottom') && {y: '100%'}),
      ...(from.includes('left') && {x: '-100%'}),
      ...(from.includes('right') && {x: '100%'}),
    },
  };

  const ref = useRef(null);

  return (
    <div className={classNames(overflow, className)}>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="show"
        onAnimationComplete={() => {
          if (onAnimationComplete) {
            onAnimationComplete();
          }
          setOverflow(null);
          if (ref.current !== null) {
            ref.current.style.transform = '';
          }
        }}
        className={innerClassName}
        ref={ref}
        {...props}>
        {children}
      </motion.div>
    </div>
  );
}
