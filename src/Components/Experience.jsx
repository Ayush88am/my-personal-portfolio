import React from 'react'

const Experience = () => {
  return (
    <div className="flex  flex-col items-start md:items-center mx-11 md:mx-0 mt-24">
      <h1 className="text-5xl ">&lt;skills&gt;</h1>
      <div className="md:grid grid-cols-2 ">
        <div className="flex mt-20 items-start flex-col gap-7 mx-11 border-b py-4 border-gray-500">
          <h2 className="text-3xl text-purple-400">&#123;/&#125;</h2>
          <h1 className="text-4xl">_css & html</h1>
          <p className="text-2xl text-yellow-400">
            Experienced in building responsive websites using clean, structured
            HTML and modern CSS techniques like Flexbox and Grid.
          </p>
        </div>
        <div className="flex mt-10 items-start flex-col  gap-4 mx-11 border-b py-4 border-gray-500 ">
          <h2 className="text-3xl text-purple-400">&#123;!&#125;</h2>
          <h1 className="text-4xl">C/C++</h1>
          <p className="text-2xl text-yellow-400">
            Strong grasp of C and C++ programming, with skills in
            problem-solving, data structures, and algorithms. Experience in
            writing optimized and efficient code using pointers, arrays, and
            object-oriented principles.
          </p>
        </div>
        <div className="flex mt-10 items-start flex-col  gap-4 mx-11 border-b py-4 border-gray-500">
          <h2 className="text-3xl text-purple-400">&#123;#&#125;</h2>
          <h1 className="text-4xl">Python (Basic to Intermediate)</h1>
          <p className="text-2xl text-yellow-400">
            Proficient in Python programming, with knowledge in data
            manipulation, scripting, and basic to intermediate algorithms.
            Familiar with libraries like NumPy, Pandas, and Matplotlib for data
            analysis.
          </p>
        </div>
        <div className="flex mt-10 items-start flex-col  gap-4 mx-11 py-4">
          <h2 className="text-3xl text-purple-400">&#123;%&#125;</h2>
          <h1 className="text-4xl">Amazon web service (AWS)</h1>
          <p className="text-2xl text-yellow-400">
            Knowledgeable in AWS cloud services, including EC2, S3, and Lambda.
            Capable of deploying and managing applications in the cloud, with a
            focus on scalability and cost-efficiency.
          </p>
        </div>
        <div className="flex mt-10 items-start flex-col  gap-4 mx-11 py-4">
          <h2 className="text-3xl text-purple-400">&#123;%&#125;</h2>
          <h1 className="text-4xl">JavaScript,React</h1>
          <p className="text-2xl text-yellow-400">
            Skilled in writing dynamic and interactive front-end applications
            using vanilla JavaScript. Experience in DOM manipulation, event
            handling, and API integration to build responsive web
            experiences..... Proficient in building modern web applications
            using React. Skilled in component-based architecture, hooks, state
            management, and creating responsive UIs with reusable components.
          </p>
        </div>{" "}
        <div className="flex mt-10 items-start flex-col  gap-4 mx-11 py-4">
          <h2 className="text-3xl text-purple-400">&#123;%&#125;</h2>
          <h1 className="text-4xl">Node.js,MongoDB</h1>
          <p className="text-2xl text-yellow-400">
            Experienced in backend development using Node.js. Capable of
            building REST APIs, handling server-side logic, and managing data
            flow in full-stack applications.......,Familiar with MongoDB as a
            NoSQL database solution. Able to design schemas, handle CRUD
            operations, and integrate MongoDB with backend technologies like
            Node.js for scalable applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience
