import React from "react";
import { CreateMeshGradientSection } from "./sections/CreateMeshGradientSection";
import { FeaturesDisplaySection } from "./sections/FeaturesDisplaySection";
import { FeaturesOverviewSection } from "./sections/FeaturesOverviewSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { MainContentSection } from "./sections/MainContentSection";

export const IndustriesWePower = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center relative bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(38,59,55,1)_100%)]">
      <HeroBannerSection />
      <FeaturesOverviewSection />
      <MainContentSection />
      <FeaturesDisplaySection />
      <CreateMeshGradientSection />
      <FooterSection />
    </div>
  );
};
