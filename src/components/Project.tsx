import { FunctionComponent, memo, useMemo, type CSSProperties, useCallback} from "react";

export type ProjectType = {
  className?: string;
  bg_sky?: string;
  bg_image?: string;
  card_name?: string;
  card_category?: string;
  card_description?: string;
  logo_num1?: string;
  logo_num2?: string;
  logo_num3?: string;
  logo_num4?: string;
  logo_num5?: string;

  /** Style props */
  propMixBlendMode?: CSSProperties["mixBlendMode"];

  /** Action props */
  onDownladResumeButtonClick?: () => void;
};

const Project: FunctionComponent<ProjectType> = memo(
  ({
    className = "",
    onDownladResumeButtonClick,
    bg_sky,
    propMixBlendMode,
    bg_image,
    card_name,
    card_category,
    card_description,
    logo_num1,
    logo_num2,
    logo_num3,
    logo_num4,
    logo_num5,
  }) => {

    const bg_skyIconStyle: CSSProperties = useMemo(() => {
      return {
        mixBlendMode: propMixBlendMode,
      };
    }, [propMixBlendMode]);

    return (
      <div
        className={`w-[465px] rounded-xl bg-black-blue overflow-hidden shrink-0 flex flex-col items-center justify-start gap-5 min-w-[442px] max-w-full cursor-pointer text-left text-base text-white font-dm-sans mq675:min-w-full ${className}`}
        onClick={onDownladResumeButtonClick}
      >
        <div className="self-stretch h-[275px] [background:linear-gradient(107.56deg,_#00a398,_#01c9bc)] overflow-hidden shrink-0 flex flex-col items-center justify-start relative gap-2.5">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src={bg_sky}
            style={bg_skyIconStyle}
          />
          <img
            className="w-[424.6px] h-[calc(100%_-_25px)] absolute !m-[0] top-[12.2px] bottom-[12.8px] left-[calc(50%_-_212.5px)] rounded-3xs max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src={bg_image}
          />
        </div>
        <div className="w-[380px] flex flex-col items-start justify-start gap-2.5 max-w-full">
          <h1
            className="m-0 relative text-13xl leading-[87.94%] font-bold font-[inherit] mq450:text-lgi mq450:leading-[17px] mq750:text-7xl mq750:leading-[23px]">
            {card_name}
          </h1>
          <div className="relative leading-[87.94%] font-medium inline-block min-w-[69px]">
            {card_category}
          </div>
          <div
            className="self-stretch relative text-grey"
          >
            {card_description}
          </div>
          <div className="flex flex-row items-end justify-center pt-[82px] px-0 pb-5 gap-[15px] mq450:flex-wrap">
            <img
              className="h-16 w-16 relative object-cover min-h-[64px]"
              loading="lazy"
              alt=""
              src={logo_num1}
            />
            <img
              className="h-16 w-16 relative object-cover min-h-[64px]"
              loading="lazy"
              alt=""
              src={logo_num2}
            />
            <img
              className="h-16 w-16 relative object-cover min-h-[64px]"
              loading="lazy"
              alt=""
              src={logo_num3}
            />
            <img
              className="h-16 w-16 relative object-cover min-h-[64px]"
              loading="lazy"
              alt=""
              src={logo_num4}
            />
            <img
              className="h-16 w-16 relative object-cover min-h-[64px]"
              loading="lazy"
              alt=""
              src={logo_num5}
            />
          </div>
        </div>
      </div>
    );
  }
);

export default Project;
