import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/core/accordion';

export function Accordion395org() {
  return (
    <Accordion className='flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700'>
      <AccordionItem value='getting-started'>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          Before 3 years old
        </AccordionTrigger>
        <AccordionContent>
          <p className='text-zinc-500 dark:text-zinc-400'>
            The child needs you to help him discover his environment through
            sensory. Play, talk, stop tv.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='animation-properties'>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          From 3 to 6 years old
        </AccordionTrigger>
        <AccordionContent>
          <p className='text-zinc-500 dark:text-zinc-400'>
            The child needs to discover his strengths. Limit the time spent on
            devices, share them, talk with your family.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='advanced-usage'>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          From 6 to 9 years old
        </AccordionTrigger>
        <AccordionContent>
          <p className='text-zinc-500 dark:text-zinc-400'>
            Dive deeper into advanced techniques and features of
            Motion-Primitives. Learn about chaining animations, creating complex
            sequences, and utilizing motion sensors for interactive animations.
            Gain insights on how to leverage these advanced features to enhance
            user experience and engagement.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='community-and-support'>
        <AccordionTrigger className='w-full py-0.5 text-left text-zinc-950 dark:text-zinc-50'>
          Community and Support
        </AccordionTrigger>
        <AccordionContent>
          <p className='text-zinc-500 dark:text-zinc-400'>
            The child needs to discover the rules of social games. Create
            something using digital devices, explain the internet to him.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
