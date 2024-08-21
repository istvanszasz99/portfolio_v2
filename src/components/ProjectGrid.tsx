import { FunctionComponent, memo, useCallback } from "react";
import Project from "./Project";

export type ProjectGridType = {
  className?: string;
};

const ProjectGrid: FunctionComponent<ProjectGridType> = memo(
  ({ className = "" }) => {
    const onProject1ContainerClick = useCallback(() => {
      window.open("https://github.com/istvanszasz99/portfolio_v2");
    }, []);

    const onProject2ContainerClick = useCallback(() => {
      window.open("https://github.com/istvanszasz99/portfolio");
    }, []);

    const onProject3ContainerClick = useCallback(() => {
      window.open("https://github.com/istvanszasz99/WebstoreProject");
    }, []);

    const onProject4ContainerClick = useCallback(() => {
      window.open("https://github.com/istvanszasz99/OpenWeatherAPIproject");
    }, []);

    const onProject5ContainerClick = useCallback(() => {
      window.open(
        "https://github.com/istvanszasz99/ObudaUniverityProjectWorkUE4"
      );
    }, []);

    const onProject6ContainerClick = useCallback(() => {
      window.open("https://github.com/istvanszasz99/ObudaUniverityThesis");
    }, []);

    return (
      <div
      className={`self-stretch flex flex-row flex-wrap items-center justify-center pt-5 px-3 pb-0 box-border gap-2.5 min-h-[1180px] max-w-full text-left text-base text-white font-dm-sans ${className}`}
      >
        <Project
          onDownladResumeButtonClick={onProject1ContainerClick}
          bg_sky="/pic_bg_sky.png"
          propMixBlendMode="luminosity"
          bg_image="/pic_portfolio_v2.png"
          card_name="Portfolio v2"
          card_category="Frontend"
          card_description="Personal portfolio website that contains all of my work, project and skill experiences and my resume."
          logo_num1="/logo_figma.png"
          logo_num2="/logo_TS.png"
          logo_num3="/logo_react.png"
          logo_num4="/logo_tailwind.png"
          logo_num5="/logo_vite.png"
        />
        <Project
          onDownladResumeButtonClick={onProject2ContainerClick}
          bg_sky="/pic_bg_sky.png"
          propMixBlendMode="luminosity"
          bg_image="/pic_portfolio_v1.png"
          card_name="Portfolio v1"
          card_category="Frontend"
          card_description="Personal portfolio website that contains all of my work, project and skill experiences and my resume."
          logo_num1="/logo_html.png"
          logo_num2="/logo_css.png"
          logo_num3="/logo_JS.png"
          logo_num4="/logo_react.png"
          logo_num5="/logo_tailwind.png"
        />
        <Project
          onDownladResumeButtonClick={onProject3ContainerClick}
          bg_sky="/pic_bg_sky.png"
          propMixBlendMode="luminosity"
          bg_image="/pic_pizzatime.png"
          card_name="Pizza Time Webstore"
          card_category="Fullstack"
          card_description="Webstore that created for practice and expanding my portfolio."
          logo_num1="/logo_html.png"
          logo_num2="/logo_css.png"
          logo_num3="/logo_JS.png"
          logo_num4="/logo_react.png"
          logo_num5="/logo_tailwind.png"
        />
        <Project
          onDownladResumeButtonClick={onProject4ContainerClick}
          bg_sky="/pic_bg_sky.png"
          propMixBlendMode="luminosity"
          bg_image="/pic_weatherAPI.png"
          card_name="OpenWeatherAPI project"
          card_category="Fullstack"
          card_description="OpenWeather API based project to learn how to use API-s in web development."
          logo_num1="/logo_html.png"
          logo_num2="/logo_JS.png"
          logo_num3="/logo_react.png"
          logo_num4="/logo_tailwind.png"
          logo_num5="/logo_API.png"
        />
        <Project
          onDownladResumeButtonClick={onProject5ContainerClick}
          bg_sky="/pic_bg_sky.png"
          propMixBlendMode="luminosity"
          bg_image="/pic_3Dgame.png"
          card_name="3D survival game"
          card_category="Game"
          card_description="3D survival game made for university project work."
          logo_num1="/logo_ue.png"
          logo_num2="/logo_quixel.png"
          logo_num3="/logo_C++.png"
          logo_num4="/logo_twinmotion.png"
          logo_num5="/logo_git.png"
        />
        <Project
          onDownladResumeButtonClick={onProject6ContainerClick}
          bg_sky="/pic_bg_sky.png"
          propMixBlendMode="luminosity"
          bg_image="/pic_university.png"
          card_name="Obuda University Thesis"
          card_category="3D Simulator"
          card_description="Educational simulation of the university campus in a 3D environment using Unreal Engine 5.."
          logo_num1="/logo_twinmotion.png"
          logo_num2="/logo_ue.png"
          logo_num3="/logo_quixel.png"
          logo_num4="/logo_C++.png"
          logo_num5="/logo_git.png"
        />
      </div>
    );
  }
);

export default ProjectGrid;