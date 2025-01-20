"use client";
import CountUp from "react-countup";

import axios from "axios";
import { useEffect, useState } from "react";

const Stats = () => {
  const [commits, setCommits] = useState(null);
  const [repos, setRepos] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      const username = "ayoolasam";
      const token = process.env.NEXT_PUBLIC_API_TOKEN; // Optional for increased rate limits

      try {
        // Fetch repositories
        const reposResponse = await axios.get(
          `https://api.github.com/users/${username}/repos`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const reposData = reposResponse.data;
        setRepos(reposData.length);

        // Calculate total commits across all repositories
        let totalCommits = 0;
        for (const repo of reposData) {
          const commitsResponse = await axios.get(
            `https://api.github.com/repos/${username}/${repo.name}/commits`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const commitsData = commitsResponse.data;
          totalCommits += commitsData.length;
        }

        setCommits(totalCommits);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchGitHubData();
  }, []);

  const stats = [
    {
      num: 2,
      text: "Years Of Experience",
    },
    {
      num: repos,
      text: "Projects Completed",
    },
    {
      num: 15,
      text: "Technologies Mastered",
    },
    {
      num: commits,
      text: "Code Commits",
    },
  ];

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
