'use client';
import React, { useEffect, useState } from 'react';
import { TransitionPanel } from '@/components/core/transition-panel';
import useMeasure from 'react-use-measure';

function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      type='button'
      className='relative flex h-8 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 bg-transparent px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:text-zinc-50 dark:hover:bg-zinc-800'
    >
      {children}
    </button>
  );
}
export function TransitionPanelCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [ref, bounds] = useMeasure();

  const FEATURES = [
    {
      title: 'Lack of true understanding',
      description:
        'AI processes information based on patterns, not genuine comprehension.',
    },
    {
      title: 'Bias in training data',
      description:
        'AI can perpetuate and amplify existing biases present in its training data.',
    },
    {
      title: 'Inability to adapt to novel situations',
      description: 'AI struggles with scenarios it has not been trained on.',
    },
    {
      title: 'Lack of common sense reasoning',
      description:
        'AI can make nonsensical mistakes that humans would easily avoid.',
    },
    {
      title: 'Ethical considerations',
      description:
        'AI can not make moral judgments or understand the full implications of its outputs.',
    },
  ];

  const handleSetActiveIndex = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    if (activeIndex < 0) setActiveIndex(0);
    if (activeIndex >= FEATURES.length) setActiveIndex(FEATURES.length - 1);
  }, [activeIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 364 : -364,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 364 : -364,
      opacity: 0,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
    }),
  };

  return (
    <div className='w-[364px] overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:bg-zinc-700'>
      <TransitionPanel
        activeIndex={activeIndex}
        variants={{
          enter: (direction) => ({
            x: direction > 0 ? 364 : -364,
            opacity: 0,
            height: bounds.height > 0 ? bounds.height : 'auto',
            position: 'initial',
          }),
          center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            height: bounds.height > 0 ? bounds.height : 'auto',
          },
          exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 364 : -364,
            opacity: 0,
            position: 'absolute',
            top: 0,
            width: '100%',
          }),
        }}
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        custom={direction}
      >
        {FEATURES.map((feature, index) => (
          <div key={index} className='px-4 pt-4' ref={ref}>
            <h3 className='mb-0.5 font-medium text-zinc-800 dark:text-zinc-100'>
              {feature.title}
            </h3>
            <p className='text-zinc-600 dark:text-zinc-400'>
              {feature.description}
            </p>
          </div>
        ))}
      </TransitionPanel>
      <div className='flex justify-between p-4'>
        {activeIndex > 0 ? (
          <Button onClick={() => handleSetActiveIndex(activeIndex - 1)}>
            Previous
          </Button>
        ) : (
          <div />
        )}
        {activeIndex < FEATURES.length - 1 && (
          <Button onClick={() => handleSetActiveIndex(activeIndex + 1)}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
