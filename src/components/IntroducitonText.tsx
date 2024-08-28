import { FunctionComponent, memo, useCallback } from "react";

export type IntroducitonTextType = {
  className?: string;
};

const IntroducitonText: FunctionComponent<IntroducitonTextType> = memo(
  ({ className = "" }) => {
    const onLinkedinClick = useCallback(() => {
      window.open("https://www.linkedin.com/in/istvanszasz99/");
    }, []);

    const onGithubClick = useCallback(() => {
      window.open("https://github.com/istvanszasz99");
    }, []);

    const onDownladResumeButtonClick = useCallback(() => {
      window.open("https://github.com/istvanszasz99/portfolio_v2/blob/main/public/doc_resume_eng.pdf");
    }, []);

    return (
      <div
        className={`w-[445px] !m-[0] absolute top-[calc(50%_-_305.5px)] left-[calc(50%_-_222.5px)] flex flex-col items-center justify-center gap-[50px] max-w-full text-center text-21xl text-neon-green font-dm-sans ${className}`}
      >
        <h1 className="m-0 w-[258px] relative text-inherit font-medium font-[inherit] flex items-center justify-center mq450:text-5xl mq750:text-13xl">
          Hey There I’m
        </h1>
        <h1 className="m-0 self-stretch relative text-109xl leading-[145px] font-bold font-[inherit] mq450:text-13xl mq450:leading-[58px] mq750:text-32xl mq750:leading-[87px]">
          ISTVAN
        </h1>
        <h3 className="m-0 w-[433px] relative text-5xl leading-[137.5%] font-medium font-[inherit] flex items-center max-w-full mq450:text-lgi mq450:leading-[26px]">
          <span className="w-full">
            <p className="m-0">Currently Studying Computer Science</p>
            <p className="m-0">{`Engineering `}</p>
          </span>
        </h3>
        <div className="w-[153.6px] flex flex-row items-start justify-between gap-5">
          <img
            className="h-16 w-16 relative overflow-hidden shrink-0 cursor-pointer"
            loading="lazy"
            alt=""
            src="/logo_linkedin.svg"
            onClick={onLinkedinClick}
          />
          <img
            className="h-[54.2px] w-[54.2px] relative overflow-hidden shrink-0 cursor-pointer"
            loading="lazy"
            alt=""
            src="/logo_github.svg"
            onClick={onGithubClick}
          />
        </div>
        <button
          className="cursor-pointer border-neon-green border-[3px] border-solid py-1.5 px-[5px] bg-[transparent] w-[196px] rounded-[7.04px] box-border flex flex-col items-center justify-start"
          onClick={onDownladResumeButtonClick}
        >
          <div className="flex flex-row items-center justify-center gap-2">
            <img
              className="h-8 w-8 relative overflow-hidden shrink-0"
              alt=""
              src="/logo_document.svg"
            />
            <b className="relative text-base-5 font-dm-sans text-neon-green text-left">
              Download Resume
            </b>
          </div>
        </button>
      </div>
    );
  }
);

export default IntroducitonText;
