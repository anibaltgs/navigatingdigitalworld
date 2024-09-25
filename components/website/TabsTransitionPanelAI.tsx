'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Transition, Variant, MotionProps } from 'framer-motion';
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

export function TabsTransitionPanelAI() {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      id: 'eureka',
      number: 1,
      title: 'The "Eureka" moment',
      content: (
        <>
          Think about times when you've struggled with a problem, only to have a
          breakthrough. That feeling of accomplishment and deep understanding is
          irreplaceable.
        </>
      ),
    },
    {
      id: 'sports',
      number: 2,
      title: 'Sports and physical skills',
      content: (
        <>
          Learning to ride a bike or mastering a new sport requires practice and
          perseverance. The struggle is an essential part of the learning
          process.
        </>
      ),
    },
    {
      id: 'creative',
      number: 3,
      title: 'Creative pursuits',
      content: (
        <>
          Writers, artists, and musicians often speak of the necessary "creative
          struggle" that leads to their best work. The 10,000-hour rule:
          "Practice isn't the thing you do once you're good. It's the thing you
          do that makes you good."
        </>
      ),
    },
    {
      id: 'scientific',
      number: 4,
      title: 'Scientific discoveries',
      content: (
        <>
          Many groundbreaking scientific discoveries came after years of failed
          experiments and persistent effort.
        </>
      ),
    },
  ];

  return (
    <div className='mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8'>
      <div className='mb-4 flex flex-wrap gap-2 sm:flex-nowrap sm:gap-0 sm:space-x-2'>
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(items.indexOf(item))}
            className={`rounded-md px-3 py-1 text-xs font-medium sm:text-sm ${
              activeIndex === items.indexOf(item)
                ? 'bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100'
                : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400'
            }`}
            type='button'
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
        {items.map((item) => (
          <div key={item.id} className='flex items-start'>
            <div className='mr-4 mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-300 dark:bg-zinc-800'>
              <span className='font-semibold text-gray-700 dark:text-white'>
                {item.number}
              </span>
            </div>
            <div>
              <p className='text-sm text-gray-600 dark:text-gray-300 sm:text-base'>
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </TransitionPanel>
    </div>
  );
}
