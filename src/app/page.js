"use client";

import React from "react";

import { BackgroundBoxesDemo } from "./background/page";
import AboutUs from "./aboutUs/page";

import { SparklesPreview } from "./sparkles/page";
import Teams from "./team/page";
import Contact from "./contact/page";
import Footer from "./footer/page";
import Brand from "./brand/page";
import Role from "./role/page";
import Service from "./services/page";

import Video from "./video/page";
import { Navbar } from "./navbar/page";

const Layout = () => {
  return (
    <div>
      {/* Add your components here */}
      <Navbar />
      <Video />
      <BackgroundBoxesDemo />
      <AboutUs />
      <SparklesPreview />
      <Service />
      <Role />
      <Teams />
      <Brand />
      <Contact />
      <Footer />
    </div>
  );
};

export default Layout;
