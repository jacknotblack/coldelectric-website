import React from "react";

interface Feature {
  title: string;
  description: string;
}

export const ProductsWrapperSubsection = (): JSX.Element => {
  const features: Feature[] = [
    {
      title: "滿足電網規模需求的巨大容量",
      description: "商業和公用事業級能源儲存容量高達2,104 kWh。",
    },
    {
      title: "模組化集裝箱架構",
      description: "靈活的型號陣容支持量身定制的部署和輕鬆擴展。",
    },
    {
      title: "經過設計認證的防火安全",
      description:
        "長庚國際能源的產品在電池、模組和單元級別均通過UL9540A認證，確保防火安全。",
    },
  ];

  return (
    <section className="flex max-w-screen-xl items-start gap-6 px-8 py-0 relative w-full flex-[0_0_auto]">
      <article className="items-start gap-[32px_32px] bg-[linear-gradient(162deg,rgba(14,40,51,1)_0%,rgba(32,33,36,1)_100%)] flex flex-wrap justify-between relative flex-1 grow rounded-3xl">
        <div className="flex flex-col items-start gap-20 p-8 relative flex-1 grow">
          <header className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <div className="bg-[url(https://c.animaapp.com/mhaal9nisFLWnn/img/background-1.svg)] relative w-[68px] h-[68px] rounded-[28px] bg-[100%_100%]">
              <div className="flex flex-col w-9 h-9 items-center justify-center relative top-[calc(50.00%_-_18px)] left-[calc(50.00%_-_18px)] bg-[#7bd7e5] rounded-[99px]">
                <img
                  className="relative w-5 h-5"
                  alt="Building icon"
                  src="https://c.animaapp.com/mhaal9nisFLWnn/img/building-07.svg"
                />
              </div>
            </div>

            <div className="inline-flex items-start flex-col relative flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
                Cold OG
              </h2>

              <p className="text-[#cecfd2] text-[length:var(--text-lg-regular-font-size)] leading-[var(--text-lg-regular-line-height)] relative self-stretch font-text-lg-regular font-[number:var(--text-lg-regular-font-weight)] tracking-[var(--text-lg-regular-letter-spacing)] [font-style:var(--text-lg-regular-font-style)]">
                高容量工業級系統
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
                alt=""
                src="https://c.animaapp.com/mhaal9nisFLWnn/img/arrow-right.svg"
              />
            </a>
          </div>
        </div>

        <div className="relative w-[699px] h-[576px] rounded-[24px_24px_24px_0px] overflow-hidden bg-[linear-gradient(172deg,rgba(33,72,88,1)_0%,rgba(34,86,104,1)_65%,rgba(32,105,126,1)_84%,rgba(34,86,104,1)_100%)]">
          <img
            className="absolute top-0 left-0 w-[699px] h-[576px]"
            alt=""
            src="https://c.animaapp.com/mhaal9nisFLWnn/img/background-pattern-2.svg"
          />

          <div
            className="absolute top-[25px] left-[-27px] bg-[linear-gradient(176deg,rgba(177,232,240,1)_0%,rgba(34,86,104,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Manrope',Helvetica] font-semibold text-transparent text-[238px] text-center tracking-[-4.76px] leading-[90px] whitespace-nowrap"
            aria-hidden="true"
          >
            OG
          </div>

          <img
            className="absolute top-[106px] left-[66px] w-[596px] h-[419px] object-cover"
            alt="Cold OG industrial energy storage system"
            src="https://c.animaapp.com/mhaal9nisFLWnn/img/cold1-1.png"
          />
        </div>
      </article>
    </section>
  );
};
