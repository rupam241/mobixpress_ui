import React from "react";
import TopBanner from "./Topbanner";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Hero from "./Hero";
import DisplayHero from "./DisplayHero";


function Header() {
  return (
    <>
    <TopBanner/>
    <Navbar/>
    <Menu/>
    <Hero />
    <DisplayHero/>
    
    </>
  );
}

export default Header;
