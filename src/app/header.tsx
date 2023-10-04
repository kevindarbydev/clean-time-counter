import React from "react";
import { Palette, GithubLogo } from "@/images";
import Image from "next/image";
interface HeaderProps {
  handleSwitchThemes: () => void; // Replace 'void' with the actual return type if it's different
}

const Header: React.FC<HeaderProps> = ({ handleSwitchThemes }) => {
  return (
    <div className="z-5 flex justify-end mr-12 mt-8">
      <div onClick={handleSwitchThemes} className="cursor-pointer">
        <Image
          className="mr-4 -mt-2"
          src={Palette}
          alt="Switch themes"
          aria-label="Click here to switch themes, changing the background and theme colors"
          height={50}
          width={80}
        />
      </div>
      <a target="_blank" href="https://github.com">
        <Image
          src={GithubLogo}
          aria-label="GitHub Logo: Click here to view the source code on GitHub"
          alt="GitHub Logo"
          height={50}
          width={60}
        />
      </a>
    </div>
  );
};

export default Header;
