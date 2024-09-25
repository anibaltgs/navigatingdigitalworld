// React and Next.js imports
import Image from 'next/image';
import Link from 'next/link';

// UI component imports
import * as Craft from '@/components/craft';
import { Button } from '@/components/ui/button';

// Asset imports
import Placeholder from '@/public/dennis1.png';

const Feature5 = () => {
  return (
    <Craft.Section>
      <Craft.Container className='grid items-stretch md:grid-cols-2 md:gap-12'>
        <div className='not-prose relative flex h-96 overflow-hidden rounded-lg border'>
          <Image
            src={Placeholder}
            alt='placeholder'
            fill // Correctly using the fill prop
            className='object-cover' // Ensures the image covers the container
          />
        </div>
        <div className='flex flex-col gap-6 py-8'>
          <h3 className='!my-0'>
            Adults, particularly those born before the 1990s, recall playing
            with friends in their neighborhoods, local parks, and abandoned
            places, making up the rules as they went along, without adult
            supervision.
          </h3>
          <p className='font-light leading-[1.4] opacity-70'>
            They often recall a sense of joy, fun, and freedom as they would
            run, jump. They felt independent, taking risks and figuring things
            out for themselves.
          </p>
          {/* <div className='not-prose flex items-center gap-2'>
            <Button className='w-fit' asChild>
              <Link href='#'>Get Started</Link>
            </Button>
            <Button className='w-fit' variant='link' asChild>
              <Link href='#'>Learn More {'->'}</Link>
            </Button>
          </div> */}
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Feature5;
