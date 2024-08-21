import { FunctionComponent, useCallback } from "react";
import IntroducitonText from "../components/IntroducitonText";
import SkillsContainer from "../components/SkillsContainer";
import ProjectGrid from "../components/ProjectGrid";

const LandingPage: FunctionComponent = () => {

  const onAboutTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aboutContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSkillsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='skillsContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProjectsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='projectsContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onLinkedinClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/istvanszasz99/");
  }, []);

  const onGithubClick = useCallback(() => {
    window.open("https://github.com/istvanszasz99");
  }, []);

  return (
    <div className="w-full relative bg-gray-1400 overflow-hidden flex flex-col items-center justify-start py-0 px-5 box-border leading-[normal] tracking-[normal]">
      <main className="w-[1440px] flex flex-col items-center justify-start gap-5 max-w-full">
        <header className="self-stretch flex flex-row items-start justify-center py-[30px] px-5 gap-[63.1px] text-left text-5xl text-white font-dm-sans mq675:gap-8 mq450:gap-4">
          <a className="[text-decoration:none] relative capitalize font-bold text-neon-green inline-block min-w-[69px]">
            Home
          </a>
          <a className="[text-decoration:none] relative capitalize font-bold text-[inherit] inline-block min-w-[73px] cursor-pointer" onClick={onAboutTextClick}>
            About
          </a>
          <a className="[text-decoration:none] relative capitalize font-bold text-[inherit] inline-block min-w-[61px] cursor-pointer" onClick={onSkillsTextClick}>
            Skills
          </a>
          <a className="[text-decoration:none] relative capitalize font-bold text-[inherit] inline-block min-w-[98px] cursor-pointer" onClick={onProjectsTextClick}>
            projects
          </a>
        </header>
        <section className="w-[1440px] h-[870px] flex flex-col items-center justify-center pt-[129.5px] px-0 pb-[161.5px] box-border relative gap-5 max-w-full text-center text-156xl text-[transparent] font-bebas-neue">
          <div className="w-[1400px] hidden flex-col items-center justify-center min-h-[625px] max-w-full z-[0]">
            <div className="self-stretch flex flex-col items-center justify-center max-w-full">
              <div className="self-stretch flex flex-row flex-wrap items-center justify-center max-w-full">
                <div className="h-[210px] relative flex items-center justify-center [-webkit-text-stroke:1.8px_rgba(189,_226,_58,_0.2)] max-w-full mq450:text-25xl mq750:text-51xl">
                  Frontend Developer
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-center max-w-full">
                <div className="h-[210px] relative flex items-center justify-center [-webkit-text-stroke:1.8px_rgba(189,_226,_58,_0.2)] max-w-full mq450:text-25xl mq750:text-51xl">
                  GAME DEVELOPER
                </div>
              </div>
            </div>
          </div>
          <IntroducitonText />
        </section>
        <section className="self-stretch rounded-3xs bg-neon-green flex flex-col items-center justify-center py-[50px] px-5 box-border gap-5 max-w-full text-center text-29xl text-black-blue font-dm-sans mq675:pt-8 mq675:pb-8 mq675:box-border">
          <h1 className="m-0 relative text-inherit leading-[100%] font-bold font-[inherit] mq450:text-10xl mq450:leading-[29px] mq750:text-19xl mq750:leading-[38px]" data-scroll-to="aboutContainer">
            About
          </h1>
          <div className="w-[1216.8px] flex flex-row flex-wrap items-center justify-center gap-x-[17.8px] gap-y-[15.8px] max-w-full text-left text-5xl">
            <img
              className="h-[310px] w-[310px] relative rounded-[17.7px] object-cover min-h-[310px]"
              loading="lazy"
              alt=""
              src="/pic_pfp.png"
            />
            <h3 className="m-0 flex-1 relative text-inherit font-normal font-[inherit] inline-block min-w-[356px] max-w-full mq450:text-lgi">{`My name is István Szász, a 25 years old Web & Game Developer from Hungary. I am currently a graduate student in Computer Engineering at the University of Óbuda. Throughout my university education, I have gained extensive knowledge in programming languages and frameworks. Additionally, I am committed to expanding my IT expertise beyond the classroom through various online courses. For my university thesis, I utilized Unreal Engine 5, demonstrating my proficiency in game development and real-time 3D creation. In my spare time, I further enhance my programming skills, engage in Notebook and PC repair, and enjoy various leisure activities. These include socializing with friends, following Formula 1 & WEC, hobby cooking, and playing video games.`}</h3>
          </div>
        </section>
        <section className="self-stretch flex flex-row flex-wrap items-center justify-center gap-x-5 gap-y-[18px] max-w-full" data-scroll-to="skillsContainer">
          <SkillsContainer />
          <div className="flex-1 rounded-3xs bg-black-blue flex flex-col items-center justify-start py-[98px] px-0 box-border min-w-[335px] max-w-full">
            <div className="w-[206px] flex flex-row items-center justify-between py-0 px-[25px] box-border gap-5">
              <img
                className="h-16 w-16 relative overflow-hidden shrink-0 cursor-pointer"
                loading="lazy"
                alt=""
                src="/logo_linkedin.svg"
                onClick={onLinkedinClick}
              />
              <img
                className="h-[55px] w-[55px] relative overflow-hidden shrink-0 cursor-pointer"
                loading="lazy"
                alt=""
                src="/logo_github.svg"
                onClick={onGithubClick}
              />
            </div>
          </div>
        </section>
        <section className="self-stretch flex flex-col items-center justify-start max-w-full text-left text-29xl text-white font-dm-sans" data-scroll-to="projectsContainer">
          <div className="self-stretch rounded-3xs bg-black-blue flex flex-row items-center justify-start py-5 px-[18px]">
            <h1 className="m-0 relative text-inherit leading-[105%] font-bold font-[inherit] mq450:text-10xl mq450:leading-[30px] mq750:text-19xl mq750:leading-[40px]">
              Projects
            </h1>
          </div>
          <ProjectGrid />
        </section>
        <section className="self-stretch rounded-t-xl rounded-b-none bg-black-blue flex flex-col items-center justify-end py-[72px] px-5 box-border gap-2.5 max-w-full text-center text-[20px] text-grey font-dm-sans">
          <div className="relative inline-block max-w-full mq450:text-base">{`Frontend & Game Developer from Hungary.`}</div>
          <div className="w-[154.4px] flex flex-row items-center justify-between gap-5">
            <img
              className="h-16 w-16 relative overflow-hidden shrink-0 cursor-pointer"
              alt=""
              src="/logo_linkedin.svg"
              onClick={onLinkedinClick}
            />
            <img
              className="h-[55px] w-[55px] relative overflow-hidden shrink-0 cursor-pointer"
              alt=""
              src="/logo_github.svg"
              onClick={onGithubClick}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
