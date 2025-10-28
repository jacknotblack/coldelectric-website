import React from "react";

export const ContainerSubsection = (): JSX.Element => {
  return (
    <section className="flex flex-col max-w-screen-xl items-start gap-8 px-8 py-0 relative w-full flex-[0_0_auto]">
      <div className="flex flex-col items-center gap-8 relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex max-w-screen-md items-center gap-5 w-full flex-col relative flex-[0_0_auto]">
          <header className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] font-text-md-semibold font-[number:var(--text-md-semibold-font-weight)] text-[#47cd89] text-[length:var(--text-md-semibold-font-size)] text-center tracking-[var(--text-md-semibold-letter-spacing)] leading-[var(--text-md-semibold-line-height)] [font-style:var(--text-md-semibold-font-style)]">
              產品
            </p>

            <h2 className="relative self-stretch font-display-md-semibold font-[number:var(--display-md-semibold-font-weight)] text-[#f5f6f6] text-[length:var(--display-md-semibold-font-size)] text-center tracking-[var(--display-md-semibold-letter-spacing)] leading-[var(--display-md-semibold-line-height)] [font-style:var(--display-md-semibold-font-style)]">
              為每一種能源需求而設計
            </h2>
          </header>

          <p className="text-[#808790] text-[length:var(--text-xl-regular-font-size)] text-center leading-[var(--text-xl-regular-line-height)] relative self-stretch font-text-xl-regular font-[number:var(--text-xl-regular-font-weight)] tracking-[var(--text-xl-regular-letter-spacing)] [font-style:var(--text-xl-regular-font-style)]">
            探索我們靈活且以安全為首的電池解決方案——專為家庭、商業及電網規模應用而設計。
          </p>
        </div>
      </div>
    </section>
  );
};
