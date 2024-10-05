import React from "react";

const AboutMe = () => {
  return (
    <div className="flex items-center flex-col mt-24">
      <h1 className="text-5xl">&lt;about_me&gt;</h1>
      <p className="my-6 mx-20 text-1xl text-yellow-300 md:mx-64">
        ...I’m a tech fresher 👨‍💻 with a passion for web development,
        specializing in React ⚛️ and Node.js 🌐. I also enjoy working with
        Python 🐍 and exploring AWS ☁️. Always curious, I love diving into new
        tools and sharpening my full-stack skills! 🚀
      </p>

      <div className="flex flex-col md:flex-row gap-10">
        <p className="mr-16 ml-11 mt-8 font-semibold text-2xl underline ">
          ...I’m Ayush Mishra, a Bachelor’s student in Computer Applications
          (BCA) 📚. With a strong foundation in programming and problem-solving,
          I’m passionate about leveraging technology to create impactful
          solutions.
        </p>
        <p className="mr-16 ml-11 mt-8 font-semibold text-1xl text-yellow-500 ">
          As I progress through my BCA journey, I’m exploring various fields
          within technology. My focus has been on learning web development with
          React ⚛️ and Node.js 🌐, while also diving into Python 🐍 and AWS ☁️.
          I’m constantly eager to learn new tools and frameworks, aiming to
          enhance my skills and contribute to innovative projects that make a
          difference!
        </p>
      </div>
      <button className=" bg-sky-400 hover:bg-purple-500 mt-16 h-14 w-36 text-2xl rounded mb-20">
        &#123;read_more&#125; 
      </button>
    </div>
  );
};

export default AboutMe;
