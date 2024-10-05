import React from "react";

const ProjectDetails = () => {
  return (
    <div className="flex items-center flex-col ">
      <h1 className="text-4xl text-purple-500">&#40;!&#41;</h1>
      <h1 className="text-6xl">&lt;portfolio&gt;</h1>
      <p className="my-6 mx-20 text-1xl text-yellow-300 md:mx-64">
        ...I build responsive web apps using React ⚛️ and Node.js 🌐, while
        leveraging AWS ☁️ for scalable solutions. Always exploring new tools, I
        love creating efficient, real-world projects.
      </p>
      <div className="flex flex-col md:flex-row gap-14 items-center">
        <div className="md:grid md:grid-cols-3 gap-14 items-center ">
          <div className="flex flex-col items-center gap-5">
            <img
              className="rounded-xl mt-20 h-[299px]"
              src="/todo4.png"
              alt="project-image"
              width={250}
            />
            <h1 className="text-3xl">&#123;todo user login&#125;</h1>
            <p className="text-yellow-200 mx-20">
              //...A user-friendly login interface for a Todo application. This
              page utilizes "Zod for validation", ensuring secure and accurate
              user input. Built with CSS for responsive design and optimal user
              experience{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <img
              className="rounded-xl mt-20 h-[299px]"
              src="/todo1.png"
              alt="project-image"
              width={250}
            />
            <h1 className="text-3xl">&#123;todo home page&#125;</h1>
            <p className="text-yellow-200 mx-20">
              //...A simple interface with buttons for "Completed Todos,"
              "Uncompleted Todos," and "Add New Todo," designed for efficient
              task management using CSS.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <img
              className="rounded-xl mt-20 h-[300px]"
              src="/todo3.png"
              alt="project-image"
              width={250}
            />
            <h1 className="text-3xl">&#123;todo add box&#125;</h1>
            <p className="text-yellow-200 mx-20">
              //...An intuitive button that opens an input form for entering new
              todo data, complete with Zod validation to ensure accurate and
              secure submissions.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <img
              className="rounded-xl mt-20 h-[299px]"
              src="/interview3.png"
              alt="project-image"
              width={290}
            />
            <h1 className="text-3xl">&#123;Introduction_genrator&#125;</h1>
            <p className="text-yellow-200 mx-20">
              //...A user-friendly page where users can input a single character
              to receive a name suggestion based on that input.
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <img
              className="rounded-xl mt-20 h-[299px]"
              src="/interview.png"
              alt="project-image"
              width={290}
            />
            <h1 className="text-3xl">&#123;name suggestion&#125;</h1>
            <p className="text-yellow-200 mx-20">
              //...An interactive page that suggests names based on
              user-attempted questions, providing personalized recommendations
              to enhance the user experience.{" "}
            </p>
          </div>
          <div className="flex flex-col  items-center gap-5">
            <img
              className="rounded-xl mt-20 h-[300px]"
              src="/interview2.png"
              alt="project-image"
              width={310}
            />
            <h1 className="text-3xl">&#123;shows introduction&#125;</h1>
            <p className="text-yellow-200 mx-20">
              //...A dynamic page that gathers user input for name and city and
              displays a personalized introduction, enhancing user engagement
              and interaction.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
