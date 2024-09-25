'use client';

import { useState, type KeyboardEvent } from 'react';
import {
  Disclosure,
  DisclosureContent,
  DisclosureTrigger,
} from '@/components/core/disclosure';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import Flute1 from '../../public/flute1.png';
import Flute2 from '../../public/flute2.png';

interface CardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const imageVariants = {
    collapsed: { scale: 1, filter: 'blur(0px)' },
    expanded: { scale: 1.1, filter: 'blur(3px)' },
  };

  const contentVariants = {
    collapsed: { opacity: 0, y: 0 },
    expanded: { opacity: 1, y: 0 },
  };

  const transition = {
    type: 'spring',
    stiffness: 26.7,
    damping: 4.1,
    mass: 0.2,
  };

  const handleToggle = () => setIsOpen(!isOpen);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleToggle();
    }
  };

  return (
    <div className='relative h-[350px] w-full max-w-[290px] overflow-hidden rounded-xl'>
      <button
        onClick={handleToggle}
        onKeyDown={handleKeyDown}
        className='h-full w-full cursor-pointer border-0 bg-transparent p-0'
        type='button'
      >
        <motion.div
          className='h-full w-full'
          animate={isOpen ? 'expanded' : 'collapsed'}
          variants={imageVariants}
          transition={transition}
        >
          <Image
            src={image}
            alt={title}
            layout='fill'
            objectFit='cover'
            className='pointer-events-none select-none'
          />
        </motion.div>
      </button>
      <Disclosure
        onOpenChange={setIsOpen}
        open={isOpen}
        className='absolute bottom-0 left-0 right-0 rounded-xl bg-zinc-900 px-4 pt-2 dark:bg-zinc-50'
        variants={contentVariants}
        transition={transition}
      >
        <DisclosureTrigger>
          <button
            className='w-full pb-2 text-left text-[14px] font-medium text-white dark:text-zinc-900'
            type='button'
            onClick={handleToggle}
          >
            {title}
          </button>
        </DisclosureTrigger>
        <DisclosureContent>
          <div className='flex flex-col pb-4 text-[13px] text-zinc-300 dark:text-zinc-700'>
            <p className='line-clamp-3'>{description}</p>
            {/* <button
              className='mt-3 w-full rounded-[4px] border border-zinc-700 bg-zinc-900 px-4 py-1 text-zinc-50 transition-colors duration-300 hover:bg-zinc-800 dark:border-zinc-300 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200'
              type='button'
            >
              Learn More
            </button> */}
          </div>
        </DisclosureContent>
      </Disclosure>
    </div>
  );
};

export function DisclosureCard() {
  return (
    <div className='flex flex-col items-center justify-center gap-5 p-4 sm:flex-row'>
      <Card
        image={Flute1}
        title='The last structural change'
        description='Was the incorporation of Brocas area and Wernickes area.'
      />
      <Card
        image={Flute2}
        title='10,000 years later'
        description='We had flutes with the pentatonic scale and cave
            paintings...'
      />
    </div>
  );
}
