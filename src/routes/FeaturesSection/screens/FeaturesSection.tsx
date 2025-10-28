import React from "react";
import { ContainerSubsection } from "./sections/ContainerSubsection";
import { DivWrapperSubsection } from "./sections/DivWrapperSubsection";
import { FeaturesSectionWrapperSubsection } from "./sections/FeaturesSectionWrapperSubsection";
import { ProductsSubsection } from "./sections/ProductsSubsection";
import { ProductsWrapperSubsection } from "./sections/ProductsWrapperSubsection";

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-16 pt-24 pb-40 px-0 relative bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(19,22,27,1)_100%)]">
      <ContainerSubsection />
      <ProductsSubsection />
      <FeaturesSectionWrapperSubsection />
      <ProductsWrapperSubsection />
      <DivWrapperSubsection />
    </section>
  );
};
