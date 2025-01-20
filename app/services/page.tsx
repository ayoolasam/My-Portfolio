"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "I specialize in creating responsive and dynamic user interfaces using modern frameworks like Vue.js, and Nuxt.js, React, Next.js. My focus is on delivering seamless user experiences with clean, maintainable code",
    href: "",
  },
  {
    num: "02",
    title: "Backend Development",
    description:
      "With expertise in Node.js and Express, I build scalable and efficient backend systems. I ensure robust APIs and seamless integration with databases for end-to-end functionality in web applications.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 flex-col justify-center gap-6"
              >
                <div className="flex items-center justify-between font-extrabold  ">
                  <div className="text-5xl font-extrabold text-outline text-transparent hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white hover:bg-accent transition-all duration-500 flex items-center justify-center  hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl   " />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none hover:text-accent transition-all duration-500 text-white ">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
