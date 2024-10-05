import React from "react";

const MapComponent = () => {
  return (
    <div className="">
      <div className="flex justify-around flex-col items-center md:flex-row md:items-start mb-11 border-b border-t pt-10 border-gray-400 pb-10">
        <div>
          <h2 className="text-purple-500 text-2xl">&#123;PHONE&#125;</h2>
          <h1 className="text-yellow-400 text-3xl">831-832-8362</h1>
        </div>
        <div>
          <h2 className="text-purple-500 text-2xl">&#123;EMAIL&#125;</h2>
          <h1 className="text-yellow-400 text-2xl">ayushmishraam8@gmail.com</h1>
        </div>
        <div>
          <h2 className="text-purple-500 text-2xl">&#123;ADDRESS&#125;</h2>
          <h1 className="text-yellow-400 text-3xl">Barra kanpur UttarPradesh,<br/>India</h1>
        </div>
      </div>
      <div className="w-full h-96 md:h-[450px]  border-4  rounded-lg overflow-hidden shadow-lg mb-24">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3573.216643528049!2d80.3043718245758!3d26.416484499955438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1728058943018!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default MapComponent;
