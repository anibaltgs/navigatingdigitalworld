'use client';
import React, { useEffect, useRef } from 'react';
import { Chart } from 'react-google-charts';
import type { GoogleChartOptions } from 'react-google-charts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from '@/components/ui/card';
import { ChartContainer } from '@/components/ui/chart';
import type { ChartConfig } from '@/components/ui/chart';

export const data = [
  ['From', 'To', 'Weight'],
  ['Baby Boomers', 'Traditional Media Use', 50],
  ['Baby Boomers', 'Late Digital Adoption', 35],
  ['Baby Boomers', 'Social Media Engagement', 15],
  ['Gen X', 'Work-Life Tech Integration', 35],
  ['Gen X', 'Social Media Engagement', 25],
  ['Gen X', 'Smartphone Dependency', 35],
  ['Gen X', 'Streaming Media Consumption', 25],
  ['Millennials', 'Social Media Engagement', 35],
  ['Millennials', 'Smartphone Dependency', 40],
  ['Millennials', 'Digital Workplace Adaptation', 30],
  ['Millennials', 'Gig Economy Engagement', 15],
  ['Gen Z', 'Smartphone Dependency', 45],
  ['Gen Z', 'Social Media Immersion', 40],
  ['Gen Z', 'AI and Smart Device Usage', 20],
  ['Gen Z', 'Content Creation', 15],
  ['Gen Alpha', 'Smartphone Dependency', 40],
  ['Gen Alpha', 'AI and Smart Device Usage', 30],
  ['Gen Alpha', 'Virtual Learning Engagement', 25],
  ['Gen Alpha', 'Gamification in Learning', 25],
];

const chartColors = [
  '#FF6384',
  '#36A2EB',
  '#FFCE56',
  '#4BC0C0',
  '#9966FF',
  '#FF9F40',
];

function isHTMLElement(node: Node): node is HTMLElement {
  return node.nodeType === Node.ELEMENT_NODE;
}

export function ChartSankey() {
  const chartRef = useRef(null);

  const googleChartOptions: GoogleChartOptions = {
    sankey: {
      node: {
        colors: chartColors,
        label: { fontSize: 14, color: '#FFFFFF', bold: false },
      },
      link: {
        colorMode: 'gradient',
        colors: chartColors,
      },
    },
    tooltip: { trigger: 'none' },
    backgroundColor: 'transparent',
  };

  const chartConfig: ChartConfig = {
    label: {
      label: 'Generational Technology Usage',
    },
    color: {
      color: '#FF6384',
    },
  };

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.addedNodes.length) {
          for (const node of Array.from(mutation.addedNodes)) {
            if (
              isHTMLElement(node) &&
              node.classList.contains('google-visualization-tooltip')
            ) {
              node.style.display = 'none';
            }
          }
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>Generational Technology Usage</CardTitle>
        <CardDescription>
          Sankey diagram showing the distribution of technology usage across
          generations.
        </CardDescription>
      </CardHeader>
      <CardContent className='relative'>
        <ChartContainer
          className='relative h-[500px] w-full'
          config={chartConfig}
        >
          <Chart
            ref={chartRef}
            chartType='Sankey'
            width='100%'
            height='100%'
            data={data}
            options={googleChartOptions}
          />
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        <div className='flex gap-2 font-medium leading-none'>
          Generation Age Ranges (as of 2024):
        </div>
        <div className='grid grid-cols-2 gap-x-4 gap-y-1 text-muted-foreground'>
          <div>Baby Boomers: 60-78 years</div>
          <div>Gen X: 44-59 years</div>
          <div>Millennials: 28-43 years</div>
          <div>Gen Z: 12-27 years</div>
          <div>Gen Alpha: 0-11 years</div>
        </div>
      </CardFooter>
    </Card>
  );
}
