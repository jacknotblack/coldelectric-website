import React from "react";

interface FeatureItem {
  text: string;
}

interface FeatureColumn {
  title: string;
  items: FeatureItem[];
}

export const FeaturesOverviewSection = (): JSX.Element => {
  const benefitsData: FeatureItem[] = [
    { text: "Cold SUB 和 Cold ZERO 的智慧儲能" },
    { text: "更有效地利用太陽能" },
    { text: "參與當地微電網以共享彈性" },
    { text: "通過無縫備份避免停電" },
  ];

  const solutionsData: FeatureItem[] = [
    { text: "家庭能源管理系統儀表板" },
    { text: "行動警報、電池健康洞察" },
    { text: "安全、靜音的室內/室外運行" },
  ];

  const featureColumns: FeatureColumn[] = [
    {
      title: "現代生活的智慧能源。",
      items: benefitsData,
    },
    {
      title: "解決方案",
      items: solutionsData,
    },
  ];

  return (
    <section className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] z-[4] bg-[#263b37]">
      <div className="flex-col items-center gap-16 px-0 py-24 bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(19,22,27,1)_100%)] flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex gap-5 w-full flex-col max-w-screen-md items-center relative flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="font-text-md-semibold text-[#47cd89] text-center relative self-stretch mt-[-1.00px] font-[number:var(--text-md-semibold-font-weight)] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                  一個平台，無限應用
                </h2>

                <p className="self-stretch [font-family:'Manrope',Helvetica] text-[#dbece6] text-center relative font-normal text-xl tracking-[0] leading-[30px]">
                  無論您是在鄉村住宅、高樓大廈或工業設施供電，長庚國際能源
                  都能協助您部署微電網和儲能解決方案，降低成本、增強彈性並實現能源交易。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-col items-start gap-16 flex-[0_0_auto] flex max-w-screen-xl px-8 py-0 relative w-full">
          <div className="flex flex-col items-start gap-16 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-10 self-stretch w-full relative flex-[0_0_auto]">
              <div className="flex items-center gap-16 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col min-w-80 items-start gap-6 relative flex-1 grow">
                  <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <h3 className="relative self-stretch mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
                      住宅與公寓
                    </h3>

                    <p className="self-stretch [font-family:'Manrope',Helvetica] text-[#b7d8cd] relative font-normal text-xl tracking-[0] leading-[30px]">
                      現代生活的智慧能源。
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                {featureColumns.map((column, columnIndex) => (
                  <div
                    key={columnIndex}
                    className="flex flex-col items-start gap-3 relative flex-1 grow"
                  >
                    <h4
                      className={`relative self-stretch mt-[-1.00px] ${columnIndex === 0 ? "[font-family:'Manrope',Helvetica] font-semibold text-base" : "font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]"} text-[#cecfd2] tracking-[0] leading-6`}
                    >
                      {column.title}
                    </h4>

                    {column.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`flex ${columnIndex === 0 ? "w-full" : ""} min-w-80 max-w-[560px] items-start gap-4 relative flex-[0_0_auto]`}
                      >
                        <div className="inline-flex flex-col items-start pt-0.5 pb-0 px-0 relative flex-[0_0_auto]">
                          <img
                            className="relative w-6 h-6"
                            alt="Check circle"
                            src="https://c.animaapp.com/mhbjm0sl3taf8Z/img/check-circle.svg"
                          />
                        </div>

                        <div
                          className={`${columnIndex === 0 ? "flex flex-col items-start gap-4 relative flex-1 grow" : "inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]"}`}
                        >
                          <div
                            className={`flex flex-col ${columnIndex === 0 ? "items-start gap-1 relative self-stretch w-full flex-[0_0_auto]" : "w-[520px] items-start gap-1 relative flex-[0_0_auto]"}`}
                          >
                            <p className="relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-col items-center flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col items-start flex-[0_0_auto] flex max-w-screen-xl px-8 py-0 relative w-full">
            <div className="relative self-stretch w-full h-[660px]">
              <div className="relative -top-2 left-[calc(50.00%_-_616px)] w-[1232px] h-[826px] flex items-center rounded-3xl border-8 border-solid border-[#263b37]">
                <div className="-mt-4 h-[810px] mr-4 flex-1 rounded-3xl [background:url(https://c.animaapp.com/mhbjm0sl3taf8Z/img/screen-mockup--replace-fill-.png)_50%_50%_/_cover]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
