// import React from "react";

// export const MainContentSection = (): JSX.Element => {
//   return (
//     <section className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto] z-[5]">
//       <div className="flex-col items-center gap-16 pt-24 pb-0 px-0 flex relative self-stretch w-full flex-[0_0_auto]">
//         <div className="flex-col max-w-screen-xl items-start gap-8 flex px-8 py-0 relative w-full flex-[0_0_auto]">
//           <div className="flex flex-col items-start gap-12 relative self-stretch w-full flex-[0_0_auto]">
//             <div className="flex items-center justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]">
//               <h1 className="flex-1 mt-[-1.00px] text-[#f5f6f6] text-6xl tracking-[-1.20px] leading-[72px] relative [font-family:'Manrope',Helvetica] font-semibold">
//                 長庚國際能源：打造更智慧、更安全、更永續的能源未來
//               </h1>
//               <p className="w-[640px] text-[#dbece6] text-xl leading-[30px] relative [font-family:'Manrope',Helvetica] font-normal tracking-[0]">
//                 長庚國際能源致力於推動全球能源轉型，透過創新的電池技術、智慧能源管理系統與微電網解決方案，為家庭、企業及社區提供安全、高效且可持續的能源服務。
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React from "react";

const aboutUsContent = {
  title: "關於我們",
  paragraphs: [
    "歡迎來到長庚國際能源。我們的使命是透過能源創新, 打造去中心化、高韌性、永續的能源未來。",
    "我們正在為明日的能源建設基礎設施, 服務範圍涵蓋微電網、家庭用電乃至資料中心。",
    "我們提供具備韌性、可擴展性及智慧化的能源系統, 提供客戶從概念發想到實際營運的完整解決方案。",
  ],
};

const brandStoryContent = {
  title: "品牌故事與里程碑",
  paragraphs: [
    "長庚國際能源成立於民國94年 (2005年) , 創辦人王貴貞女士致力於完成王永慶董事長之願望, 長期進行電池技術的研發與發展。",
    "我們的使命是釋放分散式能源的全部潛力, 並已實現全國產化電芯量產的能力。",
    "基於對能源公平性和韌性的深刻體悟, 我們建立了一個強大硬體與智能軟體相結合的平台, 旨在服務家庭、工廠和整個城市。我們將全力推動儲能與綠色能源結合, 協助解決全球氣候變遷和能源危機。",
  ],
};

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-16 px-0 py-24 relative">
      <div className="flex flex-col max-w-screen-xl items-start gap-24 px-8 py-0 relative w-full flex-[0_0_auto]">
        <article className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <header className="flex flex-col min-w-[480px] max-w-screen-md items-start gap-10 relative w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
              {aboutUsContent.title}
            </h1>
          </header>

          <div className="flex flex-col items-start pt-3 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="h-[94px] flex flex-col items-start gap-5">
              {aboutUsContent.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="relative self-stretch [font-family:'Manrope-Regular',Helvetica] font-normal text-[#b7d8cd] text-xl tracking-[0] leading-[18px]"
                >
                  <span className="[font-family:'Manrope-Regular',Helvetica] font-normal text-[#b7d8cd] text-xl tracking-[0] leading-[18px]">
                    {paragraph}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </article>

        <article className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
          <header className="flex flex-col min-w-[480px] max-w-screen-md items-start gap-10 relative w-full flex-[0_0_auto]">
            <h2 className="relative self-stretch mt-[-1.00px] font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
              {brandStoryContent.title}
            </h2>
          </header>

          <div className="flex flex-col items-start pt-3 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="h-40 flex flex-col items-start gap-5">
              {brandStoryContent.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="relative self-stretch [font-family:'Manrope-Regular',Helvetica] font-normal text-[#b7d8cd] text-xl tracking-[0] leading-[30px]"
                >
                  <span className="[font-family:'Manrope-Regular',Helvetica] font-normal text-[#b7d8cd] text-xl tracking-[0] leading-[30px]">
                    {paragraph}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
