"use client";

import { navItems } from "@/data";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import RecentProjects from "@/components/RecentProjects";
import SkillsSection from "@/components/Skills";
import Services from "@/components/Services";


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <section id="home"><Hero /></section>
        <Grid />
        <section id="projects"><RecentProjects /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="skills"><SkillsSection /></section>
        <section id="services"><Services /></section>
        <Approach />
        <section id="contact"><Footer /></section>
      </div>
    </main>
  );
};

export default Home;
