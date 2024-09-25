'use client';

import {
  PanInfo,
  motion,
  useAnimation,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from 'framer-motion';
import { useRef, useState } from 'react';

const playItems = [
  'Outdoor Exploration (Space)',
  'Free Play (Freedom)',
  'Daydreaming (Time)',
  'Sports Activities (Space)',
  'Reading Time (Time)',
  'Art Projects (Freedom)',
  'Music Time (Time)',
  'Nature Walks (Space)',
  'Imaginative Play (Freedom)',
  'Building Blocks (Space)',
  'Storytelling (Time)',
  'Dance and Movement (Freedom)',
  'Science Experiments (Space)',
  'Quiet Reflection (Time)',
  'Dress-up Play (Freedom)',
  'Gardening (Space)',
  'Board Games (Time)',
  'Free Drawing (Freedom)',
  'Climbing (Space)',
  'Puzzles (Time)',
  'Role-playing (Freedom)',
  'Sensory Play (Space)',
  'Nap Time (Time)',
  'Inventing Games (Freedom)',
  'Obstacle Courses (Space)',
  'Journaling (Time)',
  'Unstructured Play (Freedom)',
  'Bird Watching (Space)',
  'Mindfulness Activities (Time)',
  'Craft Making (Freedom)',
];

const angleIncrement = 360 / playItems.length;
const dragFactor = 0.01;

export default function DraggableCurvedMenu() {
  const controls = useAnimation();
  const rotation = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [middleItem, setMiddleItem] = useState(playItems[0]);

  useMotionValueEvent(rotation, 'change', (value) => {
    const adjustedRotation = ((value % 360) + 360) % 360;
    const middleIndex =
      Math.round(adjustedRotation / angleIncrement) % playItems.length;
    const actualMiddleItem =
      playItems[(playItems.length - middleIndex) % playItems.length];
    setMiddleItem(actualMiddleItem);
  });

  const onDrag = (_: any, info: PanInfo) => {
    const currentRotation = rotation.get() + info.offset.y * dragFactor;

    rotation.set(currentRotation);
  };

  const onDragEnd = (_: any, info: PanInfo) => {
    const endRotation = rotation.get() + info.velocity.y * dragFactor;
    controls.start({
      rotate: endRotation,
      transition: { type: 'spring', mass: 0.1 },
    });
  };

  const transform = useTransform(rotation, (value) => {
    return `rotate(${value}deg)`;
  });

  return (
    <div
      className='relative flex h-[500px] w-full items-center justify-center overflow-hidden'
      ref={containerRef}
    >
      <div className='pointer-events-none absolute left-0 top-0 z-50 h-32 w-full bg-neutral-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-neutral-950'></div>
      <motion.div
        className='relative -ml-[800px] flex h-[1000px] w-[1000px] cursor-grab items-center justify-center active:cursor-grabbing'
        animate={controls}
        style={{
          transformOrigin: 'center center',
          transform,
          rotate: rotation,
        }}
        drag='y'
        onDrag={onDrag}
        onDragEnd={onDragEnd}
      >
        {playItems.map((item, index) => {
          const rotate = angleIncrement * index;

          return (
            <motion.div
              key={`${item}-${index}`}
              className={`absolute ${
                item === middleItem
                  ? 'text-mauve-light-12 dark:text-mauve-dark-12'
                  : 'text-mauve-light-12/30 dark:text-mauve-dark-12/30'
              } transition-colors duration-150`}
              style={{
                left: '50%',
                transform: `rotate(${rotate}deg) translateX(300px)`,
                transformOrigin: 'left center',
              }}
            >
              {item}
            </motion.div>
          );
        })}
      </motion.div>
      <div className='pointer-events-none absolute bottom-0 left-0 z-50 h-32 w-full bg-neutral-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-neutral-950'></div>
    </div>
  );
}
