import React from "react";
import BioContentHome from "../Components/BioContentHome";
import SectionImage from "../Components/SectionImage";
import ContactInput from "../Components/ContactInput";
import AboutMe from "../Components/AboutMe";
import ProjectDetails from "../Components/ProjectDetails";
const Home = () => {
  return (
    <div className="container">
      <BioContentHome />
      <SectionImage url={"./section.webp"} />
      <AboutMe />
      <ProjectDetails />
      <SectionImage url={"./section2.jpg"} />
      <ContactInput />
    </div>
  );
};

export default Home;
