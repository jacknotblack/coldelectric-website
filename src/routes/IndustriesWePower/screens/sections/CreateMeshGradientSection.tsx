import React from "react";

export const CreateMeshGradientSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-16 px-0 py-40 relative self-stretch w-full flex-[0_0_auto] z-[1] bg-[#12211f]">
      <div className="flex flex-col max-w-screen-xl items-start gap-8 px-8 py-0 relative w-full flex-[0_0_auto]">
        <div className="flex flex-col items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start gap-8 self-stretch w-full relative flex-[0_0_auto]">
              <img
                className="relative w-[149.63px] h-[43px]"
                alt="Color light green"
                src="https://c.animaapp.com/mhbjm0sl3taf8Z/img/colorlightgreen.png"
              />

              <h2 className="relative self-stretch font-display-lg-semibold font-[number:var(--display-lg-semibold-font-weight)] text-[#dbece6] text-[length:var(--display-lg-semibold-font-size)] tracking-[var(--display-lg-semibold-letter-spacing)] leading-[var(--display-lg-semibold-line-height)] [font-style:var(--display-lg-semibold-font-style)]">
                加入數百個組織，與 長庚國際能源 一起轉型能源。
              </h2>
            </div>

            <div className="flex items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <button
                type="button"
                className="gap-1.5 px-[18px] py-3 bg-teal-950 border border-solid border-[#30554e] inline-flex items-center justify-center relative flex-[0_0_auto] rounded-xl overflow-hidden shadow-shadows-shadow-xs-skeuomorphic cursor-pointer hover:bg-[#1a3a36] transition-colors"
                aria-label="聯繫我們"
              >
                <img
                  className="relative w-5 h-5"
                  alt=""
                  src="https://c.animaapp.com/mhbjm0sl3taf8Z/img/edit-03.svg"
                  aria-hidden="true"
                />

                <span className="inline-flex items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#cecfd2] text-[length:var(--text-md-semibold-font-size)] tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] whitespace-nowrap [font-style:var(--text-md-semibold-font-style)]">
                    聯繫我們
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
