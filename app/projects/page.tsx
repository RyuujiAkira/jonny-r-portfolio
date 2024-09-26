// pages/about.tsx
import React from "react";
import Nav from "@/components/Nav";

const Projects: React.FC = () => {
  return (
    <main className="relative bg-[url('../public/assets/hero-background-dt.jpg')] bg-fixed bg-cover bg-bottom flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:p-10 px-5 h-full font-saira md:min-h-screen">
      <Nav />
      <div className="max-w-7xl w-full"></div>
    </main>
  );
};

export default Projects;
