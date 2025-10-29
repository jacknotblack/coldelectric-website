import React, { useState, ChangeEvent } from "react";

interface NavItem {
  label: string;
  hasDropdown: boolean;
}

interface SolutionCard {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

export const HeroHeaderSection = (): JSX.Element => {
  const [contractCapacity, setContractCapacity] = useState<string>("");

  const navItems: NavItem[] = [
    { label: "解決方案", hasDropdown: true },
    { label: "產品服務", hasDropdown: true },
    { label: "賦能產業", hasDropdown: true },
    { label: "資源中心", hasDropdown: true },
    { label: "品牌故事", hasDropdown: false },
  ];

  const solutionCards: SolutionCard[] = [
    {
      icon: "https://c.animaapp.com/mhbhid3dIptXU6/img/sun-setting-01.svg",
      iconAlt: "Sun setting",
      title: "自設再生能源設備",
      description: "建置 10% 太陽光電或風力發電。",
    },
    {
      icon: "https://c.animaapp.com/mhbhid3dIptXU6/img/battery-charging-01.svg",
      iconAlt: "Battery charging",
      title: "設置儲能設備",
      description: "設置同等義務容量, 並可連續供電 2小時的儲能系統。",
    },
    {
      icon: "https://c.animaapp.com/mhbhid3dIptXU6/img/file-02.svg",
      iconAlt: "File",
      title: "購買再生能源憑證 (T-REC)",
      description: "透過購買綠電憑證來抵充義務量。",
    },
  ];

  const calculateAnnualFee = (capacity: string): string => {
    const capacityNum = Number.parseFloat(capacity);
    if (isNaN(capacityNum) || capacityNum <= 0) {
      return "NT$ 0";
    }
    const fee = capacityNum * 0.1 * 2500 * 4;
    return `NT$ ${fee.toLocaleString("en-US")}`;
  };

  const handleCapacityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setContractCapacity(value);
    }
  };

  const annualFee = calculateAnnualFee(contractCapacity);
  const displayCapacity = contractCapacity || "6000";

  return (
    <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] z-[8]">
      <header className="relative self-stretch w-full h-20 z-[1]">
        <div className="flex-col h-20 items-center justify-center flex w-full relative">
          <div className="flex max-w-screen-xl items-center gap-4 px-8 py-0 relative w-full flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto] rounded-lg">
              <img
                className="relative w-[99.74px] h-[15.91px]"
                alt="Text"
                src="https://c.animaapp.com/mhbhid3dIptXU6/img/text.png"
              />

              <img
                className="-top-2 w-[51px] h-1.5 absolute left-[3px]"
                alt="Element"
                src="https://c.animaapp.com/mhbhid3dIptXU6/img/-294c60ff.png"
              />
            </div>

            <nav
              className="flex items-center gap-5 relative flex-1 grow"
              aria-label="主要導航"
            >
              <div className="gap-0.5 inline-flex items-center relative flex-[0_0_auto]">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    className="inline-flex items-center justify-center gap-0.5 px-1.5 py-1 relative flex-[0_0_auto] rounded-lg overflow-hidden"
                    aria-label={item.label}
                    aria-haspopup={item.hasDropdown ? "true" : undefined}
                  >
                    <div className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                        {item.label}
                      </div>
                    </div>

                    {item.hasDropdown && (
                      <img
                        className="relative w-4 h-4"
                        alt=""
                        src="https://c.animaapp.com/mhbhid3dIptXU6/img/chevron-down.svg"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                ))}
              </div>
            </nav>

            <div className="gap-3 inline-flex items-center relative flex-[0_0_auto]">
              <button
                className="bg-[#263b37] border border-solid border-[#30554e] inline-flex items-center justify-center gap-1 px-3.5 py-2.5 relative flex-[0_0_auto] rounded-xl overflow-hidden shadow-shadows-shadow-xs-skeuomorphic"
                aria-label="選擇語言"
              >
                <div className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-[#cecfd2] text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-semibold-font-style)]">
                    繁體中文
                  </div>
                </div>

                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="https://c.animaapp.com/mhbhid3dIptXU6/img/chevron-selector-vertical.svg"
                  aria-hidden="true"
                />
              </button>

              <button
                className="bg-[#85b378] border-[none] inline-flex items-center justify-center gap-1 px-3.5 py-2.5 relative flex-[0_0_auto] rounded-xl overflow-hidden shadow-shadows-shadow-xs-skeuomorphic before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                aria-label="聯繫我們"
              >
                <div className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-white text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-semibold-font-style)]">
                    聯繫我們
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-col items-start self-stretch flex-[0_0_auto] z-0 flex w-full relative">
        <section className="flex flex-col items-center gap-10 pt-20 pb-24 px-0 self-stretch w-full relative flex-[0_0_auto]">
          <div className="flex max-w-screen-xl items-start justify-between px-8 py-0 relative w-full flex-[0_0_auto]">
            <article className="inline-flex flex-col items-start gap-12 relative flex-[0_0_auto]">
              <div className="inline-flex flex-col gap-3 flex-[0_0_auto] items-start relative">
                <h1 className="relative w-fit mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] whitespace-nowrap [font-style:var(--display-md-semibold-font-style)]">
                  用電大戶定義與應對策略
                </h1>

                <div className="w-[592px] h-[88px] gap-4 flex flex-col items-start">
                  <p className="relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#cecfd2] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                    <span className="font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#cecfd2] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                      您是「用電大戶」嗎？
                    </span>
                  </p>

                  <p className="relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#cecfd2] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                    <span className="font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#cecfd2] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                      根據《一定契約容量以上之電力用戶應設置再生能源發電設備管理辦法》
                      (即用電大戶條款) , 規定企業的經常契約容量達5000 KW 以上,
                      即視為用電大戶。
                    </span>
                  </p>
                </div>

                <p className="relative w-[592px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#cecfd2] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                  您的儲能系統 (ESS) 不僅是備援,
                  更是獲利工具。本平台透過活絡市場機制,
                  鼓勵民間投資參與輔助服務及備用容量交易,
                  為您的併網型儲能系統創造長期、穩定的營收來源。
                </p>
              </div>

              <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-5 relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col gap-3 flex-[0_0_auto] items-start relative">
                    <h2 className="relative w-fit mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] whitespace-nowrap [font-style:var(--display-md-semibold-font-style)]">
                      您的義務與代價
                    </h2>
                  </div>
                </div>

                <div className="inline-flex flex-col items-start justify-center gap-5 relative flex-[0_0_auto]">
                  <p className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#dbece6] text-sm tracking-[0] leading-5">
                    用電大戶必須履行以下綠能義務, 否則將面臨高額的代金 (罰款):
                  </p>

                  <div className="flex flex-col w-[585px] items-start relative flex-[0_0_auto] rounded-3xl overflow-hidden border border-solid border-[#263b37] shadow-shadows-shadow-xs">
                    <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                      <div className="w-[266px] flex flex-col items-start relative">
                        <div className="flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full z-[1] bg-[#263b37] border-b [border-bottom-style:solid]">
                          <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                              義務項目
                            </div>
                          </div>
                        </div>

                        <div className="flex h-[72px] items-center px-6 py-4 relative self-stretch w-full z-0 border-b [border-bottom-style:solid] border-[#2a4540]">
                          <div className="relative w-fit font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#dbece6] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] whitespace-nowrap [font-style:var(--text-sm-regular-font-style)]">
                            設置 10% 綠能義務容量
                          </div>
                        </div>
                      </div>

                      <div className="flex-1 grow flex flex-col items-start relative">
                        <div className="flex h-11 items-center gap-3 px-6 py-3 relative self-stretch w-full z-[1] bg-[#263b37] border-b [border-bottom-style:solid]">
                          <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] font-text-xs-semibold font-[number:var(--text-xs-semibold-font-weight)] text-[#8bbdaf] text-[length:var(--text-xs-semibold-font-size)] tracking-[var(--text-xs-semibold-letter-spacing)] leading-[var(--text-xs-semibold-line-height)] whitespace-nowrap [font-style:var(--text-xs-semibold-font-style)]">
                              潛在代價
                            </div>
                          </div>
                        </div>

                        <div className="flex h-[72px] items-center px-6 py-4 relative self-stretch w-full z-0 border-b [border-bottom-style:solid] border-[#2a4540]">
                          <p className="relative flex-1 mt-[-1.00px] [font-family:'manrope-Regular',Helvetica] font-normal text-[#dbece6] text-sm tracking-[0] leading-5">
                            繳納代金：若以每度電 4 元計算, 5000 KW
                            用電大戶每年需繳納約 新台幣5 百萬以上。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            <aside className="flex w-[546px] items-start gap-12 p-6 relative self-stretch mt-[-1.00px] mb-[-1.00px] mr-[-1.00px] bg-[#30554e38] rounded-3xl border-[none] backdrop-blur-[35px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(35px)_brightness(100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-3xl before:[background:linear-gradient(242deg,rgba(23,178,106,1)_0%,rgba(38,59,55,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
              <div className="flex flex-1 self-stretch grow flex-col items-start gap-3 relative">
                <div className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col gap-6 flex-1 grow items-start relative">
                    <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                      <h2 className="relative self-stretch mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
                        用電大戶年度電費試算器
                      </h2>

                      <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-bold text-[#b7d8cd] text-xl tracking-[0] leading-[30px]">
                        快速試算容量費用，協助規劃最佳儲能策略
                      </p>
                    </div>

                    <div className="flex-col items-start gap-1.5 flex relative self-stretch w-full flex-[0_0_auto]">
                      <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                        <label
                          htmlFor="contract-capacity"
                          className="inline-flex items-start gap-0.5 relative flex-[0_0_auto]"
                        >
                          <span className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#cecfd2] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                            契約容量 (kW)
                          </span>

                          <span className="relative w-fit mt-[-1.00px] font-text-sm-medium font-[number:var(--text-sm-medium-font-weight)] text-[#808790] text-[length:var(--text-sm-medium-font-size)] tracking-[var(--text-sm-medium-letter-spacing)] leading-[var(--text-sm-medium-line-height)] whitespace-nowrap [font-style:var(--text-sm-medium-font-style)]">
                            *
                          </span>
                        </label>

                        <div className="items-center gap-2 px-3.5 py-2.5 bg-[#15352e] rounded-lg border border-solid border-[#30554e] shadow-shadows-shadow-xs flex relative self-stretch w-full flex-[0_0_auto]">
                          <div className="flex items-center gap-2 relative flex-1 grow">
                            <input
                              id="contract-capacity"
                              type="text"
                              value={contractCapacity}
                              onChange={handleCapacityChange}
                              placeholder="eg., 6000"
                              className="relative flex-1 mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#f5f6f6] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)] bg-transparent border-none outline-none placeholder:text-[#498376]"
                              aria-label="輸入契約容量"
                              aria-required="true"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start justify-between relative flex-1 self-stretch w-full grow">
                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative self-stretch mt-[-1.00px] [font-family:'Manrope',Helvetica] font-bold text-[#b7d8cd] text-xl tracking-[0] leading-[30px]">
                      年費 台幣
                    </div>

                    <div
                      className="relative self-stretch font-display-lg-bold font-[number:var(--display-lg-bold-font-weight)] text-[#17b169] text-[length:var(--display-lg-bold-font-size)] tracking-[var(--display-lg-bold-letter-spacing)] leading-[var(--display-lg-bold-line-height)] [font-style:var(--display-lg-bold-font-style)]"
                      aria-live="polite"
                    >
                      {annualFee}
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                    <p className="relative self-stretch mt-[-1.00px] font-text-sm-regular font-[number:var(--text-sm-regular-font-weight)] text-[#b7d8cd] text-[length:var(--text-sm-regular-font-size)] tracking-[var(--text-sm-regular-letter-spacing)] leading-[var(--text-sm-regular-line-height)] [font-style:var(--text-sm-regular-font-style)]">
                      {displayCapacity} kW × 10% × 2500 × NT$4
                    </p>

                    <div className="h-24 gap-3.5 flex flex-col items-start">
                      <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-normal text-[#b7d8cd] text-sm tracking-[0] leading-[8px]">
                        <span className="[font-family:'Manrope',Helvetica] font-normal text-[#b7d8cd] text-sm tracking-[0] leading-[8px]">
                          此公式計算未達台灣再生能源要求的用電大戶年度罰款
                        </span>
                      </p>

                      <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-normal text-[#b7d8cd] text-sm tracking-[0] leading-[8px]">
                        <span className="[font-family:'Manrope',Helvetica] font-normal text-[#b7d8cd] text-sm tracking-[0] leading-[8px]">
                          • 契約容量 (kW) ：您的契約用電容量
                        </span>
                      </p>

                      <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-normal text-[#b7d8cd] text-sm tracking-[0] leading-[8px]">
                        <span className="[font-family:'Manrope',Helvetica] font-normal text-[#b7d8cd] text-sm tracking-[0] leading-[8px]">
                          • 10%：再生能源或儲能系統所需的最低容量
                        </span>
                      </p>

                      <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-normal text-[#b7d8cd] text-sm tracking-[0] leading-[8px]">
                        <span className="[font-family:'Manrope',Helvetica] font-normal text-[#b7d8cd] text-sm tracking-[0] leading-[8px]">
                          • 2,500 小時：用於罰款計算的標準年度運作時數
                        </span>
                      </p>

                      <p className="relative self-stretch [font-family:'Manrope',Helvetica] font-normal text-[#b7d8cd] text-sm tracking-[0] leading-[8px]">
                        <span className="[font-family:'Manrope',Helvetica] font-normal text-[#b7d8cd] text-sm tracking-[0] leading-[8px]">
                          • NT$4：每千瓦時 (kWh) 短缺的罰款費率
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="inline-flex justify-center px-8 py-0 flex-[0_0_auto] flex-col items-start gap-3 relative">
            <div className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col gap-3 flex-1 grow items-start relative">
                <h2 className="relative self-stretch mt-[-1.00px] font-display-sm-semibold font-[number:var(--display-sm-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-sm-semibold-font-size)] tracking-[var(--display-sm-semibold-letter-spacing)] leading-[var(--display-sm-semibold-line-height)] [font-style:var(--display-sm-semibold-font-style)]">
                  三大解方, 輕鬆達標
                </h2>
              </div>
            </div>

            <div className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative flex-1 mt-[-1.00px] [font-family:'Manrope',Helvetica] font-normal text-[#dbece6] text-sm tracking-[0] leading-5">
                我們助您將義務轉為資產! 用電大戶可從以下三種方式擇一或搭配執行,
                以履行 10%的綠能義務裝置容量
              </p>
            </div>

            <div className="flex items-center gap-5 pt-10 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col max-w-screen-xl items-center justify-center gap-16 px-8 py-0 relative flex-1 grow">
                <div className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
                  {solutionCards.map((card, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center gap-4 relative flex-1 grow"
                    >
                      <div className="relative w-12 h-12 bg-[#2a4540] rounded-full overflow-hidden">
                        <img
                          className="absolute top-3 left-3 w-6 h-6"
                          alt={card.iconAlt}
                          src={card.icon}
                        />
                      </div>

                      <div className="flex flex-col items-center gap-1 relative self-stretch w-full flex-[0_0_auto]">
                        <h3 className="relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-lg-semibold-font-size)] text-center tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
                          {card.title}
                        </h3>

                        <p className="relative self-stretch font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#cecfd2] text-[length:var(--text-md-regular-font-size)] text-center tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
