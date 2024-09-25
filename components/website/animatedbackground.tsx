import AnimatedBackground from '@/components/core/animated-background';

export function AnimatedCardBackgroundHover() {
  const ITEMS = [
    {
      id: 1,
      title: 'Communication',
      description: '(playdates, coordinating a pickup, etc)',
    },
    {
      id: 2,
      title: 'Location tracking',
      description: 'Parents can track kids location.',
    },
    {
      id: 3,
      title: 'Schoolwork',
      description: 'Homeworks, research, etc.',
    },
    {
      id: 4,
      title: 'Entertainment',
      description: 'Netflix, YouTube, Games, etc',
    },
    {
      id: 5,
      title: 'Keeping in touch with peers',
      description: '(not feeling left out).',
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
