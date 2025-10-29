import React from "react";
import { DataInsightsSection } from "./sections/DataInsightsSection";
import { FeaturesOverviewSection } from "./sections/FeaturesOverviewSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { MainFooterSection } from "./sections/MainFooterSection";

export const GridConnected = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center relative bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(38,59,55,1)_100%)]">
      <HeroBannerSection />
      <FeaturesOverviewSection />
      <DataInsightsSection />
      <MainFooterSection />
    </div>
  );
};
