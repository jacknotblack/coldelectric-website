import React from "react";

interface Feature {
  title: string;
  description: string;
}

export const ProductsSubsection = (): JSX.Element => {
  const features: Feature[] = [
    {
      title: "內建安全性與LFP技術",
      description:
        "不易燃的LFP技術。採用專有的防火鋰鐵磷酸鹽（LFP）電池，提供無與倫比的安全性。",
    },
    {
      title: "模組化設計，靈活容量",
      description:
        "可選擇H25或H40型號，容量高達41.5 kWh，提供裝飾性和工業性兩種外觀。",
    },
    {
      title: "無縫混合整合",
      description:
        "通過內建的混合逆變器支持，與太陽能、電網和發電機輸入完全兼容。",
    },
  ];

  return (
    <section className="flex max-w-screen-xl items-start gap-6 px-8 py-0 relative w-full flex-[0_0_auto]">
      <article className="items-center gap-[64px_64px] overflow-hidden bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(38,59,55,1)_100%)] flex flex-wrap justify-between relative flex-1 grow rounded-3xl">
        <div className="flex flex-col items-start gap-20 p-8 relative flex-1 grow z-[1]">
          <header className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <div
              className="relative w-[68px] h-[68px] rounded-[28px] bg-[url(https://c.animaapp.com/mhaal9nisFLWnn/img/background-2.svg)] bg-[100%_100%]"
              role="img"
              aria-label="Product icon background"
            >
              <div className="bg-[#85b378] flex flex-col w-9 h-9 items-center justify-center relative top-[calc(50.00%_-_18px)] left-[calc(50.00%_-_18px)] rounded-[99px]">
                <img
                  className="relative w-5 h-5"
                  alt="Home icon"
                  src="https://c.animaapp.com/mhaal9nisFLWnn/img/home-smile.svg"
                />
              </div>
            </div>

            <div className="flex flex-col items-start relative flex-1 grow">
              <h2 className="relative self-stretch mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
                Cold SUB
              </h2>

              <p className="text-[#b7d8cd] text-[length:var(--text-lg-regular-font-size)] leading-[var(--text-lg-regular-line-height)] relative self-stretch font-text-lg-regular font-[number:var(--text-lg-regular-font-weight)] tracking-[var(--text-lg-regular-letter-spacing)] [font-style:var(--text-lg-regular-font-style)]">
                家庭和小型企業的智能電池解決方案
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

                  <p className="relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#b7d8cd] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}

            <a
              href="#"
              className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]"
              aria-label="了解更多關於 Cold SUB"
            >
              <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#cecfd2] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                了解更多
              </span>

              <img
                className="relative w-5 h-5"
                alt=""
                src="https://c.animaapp.com/mhaal9nisFLWnn/img/arrow-right.svg"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <div className="relative w-[699px] h-[628px] z-0 rounded-[24px_24px_24px_0px] overflow-hidden bg-[linear-gradient(172deg,rgba(42,69,64,1)_0%,rgba(48,85,78,1)_65%,rgba(57,104,95,1)_84%,rgba(48,85,78,1)_100%)]">
          <img
            className="absolute top-0 left-0 w-[699px] h-[628px]"
            alt=""
            src="https://c.animaapp.com/mhaal9nisFLWnn/img/background-pattern-3.svg"
            aria-hidden="true"
          />

          <div
            className="absolute top-[11px] -left-5 bg-[linear-gradient(178deg,rgba(254,223,137,1)_0%,rgba(38,59,55,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Manrope',Helvetica] font-semibold text-transparent text-[196px] text-center tracking-[-3.92px] leading-[90px] whitespace-nowrap"
            aria-hidden="true"
          >
            SUB
          </div>

          <img
            className="absolute top-[97px] left-[69px] w-[545px] h-[531px]"
            alt="Cold SUB 產品圖片"
            src="https://c.animaapp.com/mhaal9nisFLWnn/img/product.png"
          />
        </div>
      </article>
    </section>
  );
};
