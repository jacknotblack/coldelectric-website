import React from "react";

interface SpecificationRow {
  label: string;
  s90: string;
  s100: string;
}

interface UseCase {
  icon: string;
  description: string;
}

interface SystemIntegration {
  icon: string;
  description: string;
}

const useCases: UseCase[] = [
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/info-hexagon-1@2x.png",
    description: "在高峰價格窗口期間通過放電來減少電網壓力。",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/git-branch-02-2@2x.png",
    description: "為偏遠社區、電信站或島嶼度假村提供交鑰匙自主解決方案。",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/sun-setting-02-2@2x.png",
    description: "數據中心、醫院和工業廠房的無縫故障轉移。",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/hard-drive-2@2x.png",
    description: "參與頻率調節、容量拍賣和批發市場。",
  },
];

const systemIntegrations: SystemIntegration[] = [
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/link-05-2@2x.png",
    description: "設計用於直接連接到您的變電站或變壓器。",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/home-smile-5@2x.png",
    description: "可配置的電力轉換設置、保護繼電器和安全互鎖。",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/users-01-1@2x.png",
    description: "支持Modbus RTU/TCP、OPC-UA和IEC 61850以實現實時控制。",
  },
  {
    icon: "https://c.animaapp.com/U7V4C1eZ/img/wifi-1@2x.png",
    description: "通過長庚國際能源 EMS提供實時儀表板、自動警報和空中固件編排。",
  },
];

const productImages: string[] = [
  "https://c.animaapp.com/U7V4C1eZ/img/zero-7.png",
  "https://c.animaapp.com/U7V4C1eZ/img/product-pics-02-2.png",
  "https://c.animaapp.com/U7V4C1eZ/img/cold-sub3-3.png",
];

const featureRows: FeatureRow[] = [
    { label: "額定容量", value: "93.39 kWh" },
    { label: "可用容量", value: "84 kWh" },
    { label: "最大連續功率輸出", value: "30 kW" },
    { label: "電池電壓範圍", value: "600–900 V DC" },
    { label: "往返效率", value: "90%" },
    { label: "功率因數範圍", value: "–1.0 到 +1.0" },
    { label: "尺寸 (寬 × 高 × 深)", value: "W 47.6 × D 53 × H 74.8 英寸" },
    { label: "電池模組防護等級", value: "IP55，IP54" },
    { label: "交流輸出電壓", value: "380/480 V AC，三相，3P/3W" },
    { label: "操作頻率", value: "50/60 Hz" },
  ];

interface FeatureItem {
  icon: string;
  iconAlt: string;
  text: string;
}

interface FeatureSection {
  title: string;
  features: FeatureItem[];
}

const featureSections: FeatureSection[] = [
  {
    title: "使用案例",
    features: [
      {
        icon: "https://c.animaapp.com/2lnZ2X0I/img/info-hexagon@2x.png",
        iconAlt: "Info hexagon",
        text: "自動部署儲能以達成公用事業削峰。",
      },
      {
        icon: "https://c.animaapp.com/2lnZ2X0I/img/git-branch-02@2x.png",
        iconAlt: "Git branch",
        text: "在斷電期間保持關鍵負載在線—無需人工干預。",
      },
      {
        icon: "https://c.animaapp.com/2lnZ2X0I/img/sun-setting-02@2x.png",
        iconAlt: "Sun setting",
        text: "與太陽能、風能或發電機搭配使用",
      },
      {
        icon: "https://c.animaapp.com/2lnZ2X0I/img/hard-drive@2x.png",
        iconAlt: "Hard drive",
        text: "為輔助服務、容量市場及批次交易提供容量聚合。",
      },
    ],
  },
  {
    title: "系統整合",
    features: [
      {
        icon: "https://c.animaapp.com/2lnZ2X0I/img/link-05@2x.png",
        iconAlt: "Link",
        text: "原生雙向通訊，用於負載優化、預測與自動調度。",
      },
      {
        icon: "https://c.animaapp.com/2lnZ2X0I/img/home-smile@2x.png",
        iconAlt: "Home smile",
        text: "IP65 防護等級外殼，適用於戶外或工業部署的全天候設計。",
      },
      {
        icon: "https://c.animaapp.com/2lnZ2X0I/img/users-01@2x.png",
        iconAlt: "Users",
        text: "透過我們的虛擬電廠平台，實現點對點及市場交易。",
      },
      {
        icon: "https://c.animaapp.com/2lnZ2X0I/img/wifi@2x.png",
        iconAlt: "Wifi",
        text: "遠端監控與診斷：24/7 雲端可視化、韌體協調與遠端平台的健康警報。",
      },
    ],
  },
];

const galleryImages = [
  {
    src: "https://c.animaapp.com/2lnZ2X0I/img/cold2@2x.png",
    alt: "Cold",
  },
  {
    src: "https://c.animaapp.com/2lnZ2X0I/img/sub@2x.png",
    alt: "Sub",
  },
  {
    src: "https://c.animaapp.com/2lnZ2X0I/img/cold-sub3@2x.png",
    alt: "Cold",
  },
];


export const ProductFeaturesSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-16 pt-0 pb-12 px-0 relative self-stretch w-full flex-[0_0_auto] z-[2] bg-[#12211f] rounded-[24px_24px_0px_0px] overflow-hidden">

			{/*  */}
			<section className="flex max-w-screen-xl items-start justify-center gap-16 pt-24 pb-0 px-0 relative w-full flex-[0_0_auto]">
				<header className="flex flex-col max-w-[480px] items-start gap-8 px-8 py-0 relative flex-1 grow">
        <div className="flex flex-col items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col max-w-screen-md items-start gap-5 relative w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#47cd89] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                規格
              </p>

              <h2 className="relative self-stretch font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#fbfdfd] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
                Cold ZERO 商用儲能系統
              </h2>
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-col items-start relative flex-1 grow rounded-xl overflow-hidden border border-solid border-[#263b37] shadow-shadows-shadow-xs">
        <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start relative flex-1 grow">
            <div className="flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full z-10 bg-[#263b37] border-b [border-bottom-style:solid]">
              <div className="inline-flex gap-1 flex-[0_0_auto] items-center relative">
                <h3 className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                  特徵
                </h3>
              </div>
            </div>

            {featureRows.map((row, index) => (
              <div
                key={`feature-label-${index}`}
                className="flex h-[72px] px-6 py-4 self-stretch w-full border-b [border-bottom-style:solid] border-[#2a4540] items-center relative"
                style={{ zIndex: 9 - index }}
              >
                <div className="w-fit text-[length:var(--text-sm-regular-font-size)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap relative font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] tracking-[var(--text-sm-regular-letter-spacing)] [font-style:var(--text-sm-regular-font-style)]">
                  {row.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start relative flex-1 grow">
            <div className="flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full z-10 bg-[#263b37] border-b [border-bottom-style:solid]">
              <div className="inline-flex gap-1 flex-[0_0_auto] items-center relative">
                <h3 className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                  詳細信息
                </h3>
              </div>
            </div>

            {featureRows.map((row, index) => (
              <div
                key={`feature-value-${index}`}
                className="flex h-[72px] px-6 py-4 self-stretch w-full border-b [border-bottom-style:solid] border-[#2a4540] items-center relative"
                style={{ zIndex: 9 - index }}
              >
                <div className="w-fit text-[length:var(--text-sm-regular-font-size)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap relative font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] tracking-[var(--text-sm-regular-letter-spacing)] [font-style:var(--text-sm-regular-font-style)]">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
			</section>
{/*  */}
      {/* <div className="flex-col items-center justify-center gap-0.5 self-stretch flex relative w-full flex-[0_0_auto]">
        <div className="flex-col max-w-screen-xl items-center gap-16 px-0 py-12 bg-[#ffffff0a] rounded-[24px_24px_0px_0px] overflow-hidden flex relative w-full flex-[0_0_auto]">
          <div className="flex-wrap max-w-screen-xl items-start gap-[96px_96px] flex px-8 py-0 relative w-full flex-[0_0_auto]">
            <article className="flex flex-col items-start gap-5 relative flex-1 grow">
              <div className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start gap-3 relative">
                <h3 className="self-stretch mt-[-1.00px] text-[#dbece6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                  使用案例
                </h3>
              </div>
              <ul className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
                {useCases.map((useCase, index) => (
                  <li
                    key={index}
                    className="flex min-w-60 max-w-[560px] items-center gap-4 relative w-full flex-[0_0_auto]"
                  >
                    <div className="relative w-12 h-12 bg-[#30554e] rounded-full overflow-hidden aspect-[1]">
                      <img
                        className="absolute top-3 left-3 w-6 h-6 aspect-[1]"
                        alt=""
                        src={useCase.icon}
                      />
                    </div>
                    <p className="relative w-[483px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#dbece6] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                      {useCase.description}
                    </p>
                  </li>
                ))}
              </ul>
            </article>

            <article className="flex flex-col items-start gap-5 relative flex-1 grow">
              <div className="self-stretch w-full flex-[0_0_auto] flex flex-col items-start gap-3 relative">
                <h3 className="self-stretch mt-[-1.00px] text-[#dbece6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] relative font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] [font-style:var(--display-md-semibold-font-style)]">
                  系統整合
                </h3>
              </div>
              <ul className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
                {systemIntegrations.map((integration, index) => (
                  <li
                    key={index}
                    className="flex min-w-60 max-w-[560px] items-center gap-4 relative w-full flex-[0_0_auto]"
                  >
                    <div className="relative w-12 h-12 bg-[#30554e] rounded-full overflow-hidden aspect-[1]">
                      <img
                        className="absolute top-3 left-3 w-6 h-6 aspect-[1]"
                        alt=""
                        src={integration.icon}
                      />
                    </div>
                    <p
                      className={`relative ${index === 0 ? "flex items-center justify-center self-stretch w-[496px] mt-[-1.00px]" : "w-fit whitespace-nowrap"} font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#dbece6] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]`}
                    >
                      {integration.description}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>

        <div className="flex max-w-screen-xl items-center gap-0.5 w-full relative flex-[0_0_auto]">
					111
          {productImages.map((image, index) => (
            <img
              key={index}
              className={`relative flex-1 grow ${index > 0 ? "object-cover" : ""}`}
              alt=""
              src={image}
            />
          ))}
        </div>
      </div> */}
			<section
      className="flex flex-col items-center justify-center gap-0.5 relative"
      data-model-id="15710:49450"
      aria-label="Features and Gallery Section"
    >
      <div className="flex flex-col max-w-screen-xl items-center gap-16 px-0 py-12 relative w-full flex-[0_0_auto] bg-[#ffffff0a] rounded-[24px_24px_0px_0px] overflow-hidden">
        <div className="flex flex-wrap max-w-screen-xl items-start gap-[96px_96px] px-8 py-0 relative w-full flex-[0_0_auto]">
          {featureSections.map((section, sectionIndex) => (
            <article
              key={sectionIndex}
              className="flex flex-col items-start gap-5 relative flex-1 grow"
            >
              <header className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative self-stretch mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#dbece6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
                  {section.title}
                </h2>
              </header>

              <ul className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
                {section.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex min-w-60 max-w-[560px] items-center gap-4 relative w-full flex-[0_0_auto]"
                  >
                    <div
                      className="relative w-12 h-12 bg-[#30554e] rounded-full overflow-hidden aspect-[1]"
                      aria-hidden="true"
                    >
                      <img
                        className="absolute top-3 left-3 w-6 h-6 aspect-[1]"
                        alt={feature.iconAlt}
                        src={feature.icon}
                      />
                    </div>

                    <p
                      className={`relative ${sectionIndex === 0 ? "w-[483px]" : sectionIndex === 1 && featureIndex === 3 ? "flex-1 mt-[-1.00px]" : "w-fit"} font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#dbece6] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] ${sectionIndex === 1 && featureIndex < 3 ? "whitespace-nowrap" : ""} [font-style:var(--text-md-regular-font-style)]`}
                    >
                      {feature.text}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      <div
        className="flex max-w-screen-xl items-center gap-0.5 relative w-full flex-[0_0_auto]"
        role="region"
        aria-label="Product Gallery"
      >
        {galleryImages.map((image, index) => (
          <img
            key={index}
            className="relative flex-1 grow aspect-[1] object-cover"
            alt={image.alt}
            src={image.src}
          />
        ))}
      </div>
    </section>
    </section>
  );
};
