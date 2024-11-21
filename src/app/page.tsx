"use client";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Theme from "./components/Theme";
import About from "./MainComponents/About";


export default function Home() {
  return (
    <div className="flex flex-col">
      <Theme/>
      <Navbar/>
      <main className="flex flex-col items-center">
        <About/>
        {/* <Project/> */}
        <Footer/>
      </main>
    </div>
  );
}
