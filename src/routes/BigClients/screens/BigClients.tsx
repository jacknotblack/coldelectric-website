import React from "react";
import { ContentWrapperSection } from "./sections/ContentWrapperSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroHeaderSection } from "./sections/HeroHeaderSection";
import { MainContentSection } from "./sections/MainContentSection";
import { ProductsSection } from "./sections/ProductsSection";

export const BigClients = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center relative overflow-hidden bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(38,59,55,1)_100%)]">
      <HeroHeaderSection />
      <MainContentSection />
      <FeaturesSection />
      <ContentWrapperSection />
      <ProductsSection />
      <FooterSection />
      <img
        className="absolute top-[-268px] left-[594px] w-[951px] h-[1443px] z-0"
        alt="Mark"
        src="https://c.animaapp.com/mhbhid3dIptXU6/img/mark.svg"
      />
    </div>
  );
};
