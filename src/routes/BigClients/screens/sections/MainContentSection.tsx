import React from "react";

export const MainContentSection = (): JSX.Element => {
  const tableColumns = [
    {
      header: "方案",
      rows: ["建置再生能源設備", "購買綠電憑證", "建置儲能設備", "繳納代金"],
    },
    {
      header: "核心義務",
      rows: [
        "裝置容量×10%",
        "年購買額度",
        "裝置容量 x2 小時",
        "裝置容量 x2,500度/瓩×4元/度",
      ],
    },
    {
      header: "簡要說明",
      rows: [
        "自發自用, 長期節省電費, 利用閒置屋頂/土地。",
        "最快速、最簡便的合規方式, 支援線電發展。",
        "優化用電, 賺取尖離峰價差, 防止瞬時停電損失。",
        "最終選項。快速合规, 但無任何實質效益。",
      ],
    },
    {
      header: "適用對象/情境",
      rows: [
        "希望長期投資、減少電費, 並有閒置空間者。",
        "求立即合規、無空間限制, 或有CSR需求者。",
        "希望優化能源調度、創這額外收益, 或用電穩定性要求高者。",
        "不推薦。僅適用於皙時無法執行任何方案的情況。",
      ],
    },
  ];

  const solutions = [
    {
      number: "1",
      title: "建置再生能源設備",
      advantages: [
        "核心優勢：長期節省電費, 創造綠色資產。",
        "義務內容：需建置契約容量 ×10%的再生能源裝置。常見的選擇包括太陽光電或 風力發電。",
      ],
      benefits: [
        {
          icon: "https://c.animaapp.com/mhbhid3dIptXU6/img/lightbulb-02.svg",
          title: "電費優化",
          description: "可將發出的綠電自發自用, 長期降低整體用電成本。",
        },
        {
          icon: "https://c.animaapp.com/mhbhid3dIptXU6/img/building-04.svg",
          title: "資產活化",
          description: "有效利用閒置屋頂或土地。",
        },
        {
          icon: "https://c.animaapp.com/mhbhid3dIptXU6/img/mingcute-leaf-line.svg",
          title: "企莱形象",
          description: "展現企業的綠色承諾, 提升品牌價值。",
        },
      ],
      consideration:
        "義務內容：需建置契約容量 ×10%的再生能源裝置。常見的選擇包括太陽光電或 風力發電。",
    },
    {
      number: "2",
      title: "購買綠電憑證",
      advantages: [
        "核心優勢：快速合規, 彈性最高。",
        "義務內容：每年崙購買與義務容量相對應的綠電憑證或等量綠電。",
      ],
      benefits: [
        {
          icon: "https://c.animaapp.com/mhbhid3dIptXU6/img/lightning-02.svg",
          title: "立即合規",
          description: "最快達到法規要求的方式, 不受限於空間或地理位置。",
        },
        {
          icon: "https://c.animaapp.com/mhbhid3dIptXU6/img/globe-04.svg",
          title: "支援綠電",
          description: "直接支持再生能源發展, 減少對傳統能源的依賴。",
        },
        {
          icon: "https://c.animaapp.com/mhbhid3dIptXU6/img/cloud-01.svg",
          title: "排除風險",
          description: "不需擔心建置設備的技術或天氣風險。",
        },
      ],
      consideration: "考量因素：成本為純支出, 不會有長期節省電費的效益。",
    },
    {
      number: "3",
      title: "建置儲能設備",
      advantages: [
        "核心優勢：電力調度優化, 創造套利機會。",
        "義務內容：需建置足以供應義務容量 ×最低供電時間 2小時的儲能裝置。",
      ],
      benefits: [
        {
          icon: "https://c.animaapp.com/mhbhid3dIptXU6/img/lightning-02.svg",
          title: "電力套利",
          description:
            "在離峰時段儲電, 在尖峰時段使用, 賺取顯著的尖離峰電價差。",
        },
        {
          icon: "https://c.animaapp.com/mhbhid3dIptXU6/img/dataflow-03.svg",
          title: "穩定供電",
          description: "應對瞬間停電 (跳電) 風險, 保障關鍵設備的運作。",
        },
        {
          icon: "https://c.animaapp.com/mhbhid3dIptXU6/img/mingcute-leaf-line.svg",
          title: "未來趨勢",
          description: "符合未來電網調度的趨勢, 提升電力使用效率。",
        },
      ],
      consideration: "考量因素：初次建置成本較高, 需考量設備的佔地空間。",
    },
    {
      number: "4",
      title: "繳納代金",
      advantages: [
        "核心優勢：不推薦：無實質效益的合規選項。",
        "義務內容：按規定的費率繳納代金。",
        "效益分析：唯一優點是可以快速免除義務, 但無任何綠色、節能或經濟效益。",
        "考量因素：視為虽終、非長期選項。您支付的費用不會轉換為任何可持續的資產 或效益。",
      ],
      benefits: [],
      consideration: null,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-10 px-0 py-16 self-stretch w-full z-[5] bg-[#12211f] rounded-3xl border-t-[3px] [border-top-style:solid] border-b-[3px] [border-bottom-style:solid] border-[#2a4540] relative flex-[0_0_auto]">
      <div className="flex flex-col max-w-screen-xl items-start px-8 py-0 relative w-full flex-[0_0_auto]">
        <h2 className="relative self-stretch mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] text-center tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
          用電大戶義務方案：四種選擇, 為您創造綠色價值
        </h2>
      </div>

      <div className="flex flex-col max-w-screen-xl items-start px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col max-w-screen-xl items-center gap-20 px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] rounded-xl overflow-hidden border border-solid border-[#263b37] shadow-shadows-shadow-xs">
            <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
              {tableColumns.map((column, colIndex) => (
                <div
                  key={colIndex}
                  className={`${colIndex === 0 ? "w-[266px]" : "flex-1 grow"} flex flex-col items-start relative`}
                >
                  <div className="z-[4] flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full bg-[#263b37] border-b [border-bottom-style:solid]">
                    <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                        {column.header}
                      </div>
                    </div>
                  </div>

                  {column.rows.map((row, rowIndex) => (
                    <div
                      key={rowIndex}
                      className={`z-[${3 - rowIndex}] flex h-[72px] items-center px-6 py-4 relative self-stretch w-full border-b [border-bottom-style:solid] border-[#2a4540]`}
                    >
                      <div
                        className={`relative ${colIndex === 0 || colIndex === 1 ? "w-fit" : "flex-1"} ${colIndex === 1 && rowIndex === 0 ? "[font-family:'manrope-Regular',Helvetica] font-normal" : "font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)]"} text-[#dbece6] text-${colIndex === 1 && rowIndex === 0 ? "sm" : "[length:var(--text-sm-regular-font-size)]"} tracking-${colIndex === 1 && rowIndex === 0 ? "[0]" : "[var(--text-sm-regular-letter-spacing)]"} leading-${colIndex === 1 && rowIndex === 0 ? "5" : "[var(--text-sm-regular-line-height)]"} ${colIndex === 0 || colIndex === 1 ? "whitespace-nowrap" : ""} ${colIndex === 1 && rowIndex === 0 ? "" : "[font-style:var(--text-sm-regular-font-style)]"} ${colIndex > 1 ? "mt-[-1.00px]" : ""}`}
                      >
                        {row}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-center gap-16 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex gap-1.5 self-stretch w-full flex-[0_0_auto] items-start relative">
              <h3 className="relative w-fit mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] whitespace-nowrap [font-style:var(--display-md-semibold-font-style)]">
                方案細節與效益分析
              </h3>
            </div>

            {solutions.map((solution, solutionIndex) => (
              <React.Fragment key={solutionIndex}>
                <div className="flex items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-8 relative flex-1 grow">
                    <div className="items-center justify-center gap-2.5 self-stretch flex-[0_0_auto] flex w-full relative">
                      <div className="inline-flex flex-col items-center justify-center gap-2.5 px-[11px] py-0 relative flex-[0_0_auto]">
                        <div className="relative self-stretch mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#75dfa6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
                          {solution.number}
                        </div>
                      </div>

                      <div className="relative flex-1 font-display-sm-semibold font-[number:var(--display-sm-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-sm-semibold-font-size)] tracking-[var(--display-sm-semibold-letter-spacing)] leading-[var(--display-sm-semibold-line-height)] [font-style:var(--display-sm-semibold-font-style)]">
                        {solution.title}
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                      {solution.advantages.map((advantage, advIndex) => (
                        <div
                          key={advIndex}
                          className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]"
                        >
                          <img
                            className="relative w-6 h-6"
                            alt="Chevron right"
                            src="https://c.animaapp.com/mhbhid3dIptXU6/img/chevron-right.svg"
                          />

                          <div className="relative flex-1 mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#b7d8cd] text-xl tracking-[0] leading-[30px]">
                            {advantage}
                          </div>
                        </div>
                      ))}
                    </div>

                    {solution.benefits.length > 0 && (
                      <div className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start gap-3 relative">
                        <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                          <img
                            className="relative w-6 h-6"
                            alt="Chevron right"
                            src="https://c.animaapp.com/mhbhid3dIptXU6/img/chevron-right.svg"
                          />

                          <div className="relative flex-1 mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#b7d8cd] text-xl tracking-[0] leading-[30px]">
                            效益分析：
                          </div>
                        </div>

                        <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                          {solution.benefits.map((benefit, benefitIndex) => (
                            <div
                              key={benefitIndex}
                              className="flex flex-col gap-1.5 flex-1 grow items-start relative"
                            >
                              <div className="relative w-12 h-12 bg-[#2a4540] rounded-full overflow-hidden">
                                <img
                                  className="absolute top-3 left-3 w-6 h-6"
                                  alt={benefit.title}
                                  src={benefit.icon}
                                />
                              </div>

                              <div className="relative self-stretch font-text-xl-semibold font-[number:var(--text-xl-semibold-font-weight)] text-[#b7d8cd] text-[length:var(--text-xl-semibold-font-size)] tracking-[var(--text-xl-semibold-letter-spacing)] leading-[var(--text-xl-semibold-line-height)] [font-style:var(--text-xl-semibold-font-style)]">
                                {benefit.title}
                              </div>

                              <div className="relative self-stretch font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] [font-style:var(--text-sm-regular-font-style)]">
                                {benefit.description}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {solution.consideration && (
                      <div className="flex items-center justify-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                        <img
                          className="relative w-6 h-6"
                          alt="Chevron right"
                          src="https://c.animaapp.com/mhbhid3dIptXU6/img/chevron-right.svg"
                        />

                        <div className="relative flex-1 mt-[-1.00px] [font-family:'Manrope',Helvetica] font-semibold text-[#b7d8cd] text-xl tracking-[0] leading-[30px]">
                          {solution.consideration}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {solutionIndex < solutions.length - 1 && (
                  <div className="flex items-start justify-center self-stretch w-full relative flex-[0_0_auto]">
                    <img
                      className="relative flex-1 grow"
                      alt="Container"
                      src="https://c.animaapp.com/mhbhid3dIptXU6/img/container.svg"
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
