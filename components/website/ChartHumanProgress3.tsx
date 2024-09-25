'use client';
import type React from 'react';
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

interface DataPoint {
  x: number;
  y: number;
}

const chartData: DataPoint[] = [
  { x: 0, y: 0 },
  { x: 20, y: 5 },
  { x: 40, y: 15 },
  { x: 60, y: 40 },
  { x: 80, y: 70 },
  { x: 100, y: 100 },
];

const NewSVG: React.FC = () => (
  <svg
    className='absolute bottom-5 left-12 right-0 h-full w-full'
    viewBox='0 0 510 400'
    preserveAspectRatio='none'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <title>Background Wave</title>
    <path
      d='M2 401.5L7.91277 378.412C9.88443 370.713 19.6154 368.28 24.9791 374.144L37.1701 387.473C42.6043 393.414 52.4735 390.825 54.291 382.981L56.3978 373.888C57.93 367.276 65.4643 364.079 71.2847 367.571L85.2983 375.979C91.0945 379.457 98.5997 376.301 100.17 369.727L101.975 362.167C103.502 355.774 110.675 352.567 116.457 355.693L127.245 361.524C133.908 365.126 142 360.301 142 352.727V348.533C142 340.196 151.602 335.52 158.166 340.66L167.334 347.84C173.898 352.98 183.5 348.304 183.5 339.967V323.91C183.5 315.979 192.291 311.205 198.944 315.522L215.056 325.978C221.709 330.295 230.5 325.521 230.5 317.59V305.808C230.5 298.724 237.664 293.886 244.236 296.533L249.657 298.716C256.833 301.606 264.326 295.308 262.712 287.742V287.742C261.019 279.806 269.273 273.446 276.515 277.106L284.995 281.393C292.553 285.214 301.142 278.496 299.255 270.24L296.586 258.562C294.726 250.426 303.061 243.727 310.606 247.292L318.081 250.824C325.766 254.455 334.19 247.451 332.023 239.232L328.81 227.05C327.137 220.708 331.92 214.5 338.479 214.5H364.552C371.539 214.5 376.372 207.517 373.911 200.978L369.318 188.774C366.283 180.709 374.189 172.838 382.24 175.908L399.747 182.583C409.026 186.121 417.231 175.435 411.417 167.385L395.403 145.212C389.901 137.593 396.994 127.28 406.077 129.692L421.105 133.684C429.503 135.915 436.554 127.111 432.543 119.404L417.699 90.8753C415.283 86.2308 419.774 81.0162 424.726 82.7182V82.7182C430.164 84.5876 434.712 78.251 431.2 73.6971L421.707 61.3853C417.336 55.7174 421.377 47.5 428.534 47.5V47.5C436.435 47.5 440.174 37.7565 434.301 32.471L426.221 25.1987C420.031 19.6282 422.963 9.37567 431.162 7.91981L464.5 2'
      stroke='#CED5DD'
      strokeWidth='3'
    />
  </svg>
);

export function ChartHumanProgress3() {
  return (
    <div className='mb-7 flex w-full justify-center'>
      <Card className='w-full max-w-3xl bg-black text-white'>
        <CardHeader>
          <CardTitle>Human Progress</CardTitle>
          <CardDescription>
            Time and perceived human progress over time.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='relative h-[400px] w-full'>
            <NewSVG />
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
              >
                <XAxis
                  dataKey='x'
                  tick={false}
                  axisLine={{ stroke: 'white' }}
                  tickLine={false}
                />
                <YAxis
                  tick={false}
                  axisLine={{ stroke: 'white' }}
                  tickLine={false}
                />
                <Line
                  type='monotone'
                  dataKey='y'
                  stroke='white'
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={false}
                  connectNulls
                />
              </LineChart>
            </ResponsiveContainer>
            <div className='absolute bottom-[28%] right-[45%] translate-x-1/2 translate-y-1/2 transform'>
              <PersonStanding className='h-6 w-6 text-white' />
            </div>
            <div className='absolute bottom-0 right-6 p-2 text-sm font-medium text-white'>
              Time
            </div>
            <div className='absolute -left-2 bottom-[50%] origin-center rotate-90 transform p-2 text-sm font-medium text-white'>
              Human Progress
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className='w-full text-center text-white'>
            An S is created by the wave of progress when a new paradigm sweeps
            the world.
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

// 'use client';

// import type React from 'react';
// import { useState, useEffect, useRef } from 'react';
// import { PersonStanding } from 'lucide-react';
// import {
//   LineChart,
//   Line,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   ReferenceLine,
// } from 'recharts';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from '@/components/ui/chart';

// /**
//  * Define the structure of each data point
//  */
// interface DataPoint {
//   x: number;
//   y: number;
// }

// /**
//  * Enhanced chart data with more points for a smoother S-curve
//  */
// const chartData: DataPoint[] = [
//   { x: 0, y: 0 },
//   { x: 10, y: 2 },
//   { x: 20, y: 5 },
//   { x: 30, y: 10 },
//   { x: 40, y: 15 },
//   { x: 50, y: 25 },
//   { x: 60, y: 40 },
//   { x: 70, y: 55 },
//   { x: 80, y: 70 },
//   { x: 90, y: 85 },
//   { x: 100, y: 100 },
// ];

// /**
//  * Define the ChartConfig interface with a string index signature
//  */
// interface LocalChartConfig {
//   [key: string]: {
//     label: string;
//     color: string;
//   };
// }

// /**
//  * Define the chart configuration adhering to the LocalChartConfig interface
//  */
// const chartConfig: LocalChartConfig = {
//   score: {
//     label: 'Score',
//     color: 'hsl(var(--chart-1))',
//   },
// } satisfies LocalChartConfig;

// /**
//  * Custom hook to observe the intersection of a DOM element.
//  *
//  * @param ref - React ref object pointing to the DOM element to observe.
//  * @param options - IntersectionObserver options.
//  * @returns A boolean indicating whether the element is intersecting.
//  */
// const useIntersectionObserver = (
//   ref: React.RefObject<Element>,
//   options?: IntersectionObserverInit
// ): boolean => {
//   const [isIntersecting, setIsIntersecting] = useState(false);

//   useEffect(() => {
//     if (!ref.current) return;

//     const observer = new IntersectionObserver(([entry]) => {
//       setIsIntersecting(entry.isIntersecting);
//     }, options);

//     observer.observe(ref.current);

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [ref, options]);

//   return isIntersecting;
// };

// /**
//  * NewSVG Component
//  *
//  * Renders the background wave SVG.
//  */
// const NewSVG: React.FC = () => (
//   <svg
//     className='absolute bottom-16 left-10 right-0 h-full w-full'
//     viewBox='0 0 510 400'
//     preserveAspectRatio='none'
//     fill='none'
//     xmlns='http://www.w3.org/2000/svg'
//   >
//     <title>Background Wave</title>
//     <path
//       d='M2 401.5L7.91277 378.412C9.88443 370.713 19.6154 368.28 24.9791 374.144L37.1701 387.473C42.6043 393.414 52.4735 390.825 54.291 382.981L56.3978 373.888C57.93 367.276 65.4643 364.079 71.2847 367.571L85.2983 375.979C91.0945 379.457 98.5997 376.301 100.17 369.727L101.975 362.167C103.502 355.774 110.675 352.567 116.457 355.693L127.245 361.524C133.908 365.126 142 360.301 142 352.727V348.533C142 340.196 151.602 335.52 158.166 340.66L167.334 347.84C173.898 352.98 183.5 348.304 183.5 339.967V323.91C183.5 315.979 192.291 311.205 198.944 315.522L215.056 325.978C221.709 330.295 230.5 325.521 230.5 317.59V305.808C230.5 298.724 237.664 293.886 244.236 296.533L249.657 298.716C256.833 301.606 264.326 295.308 262.712 287.742V287.742C261.019 279.806 269.273 273.446 276.515 277.106L284.995 281.393C292.553 285.214 301.142 278.496 299.255 270.24L296.586 258.562C294.726 250.426 303.061 243.727 310.606 247.292L318.081 250.824C325.766 254.455 334.19 247.451 332.023 239.232L328.81 227.05C327.137 220.708 331.92 214.5 338.479 214.5H364.552C371.539 214.5 376.372 207.517 373.911 200.978L369.318 188.774C366.283 180.709 374.189 172.838 382.24 175.908L399.747 182.583C409.026 186.121 417.231 175.435 411.417 167.385L395.403 145.212C389.901 137.593 396.994 127.28 406.077 129.692L421.105 133.684C429.503 135.915 436.554 127.111 432.543 119.404L417.699 90.8753C415.283 86.2308 419.774 81.0162 424.726 82.7182V82.7182C430.164 84.5876 434.712 78.251 431.2 73.6971L421.707 61.3853C417.336 55.7174 421.377 47.5 428.534 47.5V47.5C436.435 47.5 440.174 37.7565 434.301 32.471L426.221 25.1987C420.031 19.6282 422.963 9.37567 431.162 7.91981L464.5 2'
//       stroke='#CED5DD'
//       strokeWidth='3'
//     />
//   </svg>
// );

// /**
//  * ChartHumanProgress3 Component
//  *
//  * Renders a line chart representing human progress over time with a smooth S-curve.
//  */
// export function ChartHumanProgress3() {
//   const chartRef = useRef<HTMLDivElement>(null);
//   const isVisible = useIntersectionObserver(chartRef, { threshold: 0.1 });

//   return (
//     <div className='mb-7 flex w-full justify-center'>
//       <Card className='w-full max-w-3xl bg-black text-white'>
//         <CardHeader>
//           <CardTitle>Human Progress</CardTitle>
//           <CardDescription>
//             Time and perceived human progress over time.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className='relative h-[400px] w-full' ref={chartRef}>
//             <NewSVG />
//             {isVisible && (
//               <ChartContainer config={chartConfig}>
//                 <ResponsiveContainer width='100%' height='100%'>
//                   <LineChart
//                     data={chartData}
//                     margin={{ top: 20, right: 30, left: 80, bottom: 40 }} // Increased left margin and adjusted bottom margin
//                   >
//                     <CartesianGrid vertical={false} horizontal={false} />{' '}
//                     {/* Disabled grid lines */}
//                     <XAxis
//                       dataKey='x'
//                       tick={false}
//                       axisLine={{ stroke: '#666', strokeWidth: 1 }} // Customized X-axis line
//                       tickLine={false}
//                       type='number'
//                       domain={[0, 100]}
//                     />
//                     <YAxis
//                       tick={false}
//                       axisLine={{ stroke: '#666', strokeWidth: 1 }} // Customized Y-axis line
//                       tickLine={false}
//                       domain={[0, 100]} // Set domain based on your data
//                     />
//                     <Line
//                       type='monotone' // Changed from 'cardinal' to 'monotone'
//                       dataKey='y'
//                       stroke='white'
//                       strokeWidth={2}
//                       dot={false}
//                       isAnimationActive={false}
//                       // Removed tension as 'monotone' handles smoothness
//                     />
//                     {/* Optional: Add Reference Lines */}
//                     {/* Example: Horizontal line at y=50 */}
//                     {/* <ReferenceLine y={50} stroke="#666" strokeWidth={2} /> */}
//                   </LineChart>
//                 </ResponsiveContainer>
//               </ChartContainer>
//             )}
//             <div className='absolute bottom-[28%] right-[45%] translate-x-1/2 translate-y-1/2 transform'>
//               <PersonStanding className='h-6 w-6 text-white' />
//             </div>
//             <div className='absolute bottom-0 right-6 p-2 text-sm font-medium text-white'>
//               Time
//             </div>
//             <div className='absolute -left-2 bottom-[50%] origin-center rotate-90 transform p-2 text-sm font-medium text-white'>
//               Human Progress
//             </div>
//           </div>
//         </CardContent>
//         <CardFooter>
//           <div className='w-full text-center text-white'>
//             An S is created by the wave of progress when a new paradigm sweeps
//             the world.
//           </div>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }
