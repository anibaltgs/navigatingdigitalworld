'use client';

import React, { useState, useEffect, useRef, type RefObject } from 'react';
import { TrendingDown } from 'lucide-react';
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
  { year: 1979, boys: 73, girls: 79 },
  { year: 1981, boys: 74, girls: 79 },
  { year: 1983, boys: 75, girls: 78 },
  { year: 1985, boys: 77, girls: 78 },
  { year: 1987, boys: 72, girls: 77 },
  { year: 1989, boys: 74, girls: 79 },
  { year: 1991, boys: 72, girls: 76 },
  { year: 1993, boys: 72, girls: 78 },
  { year: 1995, boys: 72, girls: 77 },
  { year: 1997, boys: 72, girls: 79 },
  { year: 1999, boys: 73, girls: 78 },
  { year: 2001, boys: 71, girls: 77 },
  { year: 2003, boys: 70, girls: 76 },
  { year: 2005, boys: 71, girls: 75 },
  { year: 2007, boys: 70, girls: 75 },
  { year: 2009, boys: 69, girls: 75 },
  { year: 2011, boys: 68, girls: 74 },
  { year: 2013, boys: 72, girls: 71 },
  { year: 2015, boys: 67, girls: 72 },
  { year: 2017, boys: 61, girls: 66 },
  { year: 2019, boys: 62, girls: 62 },
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
 * Custom hook to observe the intersection of a target element with the viewport.
 *
 * @param ref - The reference to the target DOM element.
 * @param options - IntersectionObserver options.
 * @returns A boolean indicating whether the element is intersecting.
 */
const useIntersectionObserver = (
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  useEffect(() => {
    const currentElement = ref.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};

export function ChartHaveFewCloseFriends() {
  const [animationProgress, setAnimationProgress] = useState<number>(0);
  const [hasStartedAnimation, setHasStartedAnimation] =
    useState<boolean>(false);
  const chartRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(chartRef, { threshold: 0.1 });

  // Correctly typing animationRef to handle number | null
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
          progress = 1;
          setAnimationProgress(progress);
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
          <CardTitle>Have a Few Close Friends</CardTitle>
          <CardDescription>
            The percentage of U.S. high school seniors who agreed or mostly
            agreed with the statement "I usually have a few friends around that
            I can get together with."
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
                    domain={[50, 80]}
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
                Trending down since 2012 <TrendingDown className='h-4 w-4' />
              </div>
              <div className='flex items-center gap-2 leading-none text-muted-foreground'>
                Rates dropped slowly before 2012, and more quickly afterward.
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
