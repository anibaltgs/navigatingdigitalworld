// React and Next.js imports
import Image from 'next/image';
import Link from 'next/link';

// UI component imports
import * as Craft from '@/components/craft';
import { Button } from '@/components/ui/button';

// Asset imports
import Placeholder from '@/public/irobot.png';

const Feature7 = () => {
  return (
    <Craft.Section>
      <Craft.Container className='grid items-stretch md:grid-cols-2 md:gap-12'>
        <div className='not-prose relative flex h-96 overflow-hidden rounded-lg border'>
          <Image
            src={Placeholder}
            alt='placeholder'
            className='fill object-cover'
          />
        </div>
        <div className='flex flex-col gap-6 py-8'>
          <h3 className='!my-0'>I, robot, Asimov book took place on 2035</h3>
          {/* <p className='font-light leading-[1.4] opacity-70'>
            Back in my day, we had to wait at least a day for the next episode,
            or often a week, or more! TV was actually "seasonal", which it no
            longer is.
          </p> */}
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

export default Feature7;
