import Image from 'next/image';
import { Link } from 'next-view-transitions';

import * as Craft from '@/components/craft';
import { Button } from '@/components/ui/button';

import Placeholder from '@/public/feature1.png';

const Feature1 = () => {
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
            We work hard to protect our kids in real life but we don't pay as
            much attention to online risks
          </h3>
          <p className='font-light leading-[1.4] opacity-70'>
            — Jonathan David Haidt, American social psychologist and author,
            Thomas Cooley Professor of Ethical Leadership at New York University
            Stern School of Business
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

export default Feature1;
