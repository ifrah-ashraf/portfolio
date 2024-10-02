"use client";

import { BackgroundLinesDemo } from "./components/BackgroundLinesDemo";
import { LampDemo } from "./components/LampDemo";
import Navbar from "./components/Navbar";
import { TextGenerateEffectDemo } from "./components/TextGenerateEffectDemo";
import Theme from "./components/Theme";
import About from "./MainComponents/About";
import Project from "./MainComponents/Project";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Theme/>
      <Navbar/>
      <main className="flex flex-col items-center">
        <About/>
        {/* <Project/> */}
      </main>
    </div>
  );
}
