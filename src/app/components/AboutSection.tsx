"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaBluesky, FaGitlab } from "react-icons/fa6";
import TabButton from "./TabButton";
import { useTranslations } from "next-intl";



export default function AboutSection() {
  const t = useTranslations('AboutSection');

  const description = (
    <div className="flex flex-col justify-center gap-8 items-center px-4 lg:grid lg:grid-cols-2 xl:gap-16 xl:py-16 xl:px-16">
      <div className="rounded-full bg-gradient-to-br from-blue-500 via-purple-700 to-pink-500 border-8 border-[#181818] w-[275px] h-[275px] md:w-[300px] md:h-[300px] lg:mb-0 lg:w-[375px] lg:h-[375px] xl:w-[500px] xl:h-[500px] lg:relative">
        <Image
          src="/assets/me.png"
          alt="Gabriel Luna"
          className="lg:absolute rounded-full lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2 lg:left-1/2"
          width={500}
          height={500}
        />
      </div>
      <div>
        <h1 className="font-extrabold text-center lg:text-left text-4xl lg:text-5xl xl:text-6xl pb-1 text-[#444444]">
          {t("description_tab_title")}
        </h1>
        <div className="pb-2 text-purple-500">
          <div className="bg-[#181818] h-full flex items-center justify-center rounded-xl py-1">
            <FaMapMarkerAlt className="" />
            <p className="px-2 text-center text-xs sm:text-sm xl:text-base">
              {t("description_tab_location")}
            </p>
          </div>
        </div>
        <p className="leading-snug text-justify lg:text-left text-xs sm:text-sm xl:text-base">
          {t('description_tab_body')}
        </p>
        <h2 className="pt-7 font-semibold text-purple-500">{t('description_tab_social_media')}</h2>
        <div className="flex justify-left gap-4 py-1">
          <a
            href="https://www.linkedin.com/in/gabluna/"
            target="_blank"
            className="hover:text-purple-500 transition-colors delay-75"
          >
            <AiFillLinkedin style={{ fontSize: "25px" }} />
          </a>
          <a
            href="https://github.com/GabLunaDev"
            target="_blank"
            className="hover:text-purple-500 transition-colors delay-75"
          >
            <AiFillGithub style={{ fontSize: "25px" }} />
          </a>
          <a
            href="https://gitlab.com/GabLuna"
            target="_blank"
            className="hover:text-purple-500 transition-colors delay-75"
          >
            <FaGitlab style={{ fontSize: "23px" }} />
          </a>
          <a
            href="https://bsky.app/profile/gabluna.dev"
            target="_blank"
            className="hover:text-purple-500 transition-colors delay-75"
          >
            <FaBluesky style={{ fontSize: "23px" }} />
          </a>
          <a
            href="https://www.instagram.com/gablunadev/"
            target="_blank"
            className="hover:text-purple-500 transition-colors delay-75"
          >
            <AiOutlineInstagram style={{ fontSize: "25px" }} />
          </a>
          <a
            href="https://www.youtube.com/@GabLuna"
            target="_blank"
            className="hover:text-purple-500 transition-colors delay-75"
          >
            <AiFillYoutube style={{ fontSize: "25px" }} />
          </a>
        </div>
      </div>
    </div>
  );
  
  const university = (
    <div className="flex flex-col justify-center gap-8 items-center px-4 lg:grid lg:grid-cols-2 xl:gap-16 xl:py-16 xl:px-16">
      <div className="rounded-full bg-gradient-to-br from-blue-500 via-purple-700 to-pink-500 border-8 border-[#181818] w-[275px] h-[275px] md:w-[300px] md:h-[300px] lg:mb-0 lg:w-[375px] lg:h-[375px] xl:w-[500px] xl:h-[500px] lg:relative">
        <Image
          src="/assets/bg-04.gif"
          alt="Gabriel Luna"
          className="lg:absolute rounded-full lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2 lg:left-1/2"
          width={500}
          height={500}
        />
      </div>
      <div>
        <h1 className="font-extrabold text-center lg:text-left text-4xl lg:text-5xl xl:text-6xl pb-1 text-[#444444]">
          {t("university_tab_title")}
        </h1>
        <div className="">
          <div className="flex flex-col lg:flex-row  items-center">
            <div className="border-[2px] hidden lg:block border-[#222222] mr-3 rounded-lg py-1 px-1">
              <Image
                src="/assets/unicap-logo.png"
                alt="Unicap Logo"
                width={60}
                height={60}
                className="transform"
              />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl lg:text-2xl text-center lg:text-left font-extrabold text-purple-500">
                {t("university_tab_degree_title")}
              </h1>
              <h1 className="text-sm sm:text-base lg:text-lg text-center lg:text-left">
                {t("university_tab_university_name")}
              </h1>
              <h3 className="text-xs sm:text-sm lg:text-base text-center lg:text-left font-semibold text-[#444444]">
                {t("university_tab_date")}
              </h3>
            </div>
          </div>
          <p className="leading-snug text-justify pt-2 lg:text-left text-xs sm:text-sm xl:text-base">
           {t('university_tab_body')}
          </p>
        </div>
      </div>
    </div>
  );
  
  const courses = (
    <div className="flex flex-col justify-center gap-8 items-center px-4 lg:grid lg:grid-cols-2 xl:gap-16 xl:py-16 xl:px-16">
      <div className="rounded-full bg-gradient-to-br from-blue-500 via-purple-700 to-pink-500 border-8 border-[#181818] w-[275px] h-[275px] md:w-[300px] md:h-[300px] lg:mb-0 lg:w-[375px] lg:h-[375px] xl:w-[500px] xl:h-[500px] relative">
        <Image
          src="/assets/bg-09.gif"
          alt="Typing Gif"
          className="lg:absolute rounded-full lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:top-1/2 lg:left-1/2"
          width={500}
          height={500}
        />
      </div>
      <div>
        <h1 className="font-extrabold text-center lg:text-left text-4xl lg:text-5xl xl:text-6xl pb-1 text-[#444444]">
          {t("courses_tab_title")}
        </h1>
        <ul className="space-y-4">
          <li>
            <div className="bg-[#181818] py-2 px-4 rounded-lg">
              <h1 className="text-base sm:text-lg lg:text-xl font-extrabold text-purple-500">
                Complete C# Unity Game Developer 2D
              </h1>
              <h1 className="text-xs sm:text-sm lg:text-base">GameDev.tv Team</h1>
            </div>
          </li>
          <li>
            <div className="bg-[#181818] py-2 px-4 rounded-lg">
              <h1 className="text-base sm:text-lg lg:text-xl font-extrabold text-purple-500">
                Unreal Engine 5 C++ Developer
              </h1>
              <h1 className="text-xs sm:text-sm lg:text-base">GameDev.tv Team</h1>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );

  const [tab, setTab] = useState("description");
  const [isPending, startTransition] = useTransition();
  const [currentTab, setCurrentTab] = useState(description);

  

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);

      if (id === "description") {
        setCurrentTab(description);
      } else if (id === "university") {
        setCurrentTab(university);
      } else if (id === "courses") {
        setCurrentTab(courses);
      }
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="flex flex-col justify-center items-center pt-9">
        <p className="text-sm lg:text-base text-purple-500">
          {t('greetings')}
        </p>
        <h2 className="text-2xl lg:text-3xl font-extrabold">{t('title')}</h2>
      </div>
      <div className="flex flex-row justify-center gap-4 py-4">
        <TabButton
          selectTab={() => handleTabChange("description")}
          active={tab === "description"}
        >
          {t('description_tab_button')}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("university")}
          active={tab === "university"}
        >
          {t('university_tab_button')}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("courses")}
          active={tab === "courses"}
        >
           {t('courses_tab_button')}
        </TabButton>
      </div>
      {currentTab}
    </section>
  );
};