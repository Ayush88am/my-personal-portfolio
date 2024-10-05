import React from 'react'
import BioContentResume from '../Components/BioContentResume'
import SectionImage from '../Components/SectionImage'
import Experience from '../Components/Experience'
import ContactInput from '../Components/ContactInput'
const Resume = () => {
  return (
    <div>
      <BioContentResume/>
      <SectionImage url={"./section.webp"}/>
      <Experience/>
      <ContactInput/>
    </div>
  )
}

export default Resume
