import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import  Herosection from "../components/ui/Hero" 
import HeroSection from "../components/ui/Hero";
import ColoredTextBlock from "../components/ui/ColoredTextBlock";
import Help_block from "../components/ui/Block-help"
import Operate101 from "../components/ui/Operate101"
import Blogsection from "@/components/ui/blogs";

const page = () => {
  return (
    <>
    <HeroSection/>
    <ColoredTextBlock/>
    <Help_block/>
    <Operate101/>
    <Blogsection/>
    </>
  );
}


export default page;