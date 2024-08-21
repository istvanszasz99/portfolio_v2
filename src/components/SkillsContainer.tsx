import { FunctionComponent, memo } from "react";

export type SkillsContainerType = {
  className?: string;
};

const SkillsContainer: FunctionComponent<SkillsContainerType> = memo(
  ({ className = "" }) => {
    return (
      <div
        className={`w-[908px] rounded-3xs bg-black-blue flex flex-col items-center justify-start pt-5 px-5 pb-12 box-border gap-5 max-w-full text-center text-13xl text-white font-dm-sans ${className}`}
      >
        <div className="flex flex-row items-center justify-center">
          <h1 className="m-0 relative text-inherit font-bold font-[inherit] inline-block min-w-[81px] mq450:text-lgi mq750:text-7xl">
            Skills
          </h1>
        </div>
        <div className="self-stretch overflow-hidden flex flex-row flex-wrap items-center justify-center gap-x-[34px] gap-y-[33.6px] min-h-[130px] mq675:gap-[17px]">
          <img
            className="h-12 w-12 relative object-cover"
            loading="lazy"
            alt=""
            src="/logo_html.png"
          />
          <img
            className="h-12 w-12 relative object-cover"
            loading="lazy"
            alt=""
            src="/logo_css.png"
          />
          <img
            className="h-12 w-12 relative object-cover"
            loading="lazy"
            alt=""
            src="/logo_JS.png"
          />
          <img
            className="h-12 w-12 relative object-cover"
            loading="lazy"
            alt=""
            src="/logo_TS.png"
          />
          <img
            className="h-12 w-12 relative object-cover"
            loading="lazy"
            alt=""
            src="/logo_node.png"
          />
          <img
            className="h-12 w-12 relative object-cover"
            loading="lazy"
            alt=""
            src="/logo_react.png"
          />
          <img
            className="h-12 w-12 relative object-cover"
            loading="lazy"
            alt=""
            src="/logo_angular.png"
          />
          <img
            className="h-12 w-12 relative object-cover"
            alt=""
            src="/logo_nextjs.png"
          />
          <img
            className="h-12 w-12 relative object-cover"
            alt=""
            src="/logo_vite.png"
          />
          <img
            className="h-12 w-12 relative object-cover"
            alt=""
            src="/logo_tailwind.png"
          />
          <img
            className="h-12 w-12 relative object-cover"
            alt=""
            src="/logo_figma.png"
          />
          <img
            className="h-12 w-12 relative object-cover"
            alt=""
            src="/logo_git.png"
          />
          <img
            className="h-12 w-12 relative object-cover"
            alt=""
            src="/logo_graphql.png"
          />
          <img
            className="h-12 w-12 relative object-cover"
            alt=""
            src="/logo_API.png"
          />
          <img
            className="h-12 w-12 relative object-cover"
            alt=""
            src="/logo_jest.png"
          />
          <img
            className="h-12 w-12 relative object-cover"
            alt=""
            src="/logo_ue.png"
          />
          <img
            className="h-12 w-12 relative object-cover"
            alt=""
            src="/logo_twinmotion.png"
          />
          <img
            className="h-12 w-12 relative object-cover"
            alt=""
            src="/logo_C++.png"
          />
          <img
            className="h-12 w-12 relative object-cover"
            alt=""
            src="/logo_unity.png"
          />
          <img
            className="h-12 w-12 relative object-cover"
            alt=""
            src="/logo_CSharp.png"
          />
        </div>
      </div>
    );
  }
);

export default SkillsContainer;
