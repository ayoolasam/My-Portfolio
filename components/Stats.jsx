"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: "Years Of Experience",
  },
  {
    num: 4,
    text: "Projects Completed",
  },
  {
    num: 8,
    text: "Technologies Mastered",
  },
  {
    num: 200,
    text: "Code Commits",
  },
];

const Stats = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap gap-8 mx-auto xl:max-w-none">
        {stats.map((stat, index) => {
          return (
            <div
              key={index}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
            >
              <CountUp
                end={stat.num}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {stat.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Stats;
