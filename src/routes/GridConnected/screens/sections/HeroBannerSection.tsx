import React from "react";

interface NavItem {
  label: string;
  hasDropdown: boolean;
}

export const HeroBannerSection = (): JSX.Element => {
  const navItems: NavItem[] = [
    { label: "解決方案", hasDropdown: true },
    { label: "產品服務", hasDropdown: true },
    { label: "賦能產業", hasDropdown: true },
    { label: "資源中心", hasDropdown: true },
    { label: "品牌故事", hasDropdown: false },
  ];

  return (
    <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] z-[5]">
      <div className="relative self-stretch w-full h-20 z-[1]">
        <header className="h-20 items-center justify-center bg-transparent flex flex-col w-full relative">
          <nav
            className="flex max-w-screen-xl items-center gap-4 px-8 py-0 relative w-full flex-[0_0_auto]"
            role="navigation"
            aria-label="主導航"
          >
            <a
              href="/"
              className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto] rounded-lg"
              aria-label="首頁"
            >
              <img
                className="relative w-[99.74px] h-[15.91px]"
                alt="公司標誌"
                src="https://c.animaapp.com/mhbgaqp12GzVxu/img/text.png"
              />
              <img
                className="-top-2 w-[51px] h-1.5 absolute left-[3px]"
                alt=""
                src="https://c.animaapp.com/mhbgaqp12GzVxu/img/-294c60ff.png"
              />
            </a>

            <div className="flex items-center gap-5 relative flex-1 grow">
              <ul className="gap-0.5 inline-flex items-center relative flex-[0_0_auto]">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <button
                      className="inline-flex items-center justify-center gap-0.5 px-1.5 py-1 relative flex-[0_0_auto] rounded-lg overflow-hidden hover:bg-[#263b37] transition-colors"
                      aria-haspopup={item.hasDropdown}
                      aria-expanded="false"
                    >
                      <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                        <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                          {item.label}
                        </span>
                      </span>
                      {item.hasDropdown && (
                        <img
                          className="relative w-4 h-4"
                          alt=""
                          src="https://c.animaapp.com/mhbgaqp12GzVxu/img/chevron-down.svg"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="gap-3 inline-flex items-center relative flex-[0_0_auto]">
              <button
                className="gap-1 px-3.5 py-2.5 bg-[#263b37] border border-solid border-[#30554e] inline-flex items-center justify-center relative flex-[0_0_auto] rounded-xl overflow-hidden shadow-shadows-shadow-xs-skeuomorphic hover:bg-[#30554e] transition-colors"
                aria-label="選擇語言"
              >
                <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-[#cecfd2] text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-semibold-font-style)]">
                    繁體中文
                  </span>
                </span>
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="https://c.animaapp.com/mhbgaqp12GzVxu/img/chevron-selector-vertical.svg"
                  aria-hidden="true"
                />
              </button>

              <a
                href="/contact"
                className="gap-1 px-3.5 py-2.5 bg-[#85b378] border-[none] inline-flex items-center justify-center relative flex-[0_0_auto] rounded-xl overflow-hidden shadow-shadows-shadow-xs-skeuomorphic before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-xl before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-[#76a369] transition-colors"
              >
                <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-white text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] whitespace-nowrap [font-style:var(--text-sm-semibold-font-style)]">
                    聯繫我們
                  </span>
                </span>
              </a>
            </div>
          </nav>
        </header>
      </div>

      <main className="items-start self-stretch flex-[0_0_auto] z-0 flex flex-col w-full relative">
        <section className="flex-col items-center pt-20 pb-24 px-0 self-stretch w-full flex relative flex-[0_0_auto]">
          <div className="flex flex-col max-w-screen-xl items-center gap-8 px-8 py-0 relative w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-3 relative flex-1 grow">
                  <h2 className="relative self-stretch mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
                    電力交易市場
                  </h2>

                  <h1 className="relative self-stretch [font-family:'Manrope',Helvetica] font-semibold text-[#f5f6f6] text-5xl tracking-[-0.96px] leading-[60px]">
                    開啟儲能系統的穩定收益之道
                  </h1>
                </div>
              </div>

              <div className="flex flex-col items-start gap-8 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative flex items-center justify-center w-[768px] mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#dbece6] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                    台灣電力交易平台 (T-PEX)
                    是台電根據《電業法》設立的輔助服務與備用容量交易機
                    制。它旨在透過競價整合發電機組、儲能設備等分散式電源,
                    確保電網穩定運行、提高供電品質, 並加速事故後的供電恢復。
                  </p>
                </div>

                <div className="flex items-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
                  <p className="relative flex items-center justify-center w-[768px] mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#dbece6] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] [font-style:var(--text-md-regular-font-style)]">
                    您的儲能系統 (ESS) 不僅是備援,
                    更是獲利工具。本平台透過活絡市場機制,
                    鼓勵民間投資參與輔助服務及備用容量交易,
                    為您的併網型儲能系統創造長期、穩定的營收來源。
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative flex-1 grow h-[660px] rounded-3xl object-cover"
                alt="電力交易市場儲能系統示意圖"
                src="https://c.animaapp.com/mhbgaqp12GzVxu/img/sub.png"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
