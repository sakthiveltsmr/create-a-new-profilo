import React, { useState } from "react";
import Nav from "../Component/Navbar/";
import About from "../Component/About";
import Contact from "../Component/Contact";
import HeroSection from "../Component/HomeSection";
import Sidebar from "../Component/SideBar";
function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Nav toggle={toggle} />
      <HeroSection />
      <About />
      <Contact />
    </>
  );
}
export default Main;
