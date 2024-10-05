import React from 'react'

const Strength = () => {
  return (
    <div className="flex  flex-col items-start md:items-center mx-11 md:mx-0 mt-24">
      <h1 className="text-5xl ">&lt;what drives my work&gt;</h1>
      <div className="md:grid grid-cols-2 ">
        <div className="flex mt-20 items-start flex-col gap-7 mx-11 border-b py-4 border-gray-500">
          <h2 className="text-3xl text-purple-400">&#123;/&#125;</h2>
          <h1 className="text-4xl">_team work</h1>
          <p className="text-2xl text-yellow-400">
            I believe collaboration is the key to success. Working with diverse
            teams allows me to learn, share ideas, and create solutions that
            benefit from multiple perspectives.
          </p>
        </div>
        <div className="flex mt-10 items-start flex-col  gap-4 mx-11 border-b py-4 border-gray-500 ">
          <h2 className="text-3xl text-purple-400">&#123;!&#125;</h2>
          <h1 className="text-4xl">_innovation</h1>
          <p className="text-2xl text-yellow-400">
            I thrive on creativity and constantly push the boundaries to find
            new and effective ways to solve problems. Whether it's through
            exploring cutting-edge technologies or optimizing existing
            solutions, I'm always looking to innovate.
          </p>
        </div>
        <div className="flex mt-10 items-start flex-col  gap-4 mx-11 border-b py-4 border-gray-500">
          <h2 className="text-3xl text-purple-400">&#123;#&#125;</h2>
          <h1 className="text-4xl">_excellence</h1>
          <p className="text-2xl text-yellow-400">
            I strive for the best in everything I do. Paying attention to detail
            and maintaining high standards ensures that the work I deliver is
            not just functional, but also polished and impactful.
          </p>
        </div>
        <div className="flex mt-10 items-start flex-col  gap-4 mx-11 py-4">
          <h2 className="text-3xl text-purple-400">&#123;%&#125;</h2>
          <h1 className="text-4xl">_hard work</h1>
          <p className="text-2xl text-yellow-400">
            Success doesn’t come easy, and I’m dedicated to putting in the
            effort needed to achieve great results. Persistence and commitment
            drive my growth and enable me to tackle challenges head-on
          </p>
        </div>
      </div>
    </div>
  );
}

export default Strength
