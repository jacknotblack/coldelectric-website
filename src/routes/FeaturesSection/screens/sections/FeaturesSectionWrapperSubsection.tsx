import React from "react";

interface Feature {
  title: string;
  description: string;
}

export const FeaturesSectionWrapperSubsection = (): JSX.Element => {
  const features: Feature[] = [
    {
      title: "商業級EMS整合",
      description: "無縫連接長庚國際能源的EMS，實現實時能源控制和電網參與。",
    },
    {
      title: "靈活型號，具高功率輸出",
      description:
        "可選擇S90或S100型號，峰值功率高達60 kW，並具備IP65等級保護，適用於苛刻環境。",
    },
    {
      title: "持久且高效的性能",
      description: "提供超過6,000次充電循環，回程效率超過94%。",
    },
  ];

  return (
    <section className="flex max-w-screen-xl items-start gap-6 px-8 py-0 relative w-full flex-[0_0_auto]">
      <article className="items-center gap-[32px_32px] overflow-hidden bg-[linear-gradient(153deg,rgba(65,70,81,1)_0%,rgba(32,33,36,1)_100%)] flex flex-wrap justify-between relative flex-1 grow rounded-3xl">
        <div className="flex flex-col items-start gap-20 p-8 relative flex-1 grow">
          <header className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="bg-[url(https://c.animaapp.com/mhaal9nisFLWnn/img/background-3.svg)] relative w-[68px] h-[68px] rounded-[28px] bg-[100%_100%]">
              <div className="bg-[#656b75] flex flex-col w-9 h-9 items-center justify-center relative top-[calc(50.00%_-_18px)] left-[calc(50.00%_-_18px)] rounded-[99px]">
                <img
                  className="relative w-5 h-5"
                  alt="Building icon"
                  src="https://c.animaapp.com/mhaal9nisFLWnn/img/building-02.svg"
                />
              </div>
            </div>

            <div className="flex flex-col items-start relative flex-1 grow">
              <h2 className="relative self-stretch mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
                Cold ZERO
              </h2>

              <p className="text-[#cecfd2] text-[length:var(--text-lg-regular-font-size)] leading-[var(--text-lg-regular-line-height)] relative self-stretch font-text-lg-regular font-[number:var(--text-lg-regular-font-weight)] tracking-[var(--text-lg-regular-letter-spacing)] [font-style:var(--text-lg-regular-font-style)]">
                商業級能源模組
              </p>
            </div>
          </header>

          <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col min-w-60 items-start gap-4 relative self-stretch w-full flex-[0_0_auto]"
              >
                <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
                    {feature.title}
                  </h3>

                  <p className="text-[#cecfd2] text-[length:var(--text-md-regular-font-size)] leading-[var(--text-md-regular-line-height)] relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] tracking-[var(--text-md-regular-letter-spacing)] [font-style:var(--text-md-regular-font-style)]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            <a
              href="#"
              className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]"
            >
              <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#cecfd2] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                了解更多
              </span>

              <img
                className="relative w-5 h-5"
                alt="Arrow right"
                src="https://c.animaapp.com/mhaal9nisFLWnn/img/arrow-right.svg"
              />
            </a>
          </div>
        </div>

        <div className="relative w-[699px] h-[576px] rounded-[24px_24px_24px_0px] overflow-hidden bg-[linear-gradient(165deg,rgba(87,91,99,1)_0%,rgba(65,70,81,1)_66%,rgba(87,91,99,1)_100%)]">
          <img
            className="absolute top-0 left-0 w-[699px] h-[576px]"
            alt=""
            src="https://c.animaapp.com/mhaal9nisFLWnn/img/background-pattern.svg"
          />

          <div className="absolute top-[22px] left-[-19px] bg-[linear-gradient(179deg,rgba(220,223,234,1)_0%,rgba(65,70,81,1)_98%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Manrope',Helvetica] font-semibold text-transparent text-[206px] text-center tracking-[-4.12px] leading-[90px] whitespace-nowrap">
            ZERO
          </div>

          <img
            className="absolute top-[101px] left-[41px] w-[636px] h-[475px]"
            alt="Cold ZERO energy module"
            src="https://c.animaapp.com/mhaal9nisFLWnn/img/zero.png"
          />
        </div>
      </article>
    </section>
  );
};
