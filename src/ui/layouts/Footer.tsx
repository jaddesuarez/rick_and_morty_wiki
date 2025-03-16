import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full border-t border-gray-600 py-4 px-4 lg:px-22 gap-4 md:gap-0">
      <div className="flex justify-start items-center gap-4 w-full md:w-1/3">
        <Github
          size={26}
          className="cursor-pointer"
          onClick={() =>
            window.open("https://github.com/jaddesuarez", "_blank")
          }
        />
        <Linkedin
          size={26}
          className="cursor-pointer"
          onClick={() =>
            window.open("https://www.linkedin.com/in/jaddesuarez/", "_blank")
          }
        />
      </div>
      <p className="text-gray-400 text-sm text-start md:text-center w-full lg:w-1/3">
        Made with ❤️ by Jadde Suarez
      </p>
      <p className="text-gray-400 text-sm text-start md:text-end w-full lg:w-1/3">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
