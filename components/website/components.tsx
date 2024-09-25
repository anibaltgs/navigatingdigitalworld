import dynamic from 'next/dynamic';
import Feature from '@/components/website/feature-three-1';
import Feature2 from '@/components/website/feature-three-2';
import Feature3 from '@/components/website/feature-three-3';
import Feature4 from '@/components/website/feature-three-4';
import {
  CarouselBasic,
  CarouselWithCaptions,
} from '@/components/website/carousel';
import { LineChartMultiple } from '@/components/ui/LineChartMultiple';
import { TechMilestonesTable } from '@/components/website/TechMilestonesTable';
import { AnimatedCardBackgroundHover } from './animatedbackground';
import { TechAdoptionChart } from './TechAdoptionChart';
import { ChartMeetUpWithFriends } from './ChartMeetUpWithFriends';
import { ChartOftenFeelLonely } from './ChartOftenFeelLonely';
import { ChartHaveFewCloseFriends } from './ChartHaveFewCloseFriends';
import { BoredomCreativitySlider } from './BoredomSlider';
import { Accordion395org } from './359org';
import { Farol1 } from './farol1';
import Feature5 from './feature-three-5';
import Video from '../ui/video';
import { ChartUKChildrenTimeUse } from './ChartUKChildrenTimeUse';
// import { DummyCarousel } from '../ui/dummycarousel';
import PlayfulCurvedMenu from './PlayfulCurvedMenu';
import Feature6 from './feature-three-6';
import TokenPredictor from './TokenPredictor';
import Feature7 from './feature-three-7';
import Feature8 from './feature-three-8';
import Feature9 from './feature-three-9';
import Feature10 from './feature-three-10';
import Feature11 from './feature-three-11';
import { ChartHumanProgress } from './ChartHumanProgress';
import { ChartHumanProgress2 } from './ChartHumanProgress2';
import { Separator } from '../ui/separator';
import { ChartHumanProgress3 } from './ChartHumanProgress3';
import Feature12 from './feature-three-12';
import Feature13 from './feature-three-13';

import Feature15 from './feature-three-15';
import { Farol2 } from './farol2';
import { DialogBasicImage } from './DialogBasicImage';
import { ChartSankey } from './ChartSankey';

import NextButton from './NextButton';
import { HumanHistoryTimeline } from './HumanHistoryTimeline';
import { TabsTransitionPanelAI } from './TabsTransitionPanelAI';
import { TabsTransitionPanelAI2 } from './TabsTransitionPanelAI2';
import { TabsTransitionPanelAI3 } from './TabsTransitionPanelAI3';
import { AnimatedCardBackgroundHoverAI } from './animatedbackgroundAI';
import { DisclosureCard } from './DisclosureCard';
import { AnimatedCardBackgroundHoverAI0 } from './animatedbackgroundAI0';

// import Feature16 from './feature-three-16';
export const DynamicTabsTransitionPanel = dynamic(
  () =>
    import('@/components/website/TabsTransitionPanel').then(
      (mod) => mod.TabsTransitionPanel
    ),
  { ssr: false }
);

export {
  Feature,
  Feature2,
  CarouselBasic,
  CarouselWithCaptions,
  LineChartMultiple,
  TechMilestonesTable,
  AnimatedCardBackgroundHover,
  Feature3,
  TechAdoptionChart,
  ChartMeetUpWithFriends,
  ChartOftenFeelLonely,
  ChartHaveFewCloseFriends,
  Feature4,
  BoredomCreativitySlider,
  Accordion395org,
  Farol1,
  Feature5,
  Video,
  ChartUKChildrenTimeUse,
  // DummyCarousel,
  PlayfulCurvedMenu,
  Feature6,
  TokenPredictor,
  Feature7,
  Feature8,
  Feature9,
  Feature10,
  Feature11,
  ChartHumanProgress,
  ChartHumanProgress2,
  Separator,
  ChartHumanProgress3,
  Feature12,
  Feature13,
  Feature15,
  Farol2,
  DialogBasicImage,
  ChartSankey,
  // Feature16,
  NextButton,
  HumanHistoryTimeline,
  TabsTransitionPanelAI,
  TabsTransitionPanelAI2,
  TabsTransitionPanelAI3,
  AnimatedCardBackgroundHoverAI0,
  AnimatedCardBackgroundHoverAI,
  DisclosureCard,
};
