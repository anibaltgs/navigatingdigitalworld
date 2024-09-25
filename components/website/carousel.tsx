'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselNavigation,
  CarouselIndicator,
  CarouselItem,
  useCarousel,
} from '@/components/core/carousel';

interface CarouselBasicProps {
  images: Array<{ id: string; src: string; alt: string }>;
  caption?: string;
  resizedSlides?: number[];
  customImageStyle?: React.CSSProperties;
}

export function CarouselBasic({
  images,
  caption,
  resizedSlides = [],
  customImageStyle,
}: CarouselBasicProps) {
  return (
    <div className='flex w-full flex-col items-center'>
      <div className='relative mb-4 w-full max-w-3xl'>
        <Carousel>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={image.id} className='p-4'>
                <div className='flex items-center justify-center'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{
                      width: resizedSlides.includes(index + 1) ? '70%' : '100%',
                      height: 'auto',
                      ...customImageStyle,
                    }}
                    objectFit='contain'
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNavigation alwaysShow />
          <CarouselIndicator />
        </Carousel>
      </div>
      {caption && (
        <p className='mb-14 max-w-3xl text-center text-sm text-gray-600 dark:text-gray-400'>
          {caption}
        </p>
      )}
    </div>
  );
}

interface CarouselWithCaptionsProps {
  images: Array<{ id: string; src: string; alt: string; caption: string }>;
  resizedSlides?: number[];
}

export function CarouselWithCaptions({
  images,
  resizedSlides = [],
}: CarouselWithCaptionsProps) {
  const [currentCaption, setCurrentCaption] = useState(images[0].caption);

  return (
    <div className='flex w-full flex-col items-center'>
      <div className='relative mb-4 w-full max-w-3xl'>
        <Carousel>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={image.id} className='p-4'>
                <div className='flex items-center justify-center'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{
                      width: resizedSlides.includes(index + 1) ? '70%' : '100%',
                      height: 'auto',
                    }}
                    objectFit='contain'
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNavigation alwaysShow />
          <CarouselIndicator />
          <CaptionSync images={images} setCurrentCaption={setCurrentCaption} />
        </Carousel>
      </div>
      <p className='mt-4 max-w-3xl text-center text-sm text-gray-600 dark:text-gray-400'>
        {currentCaption}
      </p>
    </div>
  );
}

interface CaptionSyncProps {
  images: Array<{ id: string; src: string; alt: string; caption: string }>;
  setCurrentCaption: (caption: string) => void;
}

function CaptionSync({ images, setCurrentCaption }: CaptionSyncProps) {
  const { index } = useCarousel();

  useEffect(() => {
    setCurrentCaption(images[index].caption);
  }, [index, images, setCurrentCaption]);

  return null;
}
