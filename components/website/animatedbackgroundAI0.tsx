import AnimatedBackground from '@/components/core/animated-background';

export function AnimatedCardBackgroundHoverAI0() {
  const ITEMS = [
    {
      id: 1,
      title: 'Lack of true understanding',
      description:
        'AI processes information based on patterns, not genuine comprehension.',
    },
    {
      id: 2,
      title: 'Bias in training data',
      description:
        'AI can perpetuate and amplify existing biases present in its training data.',
    },
    {
      id: 3,
      title: 'Inability to adapt to novel situations',
      description: 'AI struggles with scenarios it hasn not been trained on.',
    },
    {
      id: 4,
      title: 'Lack of common sense reasoning',
      description:
        'AI can make nonsensical mistakes that humans would easily avoid.',
    },
    {
      id: 5,
      title: 'Ethical considerations',
      description:
        'AI can not make moral judgments or understand the full implications of its outputs.',
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
