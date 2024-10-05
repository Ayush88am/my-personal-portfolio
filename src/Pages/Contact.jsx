import React from 'react'
import BioContentContact from '../Components/BioContentContact'
import ContactInput from '../Components/ContactInput'
import MapComponent from '../Components/MapComponent'
const Contact = () => {
  return (
    <div className='container'>
      <BioContentContact/>
      <ContactInput/>
      <MapComponent/>

    </div>
  )
}

export default Contact