import dynamic from "next/dynamic";

// WebGL only runs in the browser, so the aurora is never server-rendered
const Aurora = dynamic(() => import("../reactbits/Aurora"), { ssr: false });

// Brand purples, matching the name gradient
const COLOR_STOPS = ["#5B2BFF", "#B14BE8", "#7C3EFF"];

export const HeroBackground = () => {
  return (
    <div className="hero-aurora pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] md:h-[700px]">
      <Aurora
        colorStops={COLOR_STOPS}
        amplitude={1.1}
        blend={0.6}
        speed={0.6}
      />
    </div>
  );
};
