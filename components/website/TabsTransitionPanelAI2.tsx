'use client';
import React, { useState } from 'react';
import {
  AnimatePresence,
  Transition,
  Variant,
  motion,
  MotionProps,
} from 'framer-motion';
import { cn } from '@/lib/utils';

type TransitionPanelProps = {
  children: React.ReactNode[];
  className?: string;
  transition?: Transition;
  activeIndex: number;
  variants?: { enter: Variant; center: Variant; exit: Variant };
} & MotionProps;

export function TransitionPanel({
  children,
  className,
  transition,
  variants,
  activeIndex,
  ...motionProps
}: TransitionPanelProps) {
  return (
    <div className={cn('relative', className)}>
      <AnimatePresence
        initial={false}
        mode='popLayout'
        custom={motionProps.custom}
      >
        <motion.div
          key={activeIndex}
          variants={variants}
          transition={transition}
          initial='enter'
          animate='center'
          exit='exit'
          {...motionProps}
        >
          {children[activeIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function TabsTransitionPanelAI2() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      number: 1,
      title: 'Legal Systems',
      content: (
        <>
          Laws and regulations frequently struggle to keep up with technological
          innovations, leading to gray areas and ethical dilemmas.
        </>
      ),
    },
    {
      number: 2,
      title: 'Education',
      content: (
        <>
          Curricula may remain outdated, failing to prepare students for the
          demands of a modern workforce influenced by emerging technologies.
        </>
      ),
    },
    {
      number: 3,
      title: 'Cultural Norms',
      content: (
        <>
          Social practices and norms may resist change, leading to generational
          gaps in technology adoption and usage.
        </>
      ),
    },
  ];

  return (
    <div>
      <div className='mb-4 flex space-x-2'>
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`rounded-md px-3 py-1 text-sm font-medium ${
              activeIndex === index
                ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <TransitionPanel
        activeIndex={activeIndex}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        variants={{
          enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
          center: { opacity: 1, y: 0, filter: 'blur(0px)' },
          exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
        }}
      >
        {items.map((item, index) => (
          <div key={index} className='flex items-start'>
            <div className='mr-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-300 dark:bg-zinc-800'>
              <span className='font-semibold text-gray-700 dark:text-white'>
                {item.number}
              </span>
            </div>
            <div>
              {/* <h3 className='mb-2 text-xl font-bold'>{item.title}</h3> */}
              <p className='text-gray-600 dark:text-gray-300'>{item.content}</p>
            </div>
          </div>
        ))}
      </TransitionPanel>
    </div>
  );
}
