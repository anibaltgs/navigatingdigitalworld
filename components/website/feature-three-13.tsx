// React and Next.js imports
import Image from 'next/image';
import Link from 'next/link';

// UI component imports
import * as Craft from '@/components/craft';
import { Button } from '@/components/ui/button';

// Asset imports
import Placeholder from '@/public/andre.png';

const Feature13 = () => {
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
          <h3 className='!my-0'>Andre Agassi and Boris Becker -</h3>
          <p className='font-light leading-[1.4] opacity-70'>
            He detected that Becker made a gesture with his mouth when he was
            going to serve to one side.
          </p>
          {/* <div className='not-prose flex items-center gap-2'>
            <p className='font-light italic leading-[1.4] opacity-70'>
              2017 - Google’s DeepMind AlphaGo artificial intelligence has
              defeated the world's number one Go player Ke Jie.
            </p>
          </div> */}
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Feature13;
