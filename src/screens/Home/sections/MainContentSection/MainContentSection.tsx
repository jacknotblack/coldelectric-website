import React from "react";

export const MainContentSection = (): JSX.Element => {
  const metrics = [
    {
      value: "+3,000",
      label: "支持的微電網",
    },
    {
      value: "超過1.2M千瓦時",
      label: "通過冷電力虛擬電廠交易",
    },
    {
      value: "24/7",
      label: "在關鍵負載上與冷零度保持正常運行",
    },
    {
      value: "18%",
      label: "工業試點項目的成本降低",
    },
    {
      value: "ISO, CE",
      label: "通過電網整合和合規性認證",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-2.5 px-0 py-px relative w-full">
      <div className="flex flex-col items-center gap-16 px-0 py-24 relative w-full bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(38,59,55,1)_100%)]">
        <div className="items-start gap-8 z-[2] flex flex-col max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center gap-8 self-stretch w-full relative flex-[0_0_auto]">
            <div className="flex flex-col max-w-screen-md items-center gap-5 relative w-full flex-[0_0_auto]">
              <div className="flex flex-col items-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Manrope-SemiBold',Helvetica] font-semibold text-[#f5f6f6] text-4xl text-center tracking-[-0.72px] leading-[44px]">
                  成功指標
                </h2>
              </div>

              <p className="relative self-stretch font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] text-[#b7d8cd] text-[length:var(--text-xl-regular-font-size)] text-center tracking-[var(--text-xl-regular-letter-spacing)] leading-[var(--text-xl-regular-line-height)] [font-style:var(--text-xl-regular-font-style)]">
                以數據為依據，逐城市擴展清潔能源。
              </p>
            </div>
          </div>
        </div>

        <div className="items-center gap-16 z-[1] flex flex-col max-w-screen-xl px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="inline-flex items-start gap-16 ml-[-26.00px] mr-[-26.00px] relative flex-[0_0_auto]">
            {metrics.map((metric, index) => (
              <article
                key={index}
                className="inline-flex flex-col items-center gap-4 relative flex-[0_0_auto]"
              >
                <div
                  className={`inline-flex flex-col items-center justify-center gap-1.5 relative flex-[0_0_auto] ${
                    index === 1
                      ? "mr-[-78.00px]"
                      : index === 2
                        ? "mr-[-58.00px]"
                        : index === 3
                          ? "mr-[-40.00px]"
                          : ""
                  }`}
                >
                  <div className="relative w-fit mt-[-1.00px] font-display-xl-semibold font-[number:var(--display-xl-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-xl-semibold-font-size)] text-center tracking-[var(--display-xl-semibold-letter-spacing)] leading-[var(--display-xl-semibold-line-height)] whitespace-nowrap [font-style:var(--display-xl-semibold-font-style)]">
                    {metric.value}
                  </div>

                  <div className="inline-flex flex-col items-center gap-1 relative flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-sm-semibold-font-size)] text-center tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] [font-style:var(--text-sm-semibold-font-style)]">
                      {metric.label}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <img
          className="absolute top-0 left-0 w-full h-[448px] z-0 object-cover"
          alt="Background pattern"
          src="https://c.animaapp.com/U7V4C1eZ/img/background-pattern-10.png"
        />
      </div>
    </section>
  );
};
