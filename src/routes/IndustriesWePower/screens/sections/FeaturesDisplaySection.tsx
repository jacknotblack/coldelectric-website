import React from "react";

interface FeatureItem {
  title: string;
}

export const FeaturesDisplaySection = (): JSX.Element => {
  const solutionFeatures: FeatureItem[] = [
    { title: "Cold OG 與 OG2，提供工廠及製造備援" },
    { title: "減少尖峰需求費用與超約罰款" },
    { title: "即時能源使用追蹤與警報" },
    { title: "虛擬電廠整合，將多餘能源貨幣化" },
  ];

  const applicationScenarios: FeatureItem[] = [
    { title: "食品與飲料製造廠" },
    { title: "組裝線與製造區域" },
    { title: "採礦業與重工業" },
  ];

  const renderFeatureItem = (feature: FeatureItem, index: number) => (
    <div
      key={index}
      className="flex w-full min-w-80 max-w-[560px] items-start gap-4 relative flex-[0_0_auto]"
    >
      <div className="inline-flex flex-col items-start pt-0.5 pb-0 px-0 relative flex-[0_0_auto]">
        <img
          className="relative w-6 h-6"
          alt="Check circle"
          src="https://c.animaapp.com/mhbjm0sl3taf8Z/img/check-circle.svg"
        />
      </div>
      <div className="flex flex-col items-start gap-4 relative flex-1 grow">
        <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
            {feature.title}
          </div>
        </div>
      </div>
    </div>
  );

  const renderApplicationItem = (feature: FeatureItem, index: number) => (
    <div
      key={index}
      className="inline-flex min-w-80 max-w-[560px] items-start gap-4 relative flex-[0_0_auto]"
    >
      <div className="inline-flex flex-col items-start pt-0.5 pb-0 px-0 relative flex-[0_0_auto]">
        <img
          className="relative w-6 h-6"
          alt="Check circle"
          src="https://c.animaapp.com/mhbjm0sl3taf8Z/img/check-circle.svg"
        />
      </div>
      <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
        <div className="flex flex-col w-[520px] items-start gap-1 relative flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
            {feature.title}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="z-[2] flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-[#263b37]">
      <div className="flex-col items-center gap-16 pt-24 pb-0 px-0 bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(19,22,27,1)_100%)] flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex-col items-start gap-16 flex-[0_0_auto] flex max-w-screen-xl px-8 py-0 relative w-full">
          <div className="flex flex-col items-start gap-16 relative self-stretch w-full flex-[0_0_auto]">
            <div className="gap-16 flex-[0_0_auto] flex flex-col items-start relative self-stretch w-full">
              <header className="flex items-center gap-16 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col min-w-80 items-start gap-6 relative flex-1 grow">
                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <h2 className="relative self-stretch mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
                      工業與工廠
                    </h2>
                    <p className="relative self-stretch font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] text-[#cecfd2] text-[length:var(--text-xl-regular-font-size)] tracking-[var(--text-xl-regular-letter-spacing)] leading-[var(--text-xl-regular-line-height)] [font-style:var(--text-xl-regular-font-style)]">
                      在工業級應用中，實現可靠性與成本節省。
                    </p>
                  </div>
                </div>
              </header>

              <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-3 relative flex-1 grow">
                  <h3 className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#cecfd2] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                    長庚國際能源的解決方案
                  </h3>
                  {solutionFeatures.map((feature, index) =>
                    renderFeatureItem(feature, index),
                  )}
                </div>

                <div className="flex flex-col items-start gap-3 relative flex-1 grow">
                  <h3 className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#cecfd2] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                    應用情境
                  </h3>
                  {applicationScenarios.map((feature, index) =>
                    renderApplicationItem(feature, index),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-col items-center flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col items-start flex-[0_0_auto] flex max-w-screen-xl px-8 py-0 relative w-full">
            <img
              className="relative self-stretch w-full h-[728px] mt-[-8.00px] ml-[-8.00px] mr-[-8.00px]"
              alt="Industrial factory energy solutions visualization"
              src="https://c.animaapp.com/mhbjm0sl3taf8Z/img/content.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
