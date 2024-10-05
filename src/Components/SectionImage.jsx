import React from "react";

const SectionImage = ({ url }) => {
  return (
    <section
      className="h-[19rem] bg-cover bg-center bg-fixed my-14  filter brightness-[0.7] blur-[2px] relative z-[1]"
      style={{ backgroundImage: `url(${url})` }}
    ></section>
  );
};

export default SectionImage;
