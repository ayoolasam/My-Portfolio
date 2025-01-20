import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "../components/Socials";
import Photo from "../components/Photo";
import Stats from "../components/Stats";

export default function Home() {
  return (
    <main className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col-reverse xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          <div className=" text-center xl:text-left">
            <span className="text-xl">
              Frontend and Backend Node.js Developer
            </span>
            <h1 className="h1">
              Hello I'm <br />
              <span className="text-accent">Obayomi Ayoola</span>
            </h1>
            <p className="max-w-[500px] mt-4 xl:mt-[10px] text-white/88">
              I specialize in creating seamless digital experiences, with
              expertise in both frontend and backend development using Node.js.
              My passion lies in delivering high-quality, scalable, and
              efficient solutions.
            </p>
            <div className="flex flex-col mt-4   xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase  flex items-center gap-2"
              >
                <span>Download Cv</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials />
              </div>
            </div>
          </div>
          <div className="mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
        <div className="pt-4 pb-12 xl:pt-0 xl:pb-0">
          <Stats />
        </div>
      </div>
    </main>
  );
}
