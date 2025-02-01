"use client";
import React, { useState, useTransition } from "react";
import { VscTerminalLinux } from "react-icons/vsc";
import { BsGit } from "react-icons/bs";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiGodotengine,
  SiAngular,
  SiUnity,
  SiBlender,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiAseprite,
  SiAffinityphoto,
  SiNodedotjs
} from "react-icons/si";
import TabButton from "./TabButton";
import { useTranslations } from "next-intl";

const gamesTechnologies = [
  {
    icon: <TbBrandCSharp style={{ fontSize: "70px", color: "white" }} />,
    name: "C#",
  },
  {
    icon: <SiUnity style={{ fontSize: "70px", color: "white" }} />,
    name: "Unity",
  },
  {
    icon: <BsGit style={{ fontSize: "70px", color: "white" }} />,
    name: "Git",
  },
  {
    icon: <VscTerminalLinux style={{ fontSize: "70px", color: "white" }} />,
    name: "Linux",
  },
  {
    icon: <SiAngular style={{ fontSize: "70px", color: "white" }} />,
    name: "Angular",
  },
  {
    icon: <SiNodedotjs style={{ fontSize: "70px", color: "white" }} />,
    name: "Node.js",
  },
];

const others = [
  {
    icon: <SiBlender style={{ fontSize: "70px", color: "white" }} />,
    name: "Blender",
  },
  {
    icon: <SiAseprite style={{ fontSize: "70px", color: "white" }} />,
    name: "Aseprite",
  },
  {
    icon: <SiAffinityphoto style={{ fontSize: "70px", color: "white" }} />,
    name: "Affinity Photo",
  },
  {
    icon: <SiAdobeaftereffects style={{ fontSize: "70px", color: "white" }} />,
    name: "After Effects",
  },
  {
    icon: <SiAdobephotoshop style={{ fontSize: "70px", color: "white" }} />,
    name: "Photoshop",
  },
  {
    icon: <SiAdobepremierepro style={{ fontSize: "70px", color: "white" }} />,
    name: "Premiere",
  },
];

export default function TechnologiesSection(){
  const t = useTranslations("TechnologiesSection");
  const [tab, setTab] = useState("games");
  const [isPending, startTransition] = useTransition();
  const [currentTechnologies, setCurrentTechnologies] =
    useState(gamesTechnologies);

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);

      if (id === "games") {
        setCurrentTechnologies(gamesTechnologies);
      } else if (id === "others") {
        setCurrentTechnologies(others);
      }
    });
  };

  return (
    <section id="technologies">
      <div className="flex flex-col justify-center items-center py-9">
        <p className="text-sm lg:text-base text-purple-500">
          {t('greetings')}
        </p>
        <h2 className="text-2xl lg:text-3xl font-extrabold text-white">{t('title')}</h2>
      </div>
      <div className="flex flex-row justify-center gap-4">
        <TabButton
          selectTab={() => handleTabChange("games")}
          active={tab === "games"}
        >
          {t('programming_tab_title')}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("others")}
          active={tab === "others"}
        >
          {t('others_tab_title')}
        </TabButton>
      </div>
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-6 py-9`}>
        {currentTechnologies.map((tech, index) => (
          <a
            key={index}
            className="flex flex-col relative items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group transition ease hover:scale-[1.02]"
          >
            <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-purple-700 rounded-full blur-2xl ease"></span>
            <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
              <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-blue-500 rounded-full blur-3xl"></span>
              <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-3xl"></span>
            </span>
            <div className="sm:py-9">
              <div className="mb-2 flex flex-row items-center justify-center relative">
                {tech.icon}
              </div>
              <h5 className="text-white text-center text-sm relative">
                {tech.name}
              </h5>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

