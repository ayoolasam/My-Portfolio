"use client";

import { FaHtml5, FaCss3, FaVuejs, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNuxtdotjs,
  SiExpress,
  SiNextdotjs,
  SiReact,
} from "react-icons/si";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "../../components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "Hello! I'm Obayomi Ayoola, a tech enthusiast with a passion for crafting digital experiences that leave a lasting impact. Whether it's designing elegant frontend interfaces or building powerful backend systems, I love turning ideas into innovative solutions. With a blend of creativity, precision, and two years of hands-on experience, I’m always ready to tackle the next big challenge and bring visions to life.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Obayomi Ayoola",
    },
    {
      fieldName: "Phone",
      fieldValue: "090 783 297 26",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Years",
    },
    {
      fieldName: "FreeLance",
      fieldValue: "Available",
    },
    {
      fieldName: "Email",
      fieldValue: "obayomisamuel2403@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English",
    },
  ],
};

const education = {
  icon: "",
  title: "My Education",
  description:
    "My educational journey reflects a strong foundation in technical and engineering principles, complemented by hands-on training in modern development technologies. This blend of academic and practical experience has equipped me to solve real-world challenges effectively.",
  items: [
    {
      institution: "University Of Lagos",
      course: "Surveying And Geoinformatics ",
      duration: "2019-2025",
    },
    {
      institution: "GoMyCode",
      course: "Full Stack Development Bootcamp",
      duration: "2023 - 2024",
    },
  ],
};

const skills = {
  icon: "",
  title: "My Skills",
  description:
    "I bring a diverse skill set to the table, combining frontend and backend development expertise. My strengths lie in crafting responsive user interfaces, building scalable backend systems, and collaborating with teams to deliver exceptional digital experiences.",
  skillList: [
    {
      icon: <FaHtml5 />,

      name: "html 5",
    },
    {
      icon: <FaCss3 />,

      name: "Css 3",
    },
    {
      icon: <SiNuxtdotjs />,

      name: "Nuxt js",
    },
    {
      icon: <SiNextdotjs />,

      name: "Next js",
    },

    {
      icon: <FaVuejs />,

      name: "Vue js",
    },
    {
      icon: <FaNodeJs />,

      name: "Node js",
    },
    {
      icon: <SiTailwindcss />,

      name: "TailWind Css",
    },
    {
      icon: <SiReact />,

      name: "React js",
    },
  ],
};

const experience = {
  icon: "",
  title: "My Experience",
  description:
    "I have honed my skills through diverse experiences in full-stack development and frontend engineering. From immersive bootcamps to industry roles, I have consistently delivered high-quality solutions that prioritize user experience and performance. My journey reflects a commitment to continuous learning and contributing effectively to dynamic teams.",
  items: [
    {
      company: "GoMyCode",
      position: "Full Stack Development Bootcamp",
      duration: "2023 -  2024",
    },
    {
      company: "Krystal Digital Solutions",
      position: "Frontend Intern",
      duration: "july 2024 - September 2024",
    },
    {
      company: "Acada Power",
      position: "Frontend Developer",
      duration: "August 2023 - June 2024",
    },
    {
      company: "X devs",
      position: "Frontend (Intern)",
      duration: "August 2023 - May 2024",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex items-center min-h-[88vh] justify-center py-12 xl-py-8"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col  w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <l
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          i
                          key={index}
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px]  bg-accent h-[6px] rounded-full"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </l>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <l
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          i
                          key={index}
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.course}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px]  bg-accent h-[6px] rounded-full"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </l>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] mx-auto xl:mx-0 text-white/60">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid-cols-2 grid sm:grid-cols-3 md:grid-cols-4 xl:gap-[40px] gap-4">
                  {skills.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delay={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center">
                              <div className="text-4xl hover:text-accent transition-all duration-500">
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="capitalize">
                              <p>{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full">
              <di className="flex flex-col gap-4 text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p class="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-16 max-w-[628px] mx-auto xl:mx-0">
                  {about.info.map((item,index)=>{
                    return <li className="flex items-center justify-center xl:justify-start gap-4 " key="index">
<span className="text-white/60">{item.fieldName
  }</span>
  <span className="text-base ">{item.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </di>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
