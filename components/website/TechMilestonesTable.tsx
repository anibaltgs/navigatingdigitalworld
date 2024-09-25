'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const milestones = [
  { id: 1, year: 2007, event: 'First iPhone' },
  { id: 2, year: 2008, event: 'First Android smartphone' },
  { id: 3, year: 2009, event: 'Twitter adds "retweet" option' },
  { id: 4, year: 2009, event: 'Facebook launches "like" button' },
  { id: 5, year: 2010, event: 'First front-facing camera (selfies easier)' },
  { id: 6, year: 2010, event: 'Instagram' },
  { id: 7, year: 2010, event: 'First iPad' },
  { id: 8, year: 2011, event: 'Snapchat' },
  { id: 9, year: 2012, event: 'Pinterest' },
  { id: 10, year: 2012, event: 'Facebook buys Instagram' },
  { id: 11, year: 2016, event: 'Instagram offers stories' },
  { id: 12, year: 2016, event: 'TikTok becomes available in US' },
  { id: 13, year: 2018, event: 'TikTok is #1 most downloaded app in US' },
];

const highlightYears = [2007, 2009, 2010];

export function TechMilestonesTable() {
  const [highlightActive, setHighlightActive] = useState(false);
  const tableRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // This will trigger when the table is 40% into view
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setHighlightActive(true);
        } else {
          setHighlightActive(false);
        }
      });
    }, options);

    if (tableRef.current) {
      observer.observe(tableRef.current);
    }

    return () => {
      if (tableRef.current) {
        observer.unobserve(tableRef.current);
      }
    };
  }, []);

  return (
    <Table ref={tableRef}>
      <TableCaption>Social Media and Technology Milestones</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Year</TableHead>
          <TableHead>Event</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {milestones.map((milestone) => (
          <TableRow
            key={milestone.id}
            className={`${
              highlightActive && highlightYears.includes(milestone.year)
                ? 'bg-muted'
                : ''
            } transition-colors duration-300 hover:bg-muted`}
          >
            <TableCell className='font-medium'>{milestone.year}</TableCell>
            <TableCell>{milestone.event}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
