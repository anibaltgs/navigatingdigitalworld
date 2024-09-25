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
import type { ChartConfig as ImportedChartConfig } from '@/components/ui/chart';

// Define the type for chart data
interface ChartData {
  year: number;
  radio: number;
  colorTV: number;
  personalComputer: number;
  internet: number;
  smartphone: number;
  socialMedia: number;
}

// Define the keys used in ChartData excluding 'year'
type ChartKeys =
  | 'radio'
  | 'colorTV'
  | 'personalComputer'
  | 'internet'
  | 'smartphone'
  | 'socialMedia';

// Define the ChartConfig matching the ChartKeys with a string index signature
interface LocalChartConfig {
  [key: string]: {
    label: string;
    color: string;
  };
}

const chartData: ChartData[] = [
  {
    year: 1925,
    radio: 10,
    colorTV: 0,
    personalComputer: 0,
    internet: 0,
    smartphone: 0,
    socialMedia: 0,
  },
  {
    year: 1930,
    radio: 40,
    colorTV: 0,
    personalComputer: 0,
    internet: 0,
    smartphone: 0,
    socialMedia: 0,
  },
  {
    year: 1935,
    radio: 70,
    colorTV: 0,
    personalComputer: 0,
    internet: 0,
    smartphone: 0,
    socialMedia: 0,
  },
  {
    year: 1940,
    radio: 82,
    colorTV: 0,
    personalComputer: 0,
    internet: 0,
    smartphone: 0,
    socialMedia: 0,
  },
  {
    year: 1945,
    radio: 88,
    colorTV: 0,
    personalComputer: 0,
    internet: 0,
    smartphone: 0,
    socialMedia: 0,
  },
  {
    year: 1950,
    radio: 95,
    colorTV: 0,
    personalComputer: 0,
    internet: 0,
    smartphone: 0,
    socialMedia: 0,
  },
  {
    year: 1955,
    radio: 96,
    colorTV: 5,
    personalComputer: 0,
    internet: 0,
    smartphone: 0,
    socialMedia: 0,
  },
  {
    year: 1960,
    radio: 98,
    colorTV: 10,
    personalComputer: 0,
    internet: 0,
    smartphone: 0,
    socialMedia: 0,
  },
  {
    year: 1965,
    radio: 99,
    colorTV: 25,
    personalComputer: 0,
    internet: 0,
    smartphone: 0,
    socialMedia: 0,
  },
  {
    year: 1970,
    radio: 99,
    colorTV: 35,
    personalComputer: 0,
    internet: 0,
    smartphone: 0,
    socialMedia: 0,
  },
  {
    year: 1975,
    radio: 99,
    colorTV: 70,
    personalComputer: 0,
    internet: 0,
    smartphone: 0,
    socialMedia: 0,
  },
  {
    year: 1980,
    radio: 99,
    colorTV: 85,
    personalComputer: 1,
    internet: 0,
    smartphone: 0,
    socialMedia: 0,
  },
  {
    year: 1985,
    radio: 99,
    colorTV: 92,
    personalComputer: 15,
    internet: 0,
    smartphone: 0,
    socialMedia: 0,
  },
  {
    year: 1990,
    radio: 99,
    colorTV: 95,
    personalComputer: 23,
    internet: 0,
    smartphone: 0,
    socialMedia: 0,
  },
  {
    year: 1995,
    radio: 99,
    colorTV: 97,
    personalComputer: 35,
    internet: 10,
    smartphone: 0,
    socialMedia: 0,
  },
  {
    year: 2000,
    radio: 99,
    colorTV: 98,
    personalComputer: 62,
    internet: 45,
    smartphone: 0,
    socialMedia: 0,
  },
  {
    year: 2005,
    radio: 99,
    colorTV: 98,
    personalComputer: 75,
    internet: 65,
    smartphone: 2,
    socialMedia: 5,
  },
  {
    year: 2010,
    radio: 99,
    colorTV: 98,
    personalComputer: 82,
    internet: 75,
    smartphone: 45,
    socialMedia: 45,
  },
  {
    year: 2015,
    radio: 99,
    colorTV: 98,
    personalComputer: 87,
    internet: 85,
    smartphone: 75,
    socialMedia: 68,
  },
];

const chartConfig: LocalChartConfig = {
  radio: {
    label: 'Radio',
    color: 'hsl(var(--chart-1))',
  },
  colorTV: {
    label: 'Color TV',
    color: 'hsl(var(--chart-2))',
  },
  personalComputer: {
    label: 'Personal computer',
    color: 'hsl(var(--chart-3))',
  },
  internet: {
    label: 'Internet',
    color: 'hsl(var(--chart-4))',
  },
  smartphone: {
    label: 'Smartphone',
    color: 'hsl(var(--chart-5))',
  },
  socialMedia: {
    label: 'Social media',
    color: 'hsl(var(--chart-6))',
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

export function TechAdoptionChart() {
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
          <CardTitle>Communication Technology Adoption</CardTitle>
          <CardDescription>
            The share of U.S. households using specific technologies
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
                    ticks={[1925, 1940, 1955, 1970, 1985, 2000, 2015]}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    domain={[0, 100]}
                    label={{
                      value: 'Percent of U.S. Households',
                      angle: -90,
                      position: 'insideLeft',
                      style: { textAnchor: 'middle' },
                    }}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  {(Object.keys(chartConfig) as ChartKeys[]).map((key) => (
                    <Line
                      key={key}
                      type='monotone'
                      dataKey={key}
                      name={chartConfig[key].label}
                      stroke={chartConfig[key].color}
                      strokeWidth={2}
                      dot={false}
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
                Smartphone adoption was the fastest{' '}
                <TrendingUp className='h-4 w-4' />
              </div>
              <div className='flex items-center gap-2 leading-none text-muted-foreground'>
                The smartphone was adopted faster than any other communication
                technology in history.
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
