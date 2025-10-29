import React from "react";

interface ProductFeature {
  title: string;
  description: string;
}

export const ProductsSection = (): JSX.Element => {
  const productFeatures: ProductFeature[] = [
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
    <section className="flex-col items-center gap-16 px-0 py-24 self-stretch w-full flex-[0_0_auto] z-[2] rounded-[24px_24px_0px_0px] overflow-hidden bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(19,22,27,1)_100%)] flex relative">
      <div className="flex max-w-screen-xl items-start gap-6 px-8 py-0 relative w-full flex-[0_0_auto]">
        <article className="flex-wrap items-start justify-between gap-[32px_32px] flex-1 grow rounded-3xl bg-[linear-gradient(162deg,rgba(14,40,51,1)_0%,rgba(32,33,36,1)_100%)] flex relative">
          <div className="flex flex-col items-start gap-20 p-8 relative flex-1 grow">
            <header className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-[68px] h-[68px] rounded-[28px] bg-[url(https://c.animaapp.com/mhbhid3dIptXU6/img/background.svg)] bg-[100%_100%]">
                <div className="flex flex-col w-9 h-9 items-center justify-center relative top-[calc(50.00%_-_18px)] left-[calc(50.00%_-_18px)] bg-[#7bd7e5] rounded-[99px]">
                  <img
                    className="relative w-5 h-5"
                    alt="Building icon"
                    src="https://c.animaapp.com/mhbhid3dIptXU6/img/building-07.svg"
                  />
                </div>
              </div>

              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <h2 className="relative self-stretch mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
                  Cold OG
                </h2>

                <p className="relative self-stretch font-text-lg-regular font-[number:var(--text-lg-regular-font-weight)] text-[#cecfd2] text-[length:var(--text-lg-regular-font-size)] tracking-[var(--text-lg-regular-letter-spacing)] leading-[var(--text-lg-regular-line-height)] [font-style:var(--text-lg-regular-font-style)]">
                  旗艦級工業規格儲能系統
                </p>
              </div>
            </header>

            <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
              {productFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex-col items-start self-stretch flex min-w-60 gap-4 relative w-full flex-[0_0_auto]"
                >
                  <div className="w-full flex-[0_0_auto] flex flex-col items-start gap-1 relative self-stretch">
                    <h3 className="relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
                      {feature.title}
                    </h3>

                    <p className="relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#cecfd2] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}

              <a
                href="#"
                className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto] cursor-pointer hover:opacity-80 transition-opacity"
                aria-label="了解更多關於 Cold OG 的資訊"
              >
                <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#cecfd2] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                  了解更多
                </span>

                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="https://c.animaapp.com/mhbhid3dIptXU6/img/arrow-right.svg"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          <div className="relative w-[699px] h-[576px] rounded-[24px_24px_24px_0px] overflow-hidden bg-[linear-gradient(172deg,rgba(33,72,88,1)_0%,rgba(34,86,104,1)_65%,rgba(32,105,126,1)_84%,rgba(34,86,104,1)_100%)]">
            <img
              className="absolute top-0 left-0 w-[699px] h-[576px]"
              alt=""
              src="https://c.animaapp.com/mhbhid3dIptXU6/img/background-pattern.svg"
              aria-hidden="true"
            />

            <div
              className="absolute top-[25px] left-[-27px] bg-[linear-gradient(176deg,rgba(177,232,240,1)_0%,rgba(34,86,104,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Manrope',Helvetica] font-semibold text-transparent text-[238px] text-center tracking-[-4.76px] leading-[90px] whitespace-nowrap"
              aria-hidden="true"
            >
              OG
            </div>

            <img
              className="absolute top-[106px] left-[66px] w-[596px] h-[419px] object-cover"
              alt="Cold OG 儲能系統產品圖片"
              src="https://c.animaapp.com/mhbhid3dIptXU6/img/cold1-1.png"
            />
          </div>
        </article>
      </div>
    </section>
  );
};
