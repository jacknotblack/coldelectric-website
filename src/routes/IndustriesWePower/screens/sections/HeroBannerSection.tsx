import React from "react";

export const HeroBannerSection = (): JSX.Element => {
  const navigationItems = [
    { label: "解決方案", hasDropdown: true },
    { label: "產品服務", hasDropdown: true },
    { label: "賦能產業", hasDropdown: true },
    { label: "資源中心", hasDropdown: true },
    { label: "品牌故事", hasDropdown: false },
  ];

  return (
    <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] z-[7]">
      <div className="relative self-stretch w-full h-20 z-[1]">
        <header className="flex flex-col w-full h-20 items-center justify-center relative bg-transparent">
          <nav className="items-center gap-4 flex-[0_0_auto] flex max-w-screen-xl px-8 py-0 relative w-full">
            <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto] rounded-lg">
              <img
                className="relative w-[99.74px] h-[15.91px]"
                alt="Text"
                src="https://c.animaapp.com/mhbjm0sl3taf8Z/img/text.png"
              />

              <img
                className="absolute -top-2 left-[3px] w-[51px] h-1.5"
                alt="Element"
                src="https://c.animaapp.com/mhbjm0sl3taf8Z/img/-294c60ff.png"
              />
            </div>

            <div className="flex items-center gap-5 relative flex-1 grow">
              <ul className="inline-flex items-center gap-0.5 relative flex-[0_0_auto]">
                {navigationItems.map((item, index) => (
                  <li
                    key={index}
                    className="inline-flex items-center justify-center gap-0.5 px-1.5 py-1 relative flex-[0_0_auto] rounded-lg overflow-hidden"
                  >
                    <button className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                      <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                        {item.label}
                      </span>
                    </button>

                    {item.hasDropdown && (
                      <img
                        className="relative w-4 h-4"
                        alt="Chevron down"
                        src="https://c.animaapp.com/mhbjm0sl3taf8Z/img/chevron-down.svg"
                      />
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="inline-flex items-center gap-3 relative flex-[0_0_auto]">
              <button className="gap-1 px-3.5 py-2.5 bg-[#263b37] border border-solid border-[#30554e] inline-flex items-center justify-center relative flex-[0_0_auto] rounded-xl overflow-hidden shadow-shadows-shadow-xs-skeuomorphic">
                <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-[#cecfd2] text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-semibold-font-style)]">
                    繁體中文
                  </span>
                </span>

                <img
                  className="relative w-5 h-5"
                  alt="Chevron selector"
                  src="https://c.animaapp.com/mhbjm0sl3taf8Z/img/chevron-selector-vertical.svg"
                />
              </button>

              <button className="gap-1 px-3.5 py-2.5 bg-[#85b378] border-[none] inline-flex items-center justify-center relative flex-[0_0_auto] rounded-xl overflow-hidden shadow-shadows-shadow-xs-skeuomorphic before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-white text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-semibold-font-style)]">
                    聯繫我們
                  </span>
                </span>
              </button>
            </div>
          </nav>
        </header>
      </div>

      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] z-0">
        <section className="flex-col items-center gap-12 pt-24 pb-0 px-0 flex relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex-col items-center gap-8 flex-[0_0_auto] flex max-w-screen-xl px-8 py-0 relative w-full">
            <div className="flex items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex flex-col items-start gap-6 relative flex-1 grow">
                <h1 className="text-transparent text-[length:var(--display-xl-semibold-font-size)] tracking-[var(--display-xl-semibold-letter-spacing)] leading-[var(--display-xl-semibold-line-height)] relative self-stretch mt-[-1.00px] font-display-xl-semibold font-[number:var(--display-xl-semibold-font-weight)] [font-style:var(--display-xl-semibold-font-style)]">
                  <span className="text-[#47cd89] tracking-[var(--display-xl-semibold-letter-spacing)] font-display-xl-semibold [font-style:var(--display-xl-semibold-font-style)] font-[number:var(--display-xl-semibold-font-weight)] leading-[var(--display-xl-semibold-line-height)] text-[length:var(--display-xl-semibold-font-size)]">
                    更智能的能源，
                  </span>

                  <span className="text-[#f5f6f6] tracking-[var(--display-xl-semibold-letter-spacing)] font-display-xl-semibold [font-style:var(--display-xl-semibold-font-style)] font-[number:var(--display-xl-semibold-font-weight)] leading-[var(--display-xl-semibold-line-height)] text-[length:var(--display-xl-semibold-font-size)]">
                    無縫分配，為您設計。
                  </span>
                </h1>

                <p className="w-[768px] font-text-xl-regular text-[#dbece6] relative font-[number:var(--text-xl-regular-font-weight)] text-[length:var(--text-xl-regular-font-size)] tracking-[var(--text-xl-regular-letter-spacing)] leading-[var(--text-xl-regular-line-height)] [font-style:var(--text-xl-regular-font-style)]">
                  長庚國際能源：提供智慧、彈性的能源系統，適用於從家庭到重型工業的一切，由
                  AI 驅動，並為實際場景的效能而設計。
                </p>
              </div>
            </div>
          </div>

          <img
            className="relative self-stretch w-full h-[836px] object-cover"
            alt="Product pics"
            src="https://c.animaapp.com/mhbjm0sl3taf8Z/img/product-pics-0221.png"
          />
        </section>
      </div>
    </div>
  );
};
