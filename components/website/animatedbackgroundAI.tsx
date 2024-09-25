import AnimatedBackground from '@/components/core/animated-background';

export function AnimatedCardBackgroundHoverAI() {
  const ITEMS = [
    {
      id: 1,
      title: 'AI is here to stay...',
      description: 'and will continue to evolve rapidly',
    },
    {
      id: 2,
      title: 'Understanding AIs capabilities',
      description: 'and limitations is crucial.',
    },
    {
      id: 3,
      title: 'The value of struggle in learning remains essential',
      description: 'even in an AI world.',
    },
    {
      id: 4,
      title: 'We must teach children',
      description: 'how to use AI tools effectively and ethically.',
    },
    {
      id: 5,
      title: 'Critical thinking and creativity',
      description: 'will become even more important skills.',
    },
    // {
    //   id: 6,
    //   title: 'Swipe to Delete',
    //   description: 'Delete items with swipe gestures.',
    // },
  ];

  return (
    <div className='grid grid-cols-2 p-10 md:grid-cols-3'>
      <AnimatedBackground
        className='rounded-lg bg-zinc-100 dark:bg-zinc-800'
        transition={{
          type: 'spring',
          bounce: 0.2,
          duration: 0.6,
        }}
        enableHover
      >
        {ITEMS.map((item, index) => (
          <div key={index} data-id={`card-${index}`}>
            <div className='flex select-none flex-col space-y-1 p-4'>
              <h3 className='text-base font-medium text-zinc-800 dark:text-zinc-50'>
                {item.title}
              </h3>
              <p className='text-base text-zinc-600 dark:text-zinc-400'>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </AnimatedBackground>
    </div>
  );
}
