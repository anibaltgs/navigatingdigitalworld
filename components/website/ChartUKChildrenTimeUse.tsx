'use client';

import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
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

// Define the type for chart data
interface ChartData {
  year: number;
  screenBased: number;
  homework: number;
  sport: number;
  socializing: number;
  outdoorPlay: number;
}

const chartData: ChartData[] = [
  {
    year: 1975,
    screenBased: 0,
    homework: 0,
    sport: 0,
    socializing: 0,
    outdoorPlay: 0,
  },
  {
    year: 2000,
    screenBased: 15,
    homework: 12,
    sport: 12,
    socializing: -7,
    outdoorPlay: -20,
  },
  {
    year: 2015,
    screenBased: 23,
    homework: 18,
    sport: 17,
    socializing: -13,
    outdoorPlay: -30,
  },
];

const chartConfig: ChartConfig = {
  screenBased: {
    label: 'Screen-based activities',
    color: 'hsl(var(--chart-1))',
  },
  homework: {
    label: 'Homework',
    color: 'hsl(var(--chart-2))',
  },
  sport: {
    label: 'Sport',
    color: 'hsl(var(--chart-3))',
  },
  socializing: {
    label: 'Socializing out of the home',
    color: 'hsl(var(--chart-4))',
  },
  outdoorPlay: {
    label: 'Outdoor play',
    color: 'hsl(var(--chart-5))',
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

export function ChartUKChildrenTimeUse() {
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
          <CardTitle>UK Children's Daily Time Use, 1975 - 2015</CardTitle>
          <CardDescription>
            Percentage change in time spent on various activities since 1975
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
                    domain={[-40, 30]}
                    label={{
                      value: 'Change since 1975 (%)',
                      angle: -90,
                      position: 'insideLeft',
                      style: { textAnchor: 'middle' },
                    }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  {Object.keys(chartConfig).map((key) => (
                    <Line
                      key={key}
                      type='monotone'
                      dataKey={key as keyof ChartData}
                      stroke={chartConfig[key as keyof ChartConfig].color}
                      strokeWidth={2}
                      dot={true}
                      strokeDasharray={`${animationProgress * 100}%`}
                    />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          )}
        </CardContent>
        <CardFooter>
          <div className='flex w-full items-start gap-2 text-sm'>
            <div className='grid gap-2'>
              <div className='flex items-center gap-2 font-medium leading-none'>
                <TrendingUp className='h-4 w-4' /> Screen-based and supervised
                activities have increased since 1975...
              </div>
              <div className='flex items-center gap-2 font-medium leading-none'>
                <TrendingDown className='h-4 w-4' /> ...while unsupervised
                activities have decreased.
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
