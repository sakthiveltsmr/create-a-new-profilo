import React, { useState } from "react";
import Nav from "../Component/Navbar/Nav";
import About from "../Component/About";
import HeroSection from "../Component/HomeSection";
import Sidebar from "../Component/SideBar/";
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
    </>
  );
}
export default Main;
