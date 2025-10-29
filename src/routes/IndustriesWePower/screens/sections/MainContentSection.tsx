import React from "react";

interface ListItemProps {
  text: string;
}

const CheckListItem: React.FC<ListItemProps> = ({ text }) => {
  return (
    <div className="flex w-full min-w-80 max-w-[560px] items-start gap-4 relative flex-[0_0_auto]">
      <div className="inline-flex flex-col items-start pt-0.5 pb-0 px-0 relative flex-[0_0_auto]">
        <img
          className="relative w-6 h-6"
          alt="Check circle"
          src="https://c.animaapp.com/mhbjm0sl3taf8Z/img/check-circle.svg"
        />
      </div>
      <div className="flex flex-col items-start gap-4 relative flex-1 grow">
        <div className="flex flex-col items-start gap-1 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckListItemWide: React.FC<ListItemProps> = ({ text }) => {
  return (
    <div className="inline-flex min-w-80 max-w-[560px] items-start gap-4 relative flex-[0_0_auto]">
      <div className="inline-flex flex-col items-start pt-0.5 pb-0 px-0 relative flex-[0_0_auto]">
        <img
          className="relative w-6 h-6"
          alt="Check circle"
          src="https://c.animaapp.com/mhbjm0sl3taf8Z/img/check-circle.svg"
        />
      </div>
      <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
        <div className="flex flex-col w-[520px] items-start gap-1 relative flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] font-text-lg-semibold font-[number:var(--text-lg-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--text-lg-semibold-font-size)] tracking-[var(--text-lg-semibold-letter-spacing)] leading-[var(--text-lg-semibold-line-height)] [font-style:var(--text-lg-semibold-font-style)]">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

export const MainContentSection = (): JSX.Element => {
  const services = [
    "在用電尖峰時段執行負載轉移",
    "結合太陽能與電池，降低對電網的依賴",
    "透過 VPP SaaS 整合，實現動態電價",
    "能源管理系統優化空調、照明及電動車充電",
  ];

  const idealCustomers = [
    "辦公大樓、數據中心、複合式建築",
    "設有屋頂太陽能板的購物中心",
    "設有電動車充電站的飯店或園區",
  ];

  return (
    <section className="z-[3] flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] bg-[#263b37]">
      <div className="flex-col items-center gap-16 pt-40 pb-24 px-0 bg-[linear-gradient(180deg,rgba(18,33,31,1)_0%,rgba(19,22,27,1)_100%)] flex relative self-stretch w-full flex-[0_0_auto]">
        <div className="h-[516px] items-start gap-16 flex max-w-screen-xl px-8 py-0 relative w-full">
          <div className="flex flex-col items-start gap-3 relative flex-1 self-stretch grow">
            <div className="gap-6 flex-1 grow flex flex-col items-start relative self-stretch w-full">
              <div className="flex items-center gap-16 relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col min-w-80 items-start gap-6 relative flex-1 grow">
                  <header className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                    <h1 className="relative self-stretch mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
                      商業建築
                    </h1>
                    <p className="relative self-stretch font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] text-[#cecfd2] text-[length:var(--text-xl-regular-font-size)] tracking-[var(--text-xl-regular-letter-spacing)] leading-[var(--text-xl-regular-line-height)] [font-style:var(--text-xl-regular-font-style)]">
                      提供業務營運所需的能源效能。
                    </p>
                  </header>
                </div>
              </div>

              <div className="flex flex-col items-start gap-12 relative self-stretch w-full flex-[0_0_auto] mb-[-12.00px]">
                <article className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <h2 className="font-text-md-semibold text-[#47cd89] relative self-stretch mt-[-1.00px] font-[number:var(--text-md-semibold-font-weight)] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                    我們的服務內容
                  </h2>
                  {services.map((service, index) => (
                    <CheckListItem key={index} text={service} />
                  ))}
                </article>

                <article className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <h2 className="font-text-md-semibold text-[#47cd89] relative self-stretch mt-[-1.00px] font-[number:var(--text-md-semibold-font-weight)] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
                    理想客戶
                  </h2>
                  {idealCustomers.map((customer, index) => (
                    <CheckListItemWide key={index} text={customer} />
                  ))}
                </article>
              </div>
            </div>
          </div>

          <img
            className="absolute top-[41px] left-[563px] w-[797px] h-[571px] rounded-[24px_0px_0px_0px] object-cover"
            alt="Screen mockup"
            src="https://c.animaapp.com/mhbjm0sl3taf8Z/img/screen-mockup--replace-fill--1.png"
          />
        </div>
      </div>
    </section>
  );
};
