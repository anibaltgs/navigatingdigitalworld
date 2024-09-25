'use client';

import type React from 'react';
import { useState, useEffect, useRef, useCallback } from 'react';
import { TrendingUp } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
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
import type { ChartConfig as ImportedChartConfig } from '@/components/ui/chart';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Input } from '@/components/ui/input';

// Define the structure of each prediction
interface Prediction {
  token: string;
  score: number;
}

// Define the keys used in ChartData excluding 'year'
type ChartKeys = 'score';

// Define the ChartConfig interface with a string index signature
// Assuming the imported ChartConfig expects a string index signature
interface LocalChartConfig extends ImportedChartConfig {
  [key: string]: {
    label: string;
    color: string;
  };
}

// Define the chart configuration adhering to the LocalChartConfig interface
const chartConfig: LocalChartConfig = {
  score: {
    label: 'Score',
    color: 'hsl(var(--chart-1))',
  },
} satisfies LocalChartConfig;

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

// Define the drink preferences with corresponding scores
const drinkPreferences: Record<string, number> = {
  mate: 0.5,
  coffee: 0.3,
  tea: 0.15,
  water: 0.05,
};

/**
 * TokenPredictor Component
 *
 * Simulates next token predictions based on user input.
 */
const TokenPredictor: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [predictions, setPredictions] = useState<Prediction[]>([]);

  const chartRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(chartRef, { threshold: 0.1 });

  /**
   * Predicts the next tokens based on the input text.
   * Uses predefined drink preferences or random scores if the trigger phrase is not found.
   */
  const predictNextToken = useCallback((text: string): Prediction[] => {
    const lowercaseText = text.toLowerCase();
    if (lowercaseText.includes('uruguayans like drinking')) {
      return Object.entries(drinkPreferences)
        .map(([token, score]) => ({
          token,
          score: score * 100, // Convert to percentage for better visualization
        }))
        .sort((a, b) => b.score - a.score);
    }
    // Default predictions if the trigger phrase is not found
    return Object.entries(drinkPreferences)
      .map(([token, score]) => ({
        token,
        score: Math.random() * 50, // Random scores for non-matching input
      }))
      .sort((a, b) => b.score - a.score);
  }, []);

  /**
   * Updates predictions whenever the input changes.
   */
  useEffect(() => {
    setPredictions(predictNextToken(input));
  }, [input, predictNextToken]);

  return (
    <div className='flex w-full justify-center'>
      <Card className='w-full max-w-2xl' ref={chartRef}>
        <CardHeader>
          <CardTitle>Interactive Token Predictor</CardTitle>
          <CardDescription>Next Token Prediction Simulation</CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            type='text'
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='mb-4'
            placeholder='Try typing: Uruguayans like drinking'
          />
          {isVisible && (
            <ChartContainer config={chartConfig}>
              <ResponsiveContainer width='100%' height={200}>
                <BarChart data={predictions}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey='token'
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent />}
                  />
                  <Bar
                    dataKey='score'
                    fill={chartConfig.score.color} // Simplified using dot notation
                    radius={4}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          )}
        </CardContent>
        <CardFooter className='flex-col items-start gap-2 text-sm'>
          <div className='flex gap-2 font-medium leading-none'>
            Predictions update in real-time <TrendingUp className='h-4 w-4' />
          </div>
          <div className='leading-none text-muted-foreground'>
            This demo simulates how LLMs predict the next token based on input
            context.
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TokenPredictor;
