'use client';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import dynamic from 'next/dynamic';

const ReactConfetti = dynamic(() => import('react-confetti'), { ssr: false });

interface Stage {
  label: string;
  threshold: number;
  description: string;
}

const stages: Stage[] = [
  { label: 'Watch TV', threshold: 18, description: 'First request.' },
  {
    label: 'Video Games',
    threshold: 53,
    description:
      'Then they ask if they can play video games / smartphone / iPad.',
  },
  {
    label: 'Go outside',
    threshold: 77,
    description:
      "Then they ask if they can go to a friend's house that they like.",
  },
  {
    label: 'Complain',
    threshold: 99,
    description:
      'If you keep saying no to all the distractions they typically will enter a complaint phase about how they are bored.',
  },
  {
    label: 'Done',
    threshold: 100,
    description:
      'But after a bit of boredom they enter a very imaginative state where we can end up with some top tier kid games.',
  },
];

export function BoredomCreativitySlider() {
  const [value, setValue] = useState<number>(0);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  const [windowDimensions, setWindowDimensions] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });
  const doneButtonRef = useRef<HTMLButtonElement>(null);
  const [confettiSource, setConfettiSource] = useState<{
    x: number;
    y: number;
    w: number;
    h: number;
  }>({
    x: 0,
    y: 0,
    w: 0,
    h: 0,
  });

  const [confettiProps, setConfettiProps] = useState<{
    numberOfPieces: number;
    wind: number;
    gravity: number;
    initialVelocityX: number;
    initialVelocityY: number;
    opacity: number;
  }>({
    numberOfPieces: 200,
    wind: 0,
    gravity: 0.1,
    initialVelocityX: 4,
    initialVelocityY: 10,
    opacity: 1,
  });

  // Memoize triggerConfetti to prevent unnecessary re-creations
  const triggerConfetti = useCallback(() => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  }, []);

  useEffect(() => {
    const updateDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    const updateConfettiSource = () => {
      if (doneButtonRef.current) {
        const buttonRect = doneButtonRef.current.getBoundingClientRect();
        setConfettiSource({
          x: buttonRect.left + buttonRect.width / 2,
          y: buttonRect.top + buttonRect.height / 2,
          w: 0,
          h: 0,
        });
      }
    };

    updateDimensions();
    updateConfettiSource();

    window.addEventListener('resize', updateDimensions);
    window.addEventListener('resize', updateConfettiSource);
    window.addEventListener('scroll', updateConfettiSource);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('resize', updateConfettiSource);
      window.removeEventListener('scroll', updateConfettiSource);
    };
  }, []);

  const getCurrentStage = useCallback((): Stage => {
    return (
      stages.find(
        (stage, index) =>
          value <= stage.threshold &&
          (index === 0 || value > stages[index - 1].threshold)
      ) || stages[stages.length - 1]
    );
  }, [value]);

  const currentStage = getCurrentStage();

  const handleStageClick = useCallback(
    (threshold: number) => {
      setValue(threshold);
      if (threshold === 100) {
        triggerConfetti();
      }
    },
    [triggerConfetti]
  );

  const handleSliderChange = useCallback(
    ([newValue]: number[]) => {
      setValue(newValue);
      if (newValue === 100) {
        triggerConfetti();
      }
    },
    [triggerConfetti]
  );

  return (
    <div className='relative mx-auto max-w-md space-y-6 rounded-lg bg-background p-6 shadow-md'>
      {showConfetti && (
        <ReactConfetti
          width={windowDimensions.width}
          height={windowDimensions.height}
          confettiSource={confettiSource}
          recycle={false}
          run={showConfetti}
          numberOfPieces={confettiProps.numberOfPieces}
          wind={confettiProps.wind}
          gravity={confettiProps.gravity}
          initialVelocityX={confettiProps.initialVelocityX}
          initialVelocityY={confettiProps.initialVelocityY}
          opacity={confettiProps.opacity}
          style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000 }}
        />
      )}
      <h2 className='text-2xl font-bold text-primary'>
        Boredom to Creativity Scale
      </h2>
      <Slider
        value={[value]}
        max={100}
        step={1}
        className='w-full'
        onValueChange={handleSliderChange}
      />
      <Separator className='my-4' />
      <div className='flex items-center justify-between text-sm text-muted-foreground'>
        {stages.map((stage) => (
          <button
            key={stage.threshold} // Use a unique and stable identifier instead of index
            type='button' // Explicitly setting the type
            onClick={() => handleStageClick(stage.threshold)}
            className={cn(
              'cursor-pointer transition-colors duration-200 hover:text-primary',
              value >
                (stage.threshold === stages[0].threshold
                  ? 0
                  : stages.find((s) => s.threshold === stage.threshold)
                      ?.threshold || 0) && value <= stage.threshold
                ? 'font-medium text-primary'
                : ''
            )}
            ref={stage.label === 'Done' ? doneButtonRef : null}
          >
            {stage.label}
          </button>
        ))}
      </div>
      <Alert
        className={cn(
          'transition-all duration-300',
          currentStage.label === 'Done'
            ? 'bg-primary text-primary-foreground'
            : ''
        )}
      >
        <AlertTitle>{currentStage.label}</AlertTitle>
        <AlertDescription>{currentStage.description}</AlertDescription>
      </Alert>
    </div>
  );
}
