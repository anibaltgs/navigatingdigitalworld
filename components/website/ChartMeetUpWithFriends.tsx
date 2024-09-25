'use client';

import type React from 'react';
import { useState, useEffect, useRef } from 'react';
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
  { year: 1991, boys: 55, girls: 47 },
  { year: 1993, boys: 54, girls: 45 },
  { year: 1995, boys: 53, girls: 46 },
  { year: 1997, boys: 52, girls: 46 },
  { year: 1999, boys: 52, girls: 45 },
  { year: 2001, boys: 50, girls: 44 },
  { year: 2003, boys: 49, girls: 43 },
  { year: 2005, boys: 48, girls: 42 },
  { year: 2007, boys: 47, girls: 41 },
  { year: 2009, boys: 45, girls: 38 },
  { year: 2011, boys: 44, girls: 37 },
  { year: 2013, boys: 40, girls: 32 },
  { year: 2015, boys: 33, girls: 27 },
  { year: 2017, boys: 30, girls: 25 },
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

export function ChartMeetUpWithFriends() {
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
          <CardTitle>Meet Up with Friends Daily</CardTitle>
          <CardDescription>
            Percentage of U.S. students (8th, 10th, and 12th grade) who say that
            they meet up with their friends "almost every day" outside school
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
                    domain={[0, 60]}
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
                Trending down since 1991 <TrendingDown className='h-4 w-4' />
              </div>
              <div className='flex items-center gap-2 leading-none text-muted-foreground'>
                Percentage of U.S. students (8th, 10th, and 12th grade) who say
                that they meet up with their friends "almost every day" outside
                school.
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
