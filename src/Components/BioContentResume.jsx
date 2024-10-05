import React from 'react'

const BioContentResume = () => {
  return (
    <div className="flex flex-col text-center mt-28 gap-6">
      <span className="text-7xl">&#123;" "&#125;</span>
      <p className="text-2xl text-yellow-300 md:mx-20 lg:mx-80">
        ...👋 Hi, I'm Ayush Mishra, a passionate and tech-enthusiastic web
        developer currently diving into React and Next.js! I'm actively building
        my skills in both front-end and back-end development, with knowledge of
        C/C++, Python, and the MERN stack. I'm always eager to explore new
        technologies🚀
      </p>
      <h1 className="text-2xl text-red-500 font-bold">
        ?? ....click below to see my resume.....??
      </h1>
      <a
        className="text-3xl underline"
        target="_blank"
        href="https://drive.google.com/file/d/1tX80bR3d0iUJw_JTgGGeb-9ZJN4mkxpZ/view?usp=drive_link"
      >
        RESUME
      </a>
    </div>
  );
}

export default BioContentResume
