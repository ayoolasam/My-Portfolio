"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "../../components/WorkSliderBtns";

const Work = () => {
  const projects = [
    {
      num: "01",
      category: "Full Stack",
      title: "Event Management Platform",
      Description:
        "A full-stack event management application designed to simplify the process of organizing, booking, and managing events. The platform features dedicated user and admin functionalities, offering seamless experiences for both event attendees and administrators. Users can explore upcoming events, register, and manage bookings, while administrators have tools to create, update, and monitor events effectively. Built with Nuxt.js, Tailwind CSS, Node.js, Express, and MongoDB, this application is responsive, secure, and performance-oriented. Deployed on Vercel for fast and reliable hosting.",
      stack: [
        { name: "Nuxt.js" },
        { name: "Tailwind CSS" },
        { name: "Node.js" },
        { name: "Express" },
      ],
      image: "/assets/Screenshot (230).png",
      live: "https://ayoolaevents.vercel.app",
      github: "https://github.com/ayoolasam/event-management-nuxt",
    },
    {
      num: "02",
      category: "Frontend",
      title: "Project 1",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur incidunt expedita amet, animi sapiente laborum! Hic temporibus praesentium accusamus at doloremque molestias quas?",
      stack: [
        { name: "React" },
        { name: "Tailwind CSS" },
        { name: "Framer Motion" },
      ],
      image: "/",
      live: "",
      github: "",
    },
    {
      num: "03",
      category: "Frontend",
      title: "Project 1",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur incidunt expedita amet, animi sapiente laborum! Hic temporibus praesentium accusamus at doloremque molestias quas?",
      stack: [
        { name: "React" },
        { name: "Tailwind CSS" },
        { name: "Framer Motion" },
      ],
      image: "/",
      live: "",
      github: "",
    },
  ];
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[88vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container  mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] text-center xl:text-left flex order-2 xl:order-none  flex-col xl:justify-between">
            <div className="flex flex-col gap-[20px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/68">{project.Description}</p>
              <ul className="flex gap-4 mt-4 flex-col xl:flex-row text-center">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index != project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border  border-white/20"></div>
              <div className="flex items-center gap-4  justify-center xl:justify-start">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px]  h-[70px] rounded-full bg-white/5 justify-center flex  items-center group">
                        <BsArrowUpRight className="text-white text-3xl hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent side="top">Live Project</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px]  h-[70px] rounded-full bg-white/5 justify-center flex  items-center group">
                        <BsGithub className="text-white text-3xl hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>Github Repository</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12 "
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex bg-pink-50/20 justify-center items-center">
                      <div className=""></div>
                      <div className="relative w-full h-full">
                        <Image src={item.image} fill className="object-cover" />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all z-20 duration-500 "
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 x-20 w-full justify-between xl:w-max xl:justify-none "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
