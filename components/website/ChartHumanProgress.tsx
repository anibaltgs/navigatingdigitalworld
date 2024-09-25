'use client';
import { PersonStanding } from 'lucide-react';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';

const chartData = [
  { x: 0, y: 0 },
  { x: 80, y: 5 },
  { x: 100, y: 100 },
];

export function ChartHumanProgress() {
  return (
    <div className='mb-7 flex w-full justify-center'>
      <Card className='w-full max-w-3xl'>
        <CardHeader>
          <CardTitle>Human Progress</CardTitle>
          <CardDescription>
            Time and perceived human progress over time.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='relative h-[400px] w-full'>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
              >
                <XAxis
                  dataKey='x'
                  tick={false} // Hides the tick numbers
                  axisLine={true} // Keeps the axis line
                  tickLine={false} // Removes the tick lines
                />
                <YAxis
                  tick={false} // Hides the tick numbers
                  axisLine={true} // Keeps the axis line
                  tickLine={false} // Removes the tick lines
                />
                <Line
                  type='monotone'
                  dataKey='y'
                  stroke='hsl(var(--primary))'
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={false}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className='absolute bottom-[18%] right-[45%] translate-x-1/2 translate-y-1/2 transform'>
              <PersonStanding className='h-6 w-6 text-primary' />
            </div>
            <div className='absolute bottom-0 right-6 p-2 text-sm font-medium'>
              Time
            </div>
            <div className='absolute -left-2 bottom-[50%] origin-center rotate-90 transform p-2 text-sm font-medium'>
              Human Progress
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className='w-full text-center'>
            We are in an intense place in time. However, on a time graph, we
            cannot see whats on the right.
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
