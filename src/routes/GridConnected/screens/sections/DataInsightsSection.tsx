import React from "react";

interface ServiceDetail {
  title: string;
  description: string;
}

interface ChartPoint {
  label: string;
  height: number;
}

interface AdvantageCard {
  icon: string;
  title: string;
  description: string;
}

interface TableRow {
  feature: string;
  c2100a: string;
  c2100b: string;
  c1400a: string;
}

interface ProductFeature {
  title: string;
  description: string;
}

export const DataInsightsSection = (): JSX.Element => {
  const serviceDetails: ServiceDetail[] = [
    {
      title: "控制信號",
      description:
        "接收 EMS 控制信號並偵測系統頻率。\n系統可達毫秒級主動響應，不受調度指令延遲限制。",
    },
    {
      title: "反應時間",
      description:
        "於數秒內完成反應（分鐘級圖示顯示）。\n系統提供毫秒級主動響應，不受指令延遲影響。",
    },
    {
      title: "品質執行",
      description:
        "於數秒內完成反應（分鐘級圖示顯示）。\n系統提供毫秒級主動響應，不受指令延遲影響。",
    },
    {
      title: "持續時間",
      description:
        "dReg25 (0.25C)：4 小時；dReg50 (0.5C)：2 小時（此為系統持續放電時間，超出市場標準）。\n我們的系統設計提供充足的持續運行能力。",
    },
  ];

  const chartPoints: ChartPoint[] = [
    { label: "AF", height: 222 },
    { label: "BF", height: 175 },
    { label: "DF", height: 147 },
    { label: "FF", height: 122 },
    { label: "GF", height: 92 },
    { label: "HF", height: 35 },
  ];

  const advantageCards: AdvantageCard[] = [
    {
      icon: "https://c.animaapp.com/mhbgaqp12GzVxu/img/shield-01.svg",
      title: "獨家低溫技術, 安全高效",
      description:
        "採用長庚自行研發的COLD 磷酸鋰鐵軟包電芯, 搭配特殊配方與結構設計, 使電芯工 作溫度明顯低於市場競品, 確保長期穩定的高效能輸出。",
    },
    {
      icon: "https://c.animaapp.com/mhbgaqp12GzVxu/img/settings-02.svg",
      title: "全方位安全防護",
      description:
        "於數秒內完成反應（分鐘級圖示顯示）。\n系統提供毫秒級主動響應，不受指令延遲影響。",
    },
    {
      icon: "https://c.animaapp.com/mhbgaqp12GzVxu/img/tool-01.svg",
      title: "耐候設計, 維護便捷",
      description:
        "外殼採用SMC材質, 具備耐酸鹼、耐高溫、高隔熱性。非步入式設計搭配模組化設計, 讓電芯、模組的檢修和更換更為快速, 大幅降低維護時間與運營成本 (0&M) 。",
    },
    {
      icon: "https://c.animaapp.com/mhbgaqp12GzVxu/img/lightning-01.svg",
      title: "彈性應變",
      description:
        "模組化設計不僅利於維護, 更確保系統能靈活、有彈性地應對各種輔助服務 (如 dReg、備轉) 的需求, 最大化您的投資回報。",
    },
  ];

  const tableData: TableRow[] = [
    {
      feature: "額定容量",
      c2100a: "2,104 kWh",
      c2100b: "2,104 kWh",
      c1400a: "1,400 kWh",
    },
    {
      feature: "可用容量",
      c2100a: "1,800 kWh",
      c2100b: "1,750 kWh",
      c1400a: "1,200 kWh",
    },
    {
      feature: "峰值輸出功率",
      c2100a: "500 kW",
      c2100b: "1,000 kW",
      c1400a: "500 kW",
    },
    {
      feature: "電池電壓範圍",
      c2100a: "600–876 V DC",
      c2100b: "600–876 V DC",
      c1400a: "600–876 V DC",
    },
    {
      feature: "交流輸出電壓",
      c2100a: "380V AC",
      c2100b: "380V AC",
      c1400a: ">95%",
    },
    {
      feature: "頻率",
      c2100a: "50–60 Hz",
      c2100b: "50–60 Hz",
      c1400a: "50–60 Hz",
    },
    {
      feature: "循環壽命",
      c2100a: "≥ 6,000 次循環",
      c2100b: "≥ 6,000 次循環",
      c1400a: "≥ 6,000 次循環",
    },
    {
      feature: "往返效率",
      c2100a: "> 94 % (DC→DC)",
      c2100b: "> 94 % (DC→DC)",
      c1400a: "> 94 % (DC→DC)",
    },
    {
      feature: "防護等級",
      c2100a: "IP65 (電池) / IP55 (接線)",
      c2100b: "IP65 (電池) / IP55 (接線)",
      c1400a: "IP65 (電池) / IP55 (接線)",
    },
    {
      feature: "認證",
      c2100a:
        "UL 9540A, UL 2580, UL 1973, IEC 62619, CNS 62619, UN 38.3, IEC 60730-1",
      c2100b: "",
      c1400a: "",
    },
    {
      feature: "尺寸 (寬 × 深 × 高)",
      c2100a: "W 269.7 × D 95.7 × H 115.4 英寸",
      c2100b: "W 269.7 × D 95.7 × H 115.4 英寸",
      c1400a: "W 238.2 × D 95.7 × H 115.4 英寸",
    },
    {
      feature: "重量",
      c2100a: "60,000 磅",
      c2100b: "60,000 磅",
      c1400a: "50,000 磅",
    },
    {
      feature: "製造地",
      c2100a: "台灣",
      c2100b: "台灣",
      c1400a: "台灣",
    },
  ];

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
    <div className="z-[1] flex flex-col items-start gap-[3px] relative self-stretch w-full flex-[0_0_auto]">
      <div className="flex-col self-stretch w-full flex-[0_0_auto] bg-[#12211f] rounded-[0px_0px_24px_24px] overflow-hidden flex items-start relative">
        <div className="flex-col items-center gap-16 px-0 py-24 self-stretch w-full flex relative flex-[0_0_auto]">
          <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 py-0 relative w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col max-w-screen-lg items-center gap-5 relative w-full flex-[0_0_auto]">
                <div className="gap-3 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
                  <h2 className="relative self-stretch mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] text-center tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
                    我們的儲能系統如何滿足三大輔助服務標準
                  </h2>
                </div>

                <p className="w-[659.22px] text-[#cecfd2] text-[length:var(--text-xl-regular-font-size)] text-center leading-[var(--text-xl-regular-line-height)] relative font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] tracking-[var(--text-xl-regular-letter-spacing)] [font-style:var(--text-xl-regular-font-style)]">
                  我們的儲能解決方案專為滿足台灣電力交易平台最嚴苛的技術標準而設計,
                  確 保您的系統能高效參與並通過市場驗證。
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 py-0 relative w-full flex-[0_0_auto]">
            <div className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-3 relative flex-1 grow">
                <h3 className="relative self-stretch mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
                  動態調頻備轉容量
                </h3>

                <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-semibold text-[#b7d8cd] text-xl tracking-[0] leading-[30px]">
                  這是對響應速度要求最高的服務, 是儲能系統發揮技術優勢的關鍵。
                </p>
              </div>

              <img
                className="relative w-11 h-11"
                alt="Chevron up"
                src="https://c.animaapp.com/mhbgaqp12GzVxu/img/chevron-up.svg"
              />
            </div>

            <div className="flex items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start justify-center gap-5 relative flex-1 grow">
                {serviceDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="gap-1.5 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative"
                  >
                    <h4 className="relative self-stretch mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] [font-style:var(--text-sm-semibold-font-style)]">
                      {detail.title}
                    </h4>

                    <p className="relative self-stretch font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] [font-style:var(--text-sm-regular-font-style)]">
                      {detail.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex w-[532.5px] items-end gap-4 relative">
                <img
                  className="absolute top-[47px] left-[3px] w-[466px] h-[214px] z-[2]"
                  alt="Vector"
                  src="https://c.animaapp.com/mhbgaqp12GzVxu/img/vector-11.svg"
                />

                <img
                  className="absolute top-[97px] left-[87px] w-[298px] h-[109px] z-[1]"
                  alt="Vector"
                  src="https://c.animaapp.com/mhbgaqp12GzVxu/img/vector-12.svg"
                />

                <div className="flex items-end justify-between relative flex-1 grow z-0">
                  {chartPoints.map((point, index) => (
                    <div
                      key={index}
                      className="inline-flex flex-col h-[302px] items-center justify-end gap-4 relative flex-[0_0_auto]"
                    >
                      <img
                        className="relative w-px object-cover"
                        style={{ height: `${point.height}px` }}
                        alt="Line"
                        src={`https://c.animaapp.com/mhbgaqp12GzVxu/img/line-3${
                          index === 0
                            ? "-2"
                            : index === 1
                              ? "-5"
                              : index === 2
                                ? "-1"
                                : index === 3
                                  ? ""
                                  : index === 4
                                    ? "-4"
                                    : "-3"
                        }.svg`}
                      />

                      <p className="relative w-[27px] h-[15px] [font-family:'Manrope',Helvetica] font-medium text-gray-500 text-[10px] text-center tracking-[0] leading-[13px] whitespace-nowrap">
                        <span className="[font-family:'Manrope',Helvetica] font-medium text-gray-500 text-[10px] tracking-[0] leading-[13px]">
                          {point.label[0]}
                        </span>

                        <span className="text-[13px] leading-[16.9px]">
                          {point.label[1]}
                        </span>
                      </p>
                    </div>
                  ))}

                  <div className="inline-flex flex-col h-[239px] items-center justify-end gap-4 relative flex-[0_0_auto] opacity-0">
                    <img
                      className="relative w-52 h-px mt-[-16664.68px] ml-[-11640.14px] object-cover"
                      alt="Line"
                    />

                    <div className="w-[27px] h-[15px] whitespace-nowrap relative [font-family:'Manrope',Helvetica] font-medium text-gray-500 text-[10px] text-center tracking-[0] leading-[13px]">
                      Fp
                    </div>
                  </div>

                  <div className="inline-flex flex-col h-[297px] items-center justify-center gap-[26px] relative flex-[0_0_auto]">
                    <div className="flex flex-col items-start justify-end gap-[35px] relative self-stretch w-full flex-[0_0_auto]">
                      <p className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-gray-500 text-[10px] text-center tracking-[0] leading-[13px]">
                        <span className="[font-family:'Manrope',Helvetica] font-medium text-gray-500 text-[10px] tracking-[0] leading-[13px]">
                          A
                        </span>

                        <span className="text-[13px] leading-[16.9px]">P</span>
                      </p>

                      <div className="flex flex-col items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
                        <p className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-gray-500 text-[10px] text-center tracking-[0] leading-[13px]">
                          <span className="[font-family:'Manrope',Helvetica] font-medium text-gray-500 text-[10px] tracking-[0] leading-[13px]">
                            B
                          </span>

                          <span className="text-[13px] leading-[16.9px]">
                            P
                          </span>
                        </p>

                        <div className="flex items-center justify-around gap-2 relative self-stretch w-full flex-[0_0_auto]">
                          <p className="relative w-fit mt-[-1.00px] [font-family:'Manrope',Helvetica] font-medium text-gray-500 text-[10px] text-center tracking-[0] leading-[13px]">
                            <span className="[font-family:'Manrope',Helvetica] font-medium text-gray-500 text-[10px] tracking-[0] leading-[13px]">
                              E
                            </span>

                            <span className="text-[13px] leading-[16.9px]">
                              P
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex flex-col items-center gap-[45px] relative flex-[0_0_auto]">
                      <div className="inline-flex flex-col items-center gap-[18px] relative flex-[0_0_auto]">
                        <p className="w-fit mt-[-1.00px] relative [font-family:'Manrope',Helvetica] font-medium text-gray-500 text-[10px] text-center tracking-[0] leading-[13px]">
                          <span className="[font-family:'Manrope',Helvetica] font-medium text-gray-500 text-[10px] tracking-[0] leading-[13px]">
                            F
                          </span>

                          <span className="text-[13px] leading-[16.9px]">
                            P
                          </span>
                        </p>

                        <p className="relative w-fit [font-family:'Manrope',Helvetica] font-medium text-gray-500 text-[10px] text-center tracking-[0] leading-[13px]">
                          <span className="[font-family:'Manrope',Helvetica] font-medium text-gray-500 text-[10px] tracking-[0] leading-[13px]">
                            G
                          </span>

                          <span className="text-[13px] leading-[16.9px]">
                            P
                          </span>
                        </p>
                      </div>

                      <p className="relative w-fit [font-family:'Manrope',Helvetica] font-medium text-gray-500 text-[10px] text-center tracking-[0] leading-[13px]">
                        <span className="[font-family:'Manrope',Helvetica] font-medium text-gray-500 text-[10px] tracking-[0] leading-[13px]">
                          H
                        </span>

                        <span className="text-[13px] leading-[16.9px]">P</span>
                      </p>
                    </div>
                  </div>

                  <img
                    className="absolute top-[calc(50.00%_-_3px)] left-[calc(50.00%_-_253px)] w-[472px] h-1.5 object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/mhbgaqp12GzVxu/img/line-3-6.svg"
                  />

                  <img
                    className="absolute top-[calc(50.00%_-_104px)] left-[calc(50.00%_-_253px)] w-[497px] h-px object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/mhbgaqp12GzVxu/img/line-5.svg"
                  />

                  <img
                    className="absolute top-[calc(50.00%_-_55px)] left-[calc(50.00%_-_179px)] w-[424px] h-px"
                    alt="Line"
                    src="https://c.animaapp.com/mhbgaqp12GzVxu/img/line-7.svg"
                  />

                  <img
                    className="absolute top-[calc(50.00%_-_28px)] left-[calc(50.00%_-_105px)] w-[349px] h-px object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/mhbgaqp12GzVxu/img/line-7.svg"
                  />

                  <img
                    className="absolute top-[calc(50.00%_+_22px)] left-[calc(50.00%_+_42px)] w-[202px] h-px object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/mhbgaqp12GzVxu/img/line-7.svg"
                  />

                  <img
                    className="absolute top-[calc(50.00%_+_52px)] left-[calc(50.00%_+_117px)] w-[127px] h-px object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/mhbgaqp12GzVxu/img/line-7.svg"
                  />

                  <img
                    className="absolute top-[calc(50.00%_+_108px)] left-[calc(50.00%_+_192px)] w-[52px] h-px object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/mhbgaqp12GzVxu/img/line-7.svg"
                  />

                  <img
                    className="absolute top-[60px] left-[calc(50.00%_-_34px)] w-1.5 h-[212px] object-cover"
                    alt="Line"
                    src="https://c.animaapp.com/mhbgaqp12GzVxu/img/line-4.svg"
                  />

                  <div className="top-[130px] left-[456px] text-right absolute font-leading-none-text-sm-font-semibold font-[number:var(--leading-none-text-sm-font-semibold-font-weight)] text-[#dbece6] text-[length:var(--leading-none-text-sm-font-semibold-font-size)] tracking-[var(--leading-none-text-sm-font-semibold-letter-spacing)] leading-[var(--leading-none-text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--leading-none-text-sm-font-semibold-font-style)]">
                    頻率
                  </div>

                  <div className="top-[62px] left-[246px] absolute font-leading-none-text-sm-font-semibold font-[number:var(--leading-none-text-sm-font-semibold-font-weight)] text-[#dbece6] text-[length:var(--leading-none-text-sm-font-semibold-font-size)] tracking-[var(--leading-none-text-sm-font-semibold-letter-spacing)] leading-[var(--leading-none-text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--leading-none-text-sm-font-semibold-font-style)]">
                    輸出
                  </div>

                  <div className="top-[30px] left-2 absolute font-leading-none-text-sm-font-semibold font-[number:var(--leading-none-text-sm-font-semibold-font-weight)] text-[#dbece6] text-[length:var(--leading-none-text-sm-font-semibold-font-size)] tracking-[var(--leading-none-text-sm-font-semibold-letter-spacing)] leading-[var(--leading-none-text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--leading-none-text-sm-font-semibold-font-style)]">
                    A
                  </div>

                  <div className="top-[76px] left-[84px] absolute font-leading-none-text-sm-font-semibold font-[number:var(--leading-none-text-sm-font-semibold-font-weight)] text-[#dbece6] text-[length:var(--leading-none-text-sm-font-semibold-font-size)] tracking-[var(--leading-none-text-sm-font-semibold-letter-spacing)] leading-[var(--leading-none-text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--leading-none-text-sm-font-semibold-font-style)]">
                    B
                  </div>

                  <div className="top-[106px] left-[156px] absolute font-leading-none-text-sm-font-semibold font-[number:var(--leading-none-text-sm-font-semibold-font-weight)] text-[#dbece6] text-[length:var(--leading-none-text-sm-font-semibold-font-size)] tracking-[var(--leading-none-text-sm-font-semibold-letter-spacing)] leading-[var(--leading-none-text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--leading-none-text-sm-font-semibold-font-style)]">
                    C
                  </div>

                  <div className="top-[106px] left-[302px] absolute font-leading-none-text-sm-font-semibold font-[number:var(--leading-none-text-sm-font-semibold-font-weight)] text-[#dbece6] text-[length:var(--leading-none-text-sm-font-semibold-font-size)] tracking-[var(--leading-none-text-sm-font-semibold-letter-spacing)] leading-[var(--leading-none-text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--leading-none-text-sm-font-semibold-font-style)]">
                    E
                  </div>

                  <div className="top-[184px] left-[382px] absolute font-leading-none-text-sm-font-semibold font-[number:var(--leading-none-text-sm-font-semibold-font-weight)] text-[#dbece6] text-[length:var(--leading-none-text-sm-font-semibold-font-size)] tracking-[var(--leading-none-text-sm-font-semibold-letter-spacing)] leading-[var(--leading-none-text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--leading-none-text-sm-font-semibold-font-style)]">
                    G
                  </div>

                  <div className="top-44 left-[294px] absolute font-leading-none-text-sm-font-semibold font-[number:var(--leading-none-text-sm-font-semibold-font-weight)] text-[#dbece6] text-[length:var(--leading-none-text-sm-font-semibold-font-size)] tracking-[var(--leading-none-text-sm-font-semibold-letter-spacing)] leading-[var(--leading-none-text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--leading-none-text-sm-font-semibold-font-style)]">
                    F
                  </div>

                  <div className="top-44 left-[164px] absolute font-leading-none-text-sm-font-semibold font-[number:var(--leading-none-text-sm-font-semibold-font-weight)] text-[#dbece6] text-[length:var(--leading-none-text-sm-font-semibold-font-size)] tracking-[var(--leading-none-text-sm-font-semibold-letter-spacing)] leading-[var(--leading-none-text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--leading-none-text-sm-font-semibold-font-style)]">
                    D
                  </div>

                  <div className="top-[244px] left-[458px] absolute font-leading-none-text-sm-font-semibold font-[number:var(--leading-none-text-sm-font-semibold-font-weight)] text-[#dbece6] text-[length:var(--leading-none-text-sm-font-semibold-font-size)] tracking-[var(--leading-none-text-sm-font-semibold-letter-spacing)] leading-[var(--leading-none-text-sm-font-semibold-line-height)] whitespace-nowrap [font-style:var(--leading-none-text-sm-font-semibold-font-style)]">
                    H
                  </div>

                  <div className="absolute top-[124px] left-40 w-[148px] h-[49px] bg-[#629d8f]" />

                  <div className="absolute top-[142px] left-48 [font-family:'Manrope',Helvetica] font-medium text-[#dbece6] text-sm text-center tracking-[0] leading-[14.4px] whitespace-nowrap">
                    彈性調整區間
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[1280px] items-start justify-center flex relative flex-[0_0_auto]">
            <img
              className="relative w-[1280px]"
              alt="Container"
              src="https://c.animaapp.com/mhbgaqp12GzVxu/img/container.svg"
            />
          </div>

          <div className="flex max-w-screen-xl items-center justify-center gap-8 px-8 py-0 relative w-full flex-[0_0_auto]">
            <div className="flex items-center gap-5 relative flex-1 grow">
              <div className="flex flex-col items-start gap-3 relative flex-1 grow">
                <h3 className="relative self-stretch mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
                  即時備轉容量
                </h3>

                <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-semibold text-[#b7d8cd] text-xl tracking-[0] leading-[30px]">
                  用於應對短期、突發性的供需失衡, 要求中等反應速度。
                </p>
              </div>
            </div>

            <img
              className="relative w-11 h-11"
              alt="Chevron down"
              src="https://c.animaapp.com/mhbgaqp12GzVxu/img/chevron-down-3.svg"
            />
          </div>

          <div className="w-[1280px] items-start justify-center flex relative flex-[0_0_auto]">
            <img
              className="relative w-[1280px]"
              alt="Container"
              src="https://c.animaapp.com/mhbgaqp12GzVxu/img/container.svg"
            />
          </div>

          <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 py-0 relative w-full flex-[0_0_auto]">
            <div className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-3 relative flex-1 grow">
                <h3 className="relative self-stretch mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
                  補充備轉容量
                </h3>

                <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-semibold text-[#b7d8cd] text-xl tracking-[0] leading-[30px]">
                  用於提供長時間的系統韌性, 要求反應速度最寬鬆。
                </p>
              </div>

              <img
                className="relative w-11 h-11"
                alt="Chevron down"
                src="https://c.animaapp.com/mhbgaqp12GzVxu/img/chevron-down-3.svg"
              />
            </div>
          </div>
        </div>

        <div className="flex-col items-center gap-6 px-0 py-16 self-stretch w-full bg-[#12211f] rounded-3xl border-t-[3px] [border-top-style:solid] border-[#2a4540] flex relative flex-[0_0_auto]">
          <div className="flex flex-col max-w-screen-xl items-start px-8 py-0 relative w-full flex-[0_0_auto]">
            <h2 className="relative self-stretch mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] text-center tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
              【長庚國際能源儲能系統】核心優勢
            </h2>
          </div>

          <div className="flex flex-col max-w-screen-xl items-start px-8 py-0 relative w-full flex-[0_0_auto]">
            <div className="flex flex-col max-w-screen-xl items-center gap-8 px-8 py-0 relative w-full flex-[0_0_auto]">
              <img
                className="relative w-[900.02px] h-[363.42px]"
                alt="Group"
                src="https://c.animaapp.com/mhbgaqp12GzVxu/img/group-79.png"
              />

              <div className="flex flex-col items-start justify-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
                <div className="gap-1.5 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
                  <p className="relative self-stretch mt-[-1.00px] font-text-lg-medium font-[number:var(--text-lg-medium-font-weight)] text-[#f5f6f6] text-[length:var(--text-lg-medium-font-size)] tracking-[var(--text-lg-medium-letter-spacing)] leading-[var(--text-lg-medium-line-height)] [font-style:var(--text-lg-medium-font-style)]">
                    我們的 COLD 磷酸鐵鋰儲能系統櫃 採用業界領先技術,
                    專為高效率與高安全性打造, 能完美滿足電力交易市場的嚴苛要求。
                    <br />
                    我們提供多種型號, 以匹配不同的場域需求和輔助服務策略 (例如,
                    C2100A 適合長時間、低倍率放電；C2100B 適合高倍率調頻服務) 。
                  </p>
                </div>

                <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                  {advantageCards.slice(0, 2).map((card, index) => (
                    <div
                      key={index}
                      className="gap-1.5 flex-1 grow flex flex-col items-start relative"
                    >
                      <div className="relative w-12 h-12 bg-[#2a4540] rounded-full overflow-hidden">
                        <img
                          className="absolute top-3 left-3 w-6 h-6"
                          alt={card.title}
                          src={card.icon}
                        />
                      </div>

                      <h4 className="relative self-stretch font-text-xl-semibold font-[number:var(--text-xl-semibold-font-weight)] text-[#b7d8cd] text-[length:var(--text-xl-semibold-font-size)] tracking-[var(--text-xl-semibold-letter-spacing)] leading-[var(--text-xl-semibold-line-height)] [font-style:var(--text-xl-semibold-font-style)]">
                        {card.title}
                      </h4>

                      <p className="relative self-stretch font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] [font-style:var(--text-sm-regular-font-style)]">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
                  {advantageCards.slice(2, 4).map((card, index) => (
                    <div
                      key={index}
                      className={`gap-1.5 flex-1 grow flex ${
                        index === 1 ? "items-start" : "flex-col items-start"
                      } relative`}
                    >
                      {index === 1 ? (
                        <div className="gap-1.5 flex-1 grow flex flex-col items-start relative">
                          <div className="relative w-12 h-12 bg-[#2a4540] rounded-full overflow-hidden">
                            <img
                              className="absolute top-3 left-3 w-6 h-6"
                              alt={card.title}
                              src={card.icon}
                            />
                          </div>

                          <h4 className="relative self-stretch font-text-xl-semibold font-[number:var(--text-xl-semibold-font-weight)] text-[#b7d8cd] text-[length:var(--text-xl-semibold-font-size)] tracking-[var(--text-xl-semibold-letter-spacing)] leading-[var(--text-xl-semibold-line-height)] [font-style:var(--text-xl-semibold-font-style)]">
                            {card.title}
                          </h4>

                          <p className="relative self-stretch font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] [font-style:var(--text-sm-regular-font-style)]">
                            {card.description}
                          </p>
                        </div>
                      ) : (
                        <>
                          <div className="relative w-12 h-12 bg-[#2a4540] rounded-full overflow-hidden">
                            <img
                              className="absolute top-3 left-3 w-6 h-6"
                              alt={card.title}
                              src={card.icon}
                            />
                          </div>

                          <h4 className="relative self-stretch font-text-xl-semibold font-[number:var(--text-xl-semibold-font-weight)] text-[#b7d8cd] text-[length:var(--text-xl-semibold-font-size)] tracking-[var(--text-xl-semibold-letter-spacing)] leading-[var(--text-xl-semibold-line-height)] [font-style:var(--text-xl-semibold-font-style)]">
                            {card.title}
                          </h4>

                          <p className="relative self-stretch font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] [font-style:var(--text-sm-regular-font-style)]">
                            {card.description}
                          </p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] rounded-xl overflow-hidden border border-solid border-[#263b37] shadow-shadows-shadow-xs">
                <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="w-[266px] flex flex-col items-start relative">
                    <div className="flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full z-[13] bg-[#263b37] border-b [border-bottom-style:solid]">
                      <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                          特徵
                        </div>
                      </div>
                    </div>

                    {tableData.map((row, index) => (
                      <div
                        key={index}
                        className={`flex h-[72px] items-center px-6 py-4 relative self-stretch w-full z-[${
                          12 - index
                        }] border-b [border-bottom-style:solid] border-[#2a4540]`}
                      >
                        <div className="relative w-fit font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap [font-style:var(--text-sm-regular-font-style)]">
                          {row.feature}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex-1 grow flex flex-col items-start relative">
                    <div className="flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full z-[13] bg-[#263b37] border-b [border-bottom-style:solid]">
                      <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                          C2100A
                        </div>
                      </div>
                    </div>

                    {tableData.map((row, index) => (
                      <div
                        key={index}
                        className={`flex h-[72px] items-center px-6 py-4 relative self-stretch w-full z-[${
                          12 - index
                        }] border-b [border-bottom-style:solid] border-[#2a4540]`}
                      >
                        <div
                          className={`relative w-fit ${
                            index === 0
                              ? "[font-family:'manrope-Regular',Helvetica] font-normal"
                              : "font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] [font-style:var(--text-sm-regular-font-style)]"
                          } text-[#dbece6] text-sm tracking-[${
                            index === 0
                              ? "0"
                              : "var(--text-sm-regular-letter-spacing)"
                          }] leading-[${
                            index === 0
                              ? "5"
                              : "var(--text-sm-regular-line-height)"
                          }] whitespace-nowrap ${index === 9 ? "mr-[-210.67px]" : ""}`}
                        >
                          {row.c2100a}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex-1 grow flex flex-col items-start relative">
                    <div className="flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full z-[13] bg-[#263b37] border-b [border-bottom-style:solid]">
                      <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                          C2100B
                        </div>
                      </div>
                    </div>

                    {tableData.map((row, index) => (
                      <div
                        key={index}
                        className={`flex h-[72px] items-center px-6 py-4 relative self-stretch w-full z-[${
                          12 - index
                        }] border-b [border-bottom-style:solid] border-[#2a4540]`}
                      >
                        <div
                          className={`relative w-fit ${
                            index === 9 ? "opacity-0" : ""
                          } font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap [font-style:var(--text-sm-regular-font-style)]`}
                        >
                          {row.c2100b || "120V/240V 分相"}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex-1 grow flex flex-col items-start relative">
                    <div className="flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full z-[13] bg-[#263b37] border-b [border-bottom-style:solid]">
                      <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                          C1400A
                        </div>
                      </div>
                    </div>

                    {tableData.map((row, index) => (
                      <div
                        key={index}
                        className={`flex h-[72px] items-center px-6 py-4 relative self-stretch w-full z-[${
                          12 - index
                        }] border-b [border-bottom-style:solid] border-[#2a4540]`}
                      >
                        <div
                          className={`relative w-fit ${
                            index === 9 ? "opacity-0" : ""
                          } font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap [font-style:var(--text-sm-regular-font-style)]`}
                        >
                          {row.c1400a || "120V/240V 分相"}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col items-center gap-16 px-0 py-24 self-stretch w-full bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(19,22,27,1)_100%)] flex relative flex-[0_0_auto]">
        <div className="flex max-w-screen-xl items-start gap-6 px-8 py-0 relative w-full flex-[0_0_auto]">
          <div className="flex-wrap justify-between gap-[32px_32px] flex-1 grow rounded-3xl bg-[linear-gradient(162deg,rgba(14,40,51,1)_0%,rgba(32,33,36,1)_100%)] flex items-start relative">
            <div className="flex flex-col items-start gap-20 p-8 relative flex-1 grow">
              <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                <div className="relative w-[68px] h-[68px] rounded-[28px] bg-[url(https://c.animaapp.com/mhbgaqp12GzVxu/img/background.svg)] bg-[100%_100%]">
                  <div className="flex flex-col w-9 h-9 items-center justify-center relative top-[calc(50.00%_-_18px)] left-[calc(50.00%_-_18px)] bg-[#7bd7e5] rounded-[99px]">
                    <img
                      className="relative w-5 h-5"
                      alt="Building"
                      src="https://c.animaapp.com/mhbgaqp12GzVxu/img/building-07.svg"
                    />
                  </div>
                </div>

                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <h3 className="relative self-stretch mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
                    Cold OG
                  </h3>

                  <p className="self-stretch text-[#cecfd2] text-[length:var(--text-lg-regular-font-size)] leading-[var(--text-lg-regular-line-height)] relative font-text-lg-regular font-[number:var(--text-lg-regular-font-weight)] tracking-[var(--text-lg-regular-letter-spacing)] [font-style:var(--text-lg-regular-font-style)]">
                    旗艦級工業規格儲能系統
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
                {productFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col min-w-60 items-start gap-4 relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
                      <h4 className="relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
                        {feature.title}
                      </h4>

                      <p className="self-stretch text-[#cecfd2] text-[length:var(--text-md-regular-font-size)] leading-[var(--text-md-regular-line-height)] relative font-text-md-regular font-[number:var(--text-md-regular-font-weight)] tracking-[var(--text-md-regular-letter-spacing)] [font-style:var(--text-md-regular-font-style)]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}

                <div className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#cecfd2] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                    了解更多
                  </div>

                  <img
                    className="relative w-5 h-5"
                    alt="Arrow right"
                    src="https://c.animaapp.com/mhbgaqp12GzVxu/img/arrow-right.svg"
                  />
                </div>
              </div>
            </div>

            <div className="relative w-[699px] h-[576px] rounded-[24px_24px_24px_0px] overflow-hidden bg-[linear-gradient(172deg,rgba(33,72,88,1)_0%,rgba(34,86,104,1)_65%,rgba(32,105,126,1)_84%,rgba(34,86,104,1)_100%)]">
              <img
                className="absolute top-0 left-0 w-[699px] h-[576px]"
                alt="Background pattern"
                src="https://c.animaapp.com/mhbgaqp12GzVxu/img/background-pattern.svg"
              />

              <div className="absolute top-[25px] left-[-27px] bg-[linear-gradient(176deg,rgba(177,232,240,1)_0%,rgba(34,86,104,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Manrope',Helvetica] font-semibold text-transparent text-[238px] text-center tracking-[-4.76px] leading-[90px] whitespace-nowrap">
                OG
              </div>

              <img
                className="absolute top-[106px] left-[66px] w-[596px] h-[419px] object-cover"
                alt="Cold"
                src="https://c.animaapp.com/mhbgaqp12GzVxu/img/cold1-1.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-[3px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-16 px-0 py-40 relative self-stretch w-full flex-[0_0_auto] bg-[#12211f] rounded-[24px_24px_0px_0px] overflow-hidden border-b [border-bottom-style:solid] border-[#30554e]">
          <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 py-0 relative w-full flex-[0_0_auto]">
            <div className="flex flex-col items-center gap-16 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-start justify-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-8 relative flex-1 grow">
                  <img
                    className="relative w-[149.63px] h-[43px]"
                    alt="Color light green"
                    src="https://c.animaapp.com/mhbgaqp12GzVxu/img/colorlightgreen.png"
                  />

                  <h2 className="relative self-stretch font-display-xl-semibold font-[number:var(--display-xl-semibold-font-weight)] text-[#dbece6] text-[length:var(--display-xl-semibold-font-size)] tracking-[var(--display-xl-semibold-letter-spacing)] leading-[var(--display-xl-semibold-line-height)] [font-style:var(--display-xl-semibold-font-style)]">
                    現在預約評估
                  </h2>
                </div>

                <div className="flex flex-col w-[714px] items-start gap-8 relative">
                  <div className="h-[280px] gap-[30px] flex flex-col items-start">
                    <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-semibold text-[#b7d8cd] text-3xl tracking-[0] leading-[38px]">
                      <span className="[font-family:'Manrope',Helvetica] font-semibold text-[#b7d8cd] text-3xl tracking-[0] leading-[38px]">
                        對於用電問題感到困擾？不知道怎麼計算回本？
                      </span>
                    </p>

                    <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-semibold text-[#b7d8cd] text-3xl tracking-[0] leading-[38px]">
                      <span className="[font-family:'Manrope',Helvetica] font-semibold text-[#b7d8cd] text-3xl tracking-[0] leading-[38px]">
                        與其自己想半天, 就讓我們為您找出最適合案!
                      </span>
                    </p>

                    <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-semibold text-[#b7d8cd] text-3xl tracking-[0] leading-[38px]">
                      <span className="[font-family:'Manrope',Helvetica] font-semibold text-[#b7d8cd] text-3xl tracking-[0] leading-[38px]">
                        我們公司提供了免費評估, 從場地觀察到效益精算,
                        我們會站在您的角度協助你解
                      </span>
                    </p>

                    <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-semibold text-[#b7d8cd] text-3xl tracking-[0] leading-[38px]">
                      <span className="[font-family:'Manrope',Helvetica] font-semibold text-[#b7d8cd] text-3xl tracking-[0] leading-[38px]">
                        決問題而這一切都是免費的, 現在與我們聯絡吧!
                      </span>
                    </p>
                  </div>

                  <button className="gap-1.5 px-[18px] py-3 bg-teal-950 border border-solid border-[#30554e] inline-flex items-center justify-center relative flex-[0_0_auto] rounded-xl overflow-hidden shadow-shadows-shadow-xs-skeuomorphic">
                    <img
                      className="relative w-5 h-5"
                      alt="Edit"
                      src="https://c.animaapp.com/mhbgaqp12GzVxu/img/edit-03.svg"
                    />

                    <div className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#cecfd2] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                        聯繫我們
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
