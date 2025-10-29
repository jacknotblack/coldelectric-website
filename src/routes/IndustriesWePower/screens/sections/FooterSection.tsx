import React from "react";

interface FooterLink {
  text: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export const FooterSection = (): JSX.Element => {
  const footerColumns: FooterColumn[] = [
    {
      title: "解決方案",
      links: [
        { text: "光儲專區" },
        { text: "輸配電併網型儲能" },
        { text: "用電大戶專區, 微電網" },
      ],
    },
    {
      title: "賦能產業",
      links: [
        { text: "住宅與公寓" },
        { text: "商業建築" },
        { text: "工業與工廠" },
      ],
    },
    {
      title: "產品服務",
      links: [
        { text: "Cold SUB" },
        { text: "Cold ZERO" },
        { text: "Cold OG" },
        { text: "Cold OG2" },
      ],
    },
    {
      title: "公司",
      links: [
        { text: "關於我們" },
        { text: "新聞" },
        { text: "聯繫我們" },
        { text: "LinkedIn" },
      ],
    },
  ];

  return (
    <footer className="flex flex-col w-[1440px] items-center gap-16 pt-16 pb-12 px-0 relative flex-[0_0_auto] z-0 bg-[#12211f]">
      <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-12 relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex gap-4 flex-col max-w-screen-md items-center relative flex-[0_0_auto]">
            <h2 className="text-[#f5f6f6] text-[length:var(--display-sm-semibold-font-size)] text-center tracking-[var(--display-sm-semibold-letter-spacing)] leading-[var(--display-sm-semibold-line-height)] relative self-stretch mt-[-1.00px] font-display-sm-semibold font-[number:var(--display-sm-semibold-font-weight)] [font-style:var(--display-sm-semibold-font-style)]">
              共築能源的嶄新未來
            </h2>

            <p className="w-fit font-text-xl-regular text-[#b7d8cd] text-center whitespace-nowrap relative font-[number:var(--text-xl-regular-font-weight)] text-[length:var(--text-xl-regular-font-size)] tracking-[var(--text-xl-regular-letter-spacing)] leading-[var(--text-xl-regular-line-height)] [font-style:var(--text-xl-regular-font-style)]">
              攜手長庚國際能源，啟動智慧、堅韌的能源新紀元。
            </p>
          </div>
        </div>
      </div>

      <nav
        className="flex-col items-start gap-12 flex-[0_0_auto] flex max-w-screen-xl px-8 py-0 relative w-full"
        aria-label="Footer navigation"
      >
        <div className="flex flex-wrap items-start gap-[32px_32px] relative self-stretch w-full flex-[0_0_auto]">
          {footerColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="flex flex-col min-w-24 items-start gap-4 pl-0 pr-6 py-0 relative flex-1 grow"
            >
              <h3 className="text-[#b7d8cd] text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)] relative self-stretch mt-[-1.00px] font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] [font-style:var(--text-sm-semibold-font-style)]">
                {column.title}
              </h3>

              <ul className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                {column.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="inline-flex items-center gap-2 relative flex-[0_0_auto]"
                  >
                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]"
                    >
                      <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#b7d8cd] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                        {link.text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>

      <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex flex-wrap items-center justify-between gap-[24px_32px] pt-8 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] border-t [border-top-style:solid] border-[#2a4540]">
          <div className="inline-flex flex-col items-start justify-center gap-1 relative flex-[0_0_auto] rounded-lg">
            <img
              className="relative w-[99.74px] h-[15.91px]"
              alt="Cold Electric logo"
              src="https://c.animaapp.com/mhbjm0sl3taf8Z/img/text-1.png"
            />

            <img
              className="absolute top-[-11px] left-[3px] w-[76px] h-[9px]"
              alt=""
              src="https://c.animaapp.com/mhbjm0sl3taf8Z/img/-294c60ff-1.png"
            />
          </div>

          <div className="inline-flex items-center gap-8 relative flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] font-text-md-regular font-[number:var(--text-md-regular-font-weight)] text-[#b7d8cd] text-[length:var(--text-md-regular-font-size)] tracking-[var(--text-md-regular-letter-spacing)] leading-[var(--text-md-regular-line-height)] whitespace-nowrap [font-style:var(--text-md-regular-font-style)]">
              © 2025 Cold Electric。版權所有。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
