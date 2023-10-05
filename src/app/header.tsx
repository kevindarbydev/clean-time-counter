import React from "react";
import { Palette, GithubLogo } from "@/images";
import Image from "next/image";
import { Tooltip } from "@chakra-ui/react";

interface HeaderProps {
  handleSwitchThemes: () => void; // Replace 'void' with the actual return type if it's different
}

const Header: React.FC<HeaderProps> = ({ handleSwitchThemes }) => {
  return (
    <div className="z-5 flex justify-end mr-12 mt-8">
      <div onClick={handleSwitchThemes} className="cursor-pointer">
        <Tooltip label="Switch themes">
          <Image
            className="mr-4 -mt-2"
            src={Palette}
            alt="Switch themes"
            aria-label="Palette: Click here to switch themes, changing the background and theme colors"
            height={50}
            width={80}
          />
        </Tooltip>
      </div>
      <a
        target="_blank"
        href="https://github.com/kevindarbydev/clean-time-tracker"
      >
        <Tooltip label="View Source Code">
          <Image
            src={GithubLogo}
            aria-label="GitHub Logo: Click here to view the source code on GitHub"
            alt="GitHub Logo"
            height={50}
            width={60}
          />
        </Tooltip>
      </a>
    </div>
  );
};

export default Header;
