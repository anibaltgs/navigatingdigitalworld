// React and Next.js imports
import Image from 'next/image';
import Link from 'next/link';

// UI component imports
import * as Craft from '@/components/craft';
import { Button } from '@/components/ui/button';

// Asset imports
import Placeholder from '@/public/ai_human_1.png';

const Feature9 = () => {
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
          <h3 className='!my-0'>Deep Blue beating Kasparov.</h3>
          <p className='font-light leading-[1.4] opacity-70'>
            Nobody really thought that was possible before that.{' '}
          </p>
          <div className='not-prose flex items-center gap-2'>
            <p className='font-light italic leading-[1.4] opacity-70'>
              1997 —Garry Kasparov vs. Deep Blue — At the end of the match,
              Kasparov remarked, to the delight of the IBM team: "In certain
              kinds of positions it sees so deeply that it plays like God."{' '}
            </p>
          </div>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Feature9;
