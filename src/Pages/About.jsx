import React from 'react'
import BioContentAbout from '../Components/BioContentAbout'
import SectionImage from '../Components/SectionImage'
import Strength from '../Components/Strength'
import ContactInput from '../Components/ContactInput'
const About = () => {
  return (
    <div className="container">
      <BioContentAbout />
      <SectionImage url={"/section.webp"} />
      <Strength />
      <SectionImage url={"/section2.jpg"} />
      <ContactInput/>
    </div>
  );
}

export default About
