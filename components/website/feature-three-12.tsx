// // React and Next.js imports
// import Image from 'next/image';
// import Link from 'next/link';

// // UI component imports
// import * as Craft from '@/components/craft';
// import { Button } from '@/components/ui/button';

// // Asset imports
// import Placeholder from '@/public/flute1.png';

// const Feature12 = () => {
//   return (
//     <Craft.Section>
//       <Craft.Container className='grid items-stretch md:grid-cols-2 md:gap-12'>
//         <div className='not-prose relative flex h-96 overflow-hidden rounded-lg border'>
//           <Image
//             src={Placeholder}
//             alt='placeholder'
//             className='fill object-cover'
//           />
//         </div>
//         <div className='flex flex-col gap-6 py-8'>
//           <h3 className='!my-0'>
//             The last structural change was the incorporation of Broca's area and
//             Wernicke's area
//           </h3>
//           <p className='font-light leading-[1.4] opacity-70'>
//             10,000 years later we had flutes with the pentatonic scale and cave
//             paintings.
//           </p>
//           {/* <div className='not-prose flex items-center gap-2'>
//             <p className='font-light italic leading-[1.4] opacity-70'>
//               2017 - Google’s DeepMind AlphaGo artificial intelligence has
//               defeated the world's number one Go player Ke Jie.
//             </p>
//           </div> */}
//         </div>
//       </Craft.Container>
//     </Craft.Section>
//   );
// };

// export default Feature12;
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import * as Craft from '@/components/craft';
import { Button } from '@/components/ui/button';
import Flute1 from '@/public/flute1.png';
import Flute2 from '@/public/flute2.png';
import { cn } from '@/lib/utils';

const Feature12 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Flute1, Flute2];

  const toggleImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <Craft.Section>
      <Craft.Container className='grid items-stretch md:grid-cols-2 md:gap-12'>
        <div className='relative flex h-full flex-col overflow-hidden rounded-lg'>
          <div className='relative h-full w-full'>
            <Image
              src={images[currentImageIndex]}
              alt='Flute'
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div className='absolute bottom-4 left-1/2 -translate-x-1/2 transform'>
            <div className='flex space-x-2 rounded-full bg-black/50 p-1'>
              {images.map((_, index) => (
                <button
                  key={index}
                  type='button'
                  aria-label={`Go to image ${index + 1}`}
                  onClick={() => toggleImage(index)}
                  className={cn(
                    'h-2 w-2 rounded-full transition-opacity duration-300',
                    currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                  )}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-col gap-6 py-8'>
          <h3 className='!my-0'>
            The last structural change was the incorporation of Broca's area and
            Wernicke's area
          </h3>
          <p className='font-light leading-[1.4] opacity-70'>
            10,000 years later we had flutes with the pentatonic scale and cave
            paintings.
          </p>
        </div>
      </Craft.Container>
    </Craft.Section>
  );
};

export default Feature12;
