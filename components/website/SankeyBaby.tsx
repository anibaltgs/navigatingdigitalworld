import React from 'react';
import { Chart } from 'react-google-charts';

export const data = [
  ['From', 'To', 'Weight'],
  ['Baby Boomers', 'Limited Tech Exposure', 80],
  ['Baby Boomers', 'Traditional Media', 20],
  ['Gen X', 'Early Digital Age', 60],
  ['Gen X', 'Personal Computers', 40],
  ['Millennials', 'Internet Growth', 50],
  ['Millennials', 'Mobile Technology', 50],
  ['Gen Z', 'Smartphones', 40],
  ['Gen Z', 'Social Media', 40],
  ['Gen Z', 'Digital Fluency', 20],
  ['Gen Alpha', 'AI Integration', 40],
  ['Gen Alpha', 'Smart Devices', 40],
  ['Gen Alpha', 'Advanced Digital Tech', 20],
  ['Limited Tech Exposure', 'Adapting to Digital World', 80],
  ['Traditional Media', 'Print to Digital Transition', 20],
  ['Early Digital Age', 'Tech Adoption Challenges', 60],
  ['Personal Computers', 'Work-Life Integration', 40],
  ['Internet Growth', 'Online Privacy Concerns', 50],
  ['Mobile Technology', 'Always-On Culture', 50],
  ['Smartphones', 'Screen Time Issues', 40],
  ['Social Media', 'Online Identity Management', 40],
  ['Digital Fluency', 'Information Overload', 20],
  ['AI Integration', 'AI Ethics Concerns', 40],
  ['Smart Devices', 'Data Privacy Issues', 40],
  ['Advanced Digital Tech', 'Rapid Tech Adaptation', 20],
];

export const options = {
  sankey: {
    node: {
      colors: ['#2D82B7', '#42E2B8', '#F7B538', '#E6AF2E', '#BF1A2F'],
      label: {
        fontName: 'Arial',
        fontSize: 12,
        color: '#000000',
      },
    },
    link: {
      colorMode: 'gradient',
      colors: ['#2D82B7', '#42E2B8', '#F7B538', '#E6AF2E', '#BF1A2F'],
    },
  },
};

export function SankeyBaby() {
  return (
    <Chart
      chartType='Sankey'
      width='100%'
      height='500px'
      data={data}
      options={options}
    />
  );
}
