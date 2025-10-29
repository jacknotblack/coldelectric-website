import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

interface SpecificationRow {
  label: string;
  c2100a: string;
  c2100b: string;
  c1400a: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-1.5 flex-1 grow items-start relative">
      <div className="relative w-12 h-12 bg-[#2a4540] rounded-full overflow-hidden">
        <img className="absolute top-3 left-3 w-6 h-6" alt={title} src={icon} />
      </div>
      <h3 className="relative self-stretch font-text-xl-semibold font-[number:var(--text-xl-semibold-font-weight)] text-[#b7d8cd] text-[length:var(--text-xl-semibold-font-size)] tracking-[var(--text-xl-semibold-letter-spacing)] leading-[var(--text-xl-semibold-line-height)] [font-style:var(--text-xl-semibold-font-style)]">
        {title}
      </h3>
      <p className="relative self-stretch font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] [font-style:var(--text-sm-regular-font-style)]">
        {description}
      </p>
    </div>
  );
};

export const ContentWrapperSection = (): JSX.Element => {
  const features: FeatureCardProps[][] = [
    [
      {
        icon: "https://c.animaapp.com/mhbhid3dIptXU6/img/shield-01.svg",
        title: "獨家低溫技術, 安全高效",
        description:
          "採用長庚自行研發的COLD 磷酸鋰鐵軟包電芯, 搭配特殊配方與結構設計, 使電芯工 作溫度明顯低於市場競品, 確保長期穩定的高效能輸出。",
      },
      {
        icon: "https://c.animaapp.com/mhbhid3dIptXU6/img/settings-02.svg",
        title: "全方位安全防護",
        description:
          "於數秒內完成反應（分鐘級圖示顯示）。\n系統提供毫秒級主動響應，不受指令延遲影響。",
      },
    ],
    [
      {
        icon: "https://c.animaapp.com/mhbhid3dIptXU6/img/tool-01.svg",
        title: "耐候設計, 維護便捷",
        description:
          "外殼採用SMC材質, 具備耐酸鹼、耐高溫、高隔熱性。非步入式設計搭配模組化設計, 讓電芯、模組的檢修和更換更為快速, 大幅降低維護時間與運營成本 (0&M) 。",
      },
      {
        icon: "https://c.animaapp.com/mhbhid3dIptXU6/img/lightning-01.svg",
        title: "彈性應變",
        description:
          "模組化設計不僅利於維護, 更確保系統能靈活、有彈性地應對各種輔助服務 (如 dReg、備轉) 的需求, 最大化您的投資回報。",
      },
    ],
  ];

  const specifications: SpecificationRow[] = [
    {
      label: "額定容量",
      c2100a: "2,104 kWh",
      c2100b: "2,104 kWh",
      c1400a: "1,400 kWh",
    },
    {
      label: "可用容量",
      c2100a: "1,800 kWh",
      c2100b: "1,750 kWh",
      c1400a: "1,200 kWh",
    },
    {
      label: "峰值輸出功率",
      c2100a: "500 kW",
      c2100b: "1,000 kW",
      c1400a: "500 kW",
    },
    {
      label: "電池電壓範圍",
      c2100a: "600–876 V DC",
      c2100b: "600–876 V DC",
      c1400a: "600–876 V DC",
    },
    {
      label: "交流輸出電壓",
      c2100a: "380V AC",
      c2100b: "380V AC",
      c1400a: ">95%",
    },
    {
      label: "頻率",
      c2100a: "50–60 Hz",
      c2100b: "50–60 Hz",
      c1400a: "50–60 Hz",
    },
    {
      label: "循環壽命",
      c2100a: "≥ 6,000 次循環",
      c2100b: "≥ 6,000 次循環",
      c1400a: "≥ 6,000 次循環",
    },
    {
      label: "往返效率",
      c2100a: "> 94 % (DC→DC)",
      c2100b: "> 94 % (DC→DC)",
      c1400a: "> 94 % (DC→DC)",
    },
    {
      label: "防護等級",
      c2100a: "IP65 (電池) / IP55 (接線)",
      c2100b: "IP65 (電池) / IP55 (接線)",
      c1400a: "IP65 (電池) / IP55 (接線)",
    },
    {
      label: "認證",
      c2100a:
        "UL 9540A, UL 2580, UL 1973, IEC 62619, CNS 62619, UN 38.3, IEC 60730-1",
      c2100b: "",
      c1400a: "",
    },
    {
      label: "尺寸 (寬 × 深 × 高)",
      c2100a: "W 269.7 × D 95.7 × H 115.4 英寸",
      c2100b: "W 269.7 × D 95.7 × H 115.4 英寸",
      c1400a: "W 238.2 × D 95.7 × H 115.4 英寸",
    },
    {
      label: "重量",
      c2100a: "60,000 磅",
      c2100b: "60,000 磅",
      c1400a: "50,000 磅",
    },
    {
      label: "製造地",
      c2100a: "台灣",
      c2100b: "台灣",
      c1400a: "台灣",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-6 px-0 py-16 self-stretch w-full z-[3] bg-[#12211f] rounded-3xl border-t-[3px] [border-top-style:solid] border-[#2a4540] relative flex-[0_0_auto]">
      <div className="flex flex-col max-w-screen-xl items-start px-8 py-0 relative w-full flex-[0_0_auto]">
        <h2 className="relative self-stretch mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] text-center tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
          【長庚國際能源儲能系統】核心優勢
        </h2>
      </div>

      <div className="flex flex-col max-w-screen-xl items-start px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col max-w-screen-xl items-center gap-8 px-8 py-0 relative w-full flex-[0_0_auto]">
          <img
            className="relative w-[900.02px] h-[363.42px]"
            alt="長庚國際能源儲能系統"
            src="https://c.animaapp.com/mhbhid3dIptXU6/img/group-79.png"
          />

          <div className="flex flex-col items-start justify-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col gap-1.5 self-stretch w-full flex-[0_0_auto] items-start relative">
              <p className="relative self-stretch mt-[-1.00px] font-text-lg-medium font-[number:var(--text-lg-medium-font-weight)] text-[#f5f6f6] text-[length:var(--text-lg-medium-font-size)] tracking-[var(--text-lg-medium-letter-spacing)] leading-[var(--text-lg-medium-line-height)] [font-style:var(--text-lg-medium-font-style)]">
                我們的 COLD 磷酸鐵鋰儲能系統櫃 採用業界領先技術,
                專為高效率與高安全性打造, 能完美滿足電力交易市場的嚴苛要求。
                <br />
                我們提供多種型號, 以匹配不同的場域需求和輔助服務策略 (例如,
                C2100A 適合長時間、低倍率放電；C2100B 適合高倍率調頻服務) 。
              </p>
            </div>

            {features.map((featureRow, rowIndex) => (
              <div
                key={rowIndex}
                className="flex items-start gap-5 relative self-stretch w-full flex-[0_0_auto]"
              >
                {featureRow.map((feature, featureIndex) => (
                  <FeatureCard
                    key={featureIndex}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] rounded-xl overflow-hidden border border-solid border-[#263b37] shadow-shadows-shadow-xs">
            <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="w-[266px] flex flex-col items-start relative">
                <div className="z-[13] flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full bg-[#263b37] border-b [border-bottom-style:solid]">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                      特徵
                    </div>
                  </div>
                </div>

                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className={`flex h-[72px] items-center px-6 py-4 relative self-stretch w-full border-b [border-bottom-style:solid] border-[#2a4540]`}
                    style={{ zIndex: 12 - index }}
                  >
                    <div className="relative w-fit font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap [font-style:var(--text-sm-regular-font-style)]">
                      {spec.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex-1 grow flex flex-col items-start relative">
                <div className="z-[13] flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full bg-[#263b37] border-b [border-bottom-style:solid]">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                      C2100A
                    </div>
                  </div>
                </div>

                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className={`flex h-[72px] items-center px-6 py-4 relative self-stretch w-full border-b [border-bottom-style:solid] border-[#2a4540]`}
                    style={{ zIndex: 12 - index }}
                  >
                    <p
                      className={`relative w-fit ${index === 9 ? "mr-[-210.67px]" : ""} ${index === 0 ? "[font-family:'manrope-Regular',Helvetica] font-normal" : "font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] [font-style:var(--text-sm-regular-font-style)]"} text-[#dbece6] text-sm tracking-[0] leading-5 whitespace-nowrap`}
                    >
                      {spec.c2100a}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex-1 grow flex flex-col items-start relative">
                <div className="z-[13] flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full bg-[#263b37] border-b [border-bottom-style:solid]">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                      C2100B
                    </div>
                  </div>
                </div>

                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className={`flex h-[72px] items-center px-6 py-4 relative self-stretch w-full border-b [border-bottom-style:solid] border-[#2a4540]`}
                    style={{ zIndex: 12 - index }}
                  >
                    <div
                      className={`relative w-fit ${index === 9 ? "opacity-0" : ""} font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap [font-style:var(--text-sm-regular-font-style)]`}
                    >
                      {spec.c2100b || "120V/240V 分相"}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex-1 grow flex flex-col items-start relative">
                <div className="z-[13] flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full bg-[#263b37] border-b [border-bottom-style:solid]">
                  <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                      C1400A
                    </div>
                  </div>
                </div>

                {specifications.map((spec, index) => (
                  <div
                    key={index}
                    className={`flex h-[72px] items-center px-6 py-4 relative self-stretch w-full border-b [border-bottom-style:solid] border-[#2a4540]`}
                    style={{ zIndex: 12 - index }}
                  >
                    <p
                      className={`relative w-fit ${index === 9 ? "opacity-0" : ""} font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap [font-style:var(--text-sm-regular-font-style)]`}
                    >
                      {spec.c1400a || "120V/240V 分相"}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
