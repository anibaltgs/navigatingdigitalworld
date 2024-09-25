'use client';

import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import { TrendingUp } from 'lucide-react';
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import type { ChartConfig } from '@/components/ui/chart';

const chartData = [
  { year: 1997, boys: 19, girls: 28 },
  { year: 1998, boys: 18, girls: 27.5 },
  { year: 1999, boys: 17, girls: 27 },
  { year: 2000, boys: 18, girls: 26.5 },
  { year: 2001, boys: 19, girls: 26 },
  { year: 2002, boys: 19.5, girls: 27 },
  { year: 2003, boys: 19, girls: 28 },
  { year: 2004, boys: 18, girls: 27.5 },
  { year: 2005, boys: 17, girls: 27 },
  { year: 2006, boys: 16.5, girls: 26.5 },
  { year: 2007, boys: 16, girls: 26 },
  { year: 2008, boys: 17, girls: 26.5 },
  { year: 2009, boys: 18, girls: 27 },
  { year: 2010, boys: 19, girls: 28.5 },
  { year: 2011, boys: 20, girls: 30 },
  { year: 2012, boys: 21, girls: 32 },
  { year: 2013, boys: 22, girls: 34 },
  { year: 2014, boys: 23, girls: 35.5 },
  { year: 2015, boys: 24, girls: 37 },
  { year: 2016, boys: 25, girls: 38 },
  { year: 2017, boys: 26, girls: 39 },
  { year: 2018, boys: 27, girls: 39 },
  { year: 2019, boys: 28, girls: 39 },
];

const chartConfig: ChartConfig = {
  boys: {
    label: 'Boys',
    color: 'hsl(var(--chart-1))',
  },
  girls: {
    label: 'Girls',
    color: 'hsl(var(--chart-2))',
  },
};

/**
 * Custom hook to observe the intersection of a DOM element.
 *
 * @param ref - React ref object pointing to the DOM element to observe.
 * @param options - IntersectionObserver options.
 * @returns A boolean indicating whether the element is intersecting.
 */
const useIntersectionObserver = (
  ref: React.RefObject<Element>,
  options?: IntersectionObserverInit
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};

export function ChartOftenFeelLonely() {
  const [animationProgress, setAnimationProgress] = useState(0);
  const [hasStartedAnimation, setHasStartedAnimation] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(chartRef, { threshold: 0.1 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (isVisible && !hasStartedAnimation) {
      setHasStartedAnimation(true);
    }
  }, [isVisible, hasStartedAnimation]);

  useEffect(() => {
    if (hasStartedAnimation) {
      let progress = 0;

      const animate = () => {
        progress += 0.02;
        if (progress >= 1) {
          setAnimationProgress(1);
          if (animationRef.current !== null) {
            cancelAnimationFrame(animationRef.current);
          }
        } else {
          setAnimationProgress(progress);
          animationRef.current = requestAnimationFrame(animate);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [hasStartedAnimation]);

  return (
    <div className='flex w-full justify-center'>
      <Card className='w-full max-w-3xl' ref={chartRef}>
        <CardHeader>
          <CardTitle>Often Feel Lonely</CardTitle>
          <CardDescription>
            Percent of U.S. students (8th, 10th, and 12th grade) who agreed or
            mostly agreed with the statement "A lot of times I feel lonely."
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isVisible && (
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width='100%' height={400}>
                <LineChart
                  data={chartData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey='year'
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    domain={[0, 40]}
                    label={{
                      value: 'Percent of Students',
                      angle: -90,
                      position: 'insideLeft',
                      style: { textAnchor: 'middle' },
                    }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type='monotone'
                    dataKey='boys'
                    stroke='var(--color-boys)'
                    strokeWidth={2}
                    dot={false}
                    strokeDasharray={`${animationProgress * 100}%`}
                  />
                  <Line
                    type='monotone'
                    dataKey='girls'
                    stroke='var(--color-girls)'
                    strokeWidth={2}
                    dot={false}
                    strokeDasharray={`${animationProgress * 100}%`}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          )}
        </CardContent>
        <CardFooter>
          <div className='flex w-full items-start gap-2 text-sm'>
            <div className='grid gap-2'>
              <div className='flex items-center gap-2 font-medium leading-none'>
                Trending up since 2007 <TrendingUp className='h-4 w-4' />
              </div>
              <div className='flex items-center gap-2 leading-none text-muted-foreground'>
                Percent of U.S. students (8th, 10th, and 12th grade) who agreed
                or mostly agreed with the statement "A lot of times I feel
                lonely."
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
