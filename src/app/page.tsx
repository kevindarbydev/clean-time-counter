"use client";

import Image from "next/image";
import {
  Background,
  Background1,
  Background2,
} from "@/images";
import Header from "./header";
import { CleanTime } from "./cleantime";
import { useEffect, useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Home() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [chosenBackground, setChosenBackground] = useState<StaticImport>(Background);

  useEffect(() => {
    switch (backgroundIndex) {
      case 0:
        console.log("Current index value: " + backgroundIndex)
        setChosenBackground(Background);
        break;
      case 1:
        console.log("Current index value: " + backgroundIndex);
        setChosenBackground(Background1);
        break;
      case 2:
        console.log("Current index value: " + backgroundIndex);
        setChosenBackground(Background2);
        break;
      default:
        break;
    }
  }, [backgroundIndex]);

  const handleSwitchThemes = () => {
    if (backgroundIndex < 2){
      setBackgroundIndex(backgroundIndex + 1);
    } else setBackgroundIndex(0);
  }

  return (
    <div className="h-screen overflow-hidden relative">
      <div className="absolute -z-10">
        <Image
          src={chosenBackground}
          alt="High resolution nature image"
          quality={100}
        />
      </div>
      <Header handleSwitchThemes={handleSwitchThemes} />
      <CleanTime />
    </div>
  );
}
