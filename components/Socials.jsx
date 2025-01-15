import { FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const socials = [
  { icon: <FaGithub />, path: "" },
  { icon: <FaLinkedin />, path: "" },
  { icon: <FaWhatsapp />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

const Socials = () => {
  return (
    <div className="flex gap-8">
      {socials.map((item, index) => {
        return (
          <Link
            className="text-xl hover:text-primary w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent  hover:bg-accent  hover:transition-all duration-500 "
            key={index}
            href={item.path}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
