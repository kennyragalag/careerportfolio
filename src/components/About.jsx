import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="bg-gradient-to-b from-gray-800 to-black text-white md:h-auto p-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-15">
          Hello, my name is Kenny Feb Galagar. I am Software Engineer / Software
          Developer
        </p>
        <br />
        <p className="text-xl justify-normal">
          A committed and well-motivated young person who aspires to obtain any
          Engineering, Web Developer and Software Engineer position that
          compensates my qualifications through the best of my knowledge,
          capabilities, and skills to bring out and harness the best of my
          potentials and for the benefit of the company.
        </p>
        <br />
        <p className="text-xl justify-normal">
          Specializing in backend development, frontend development, and
          full-stack development. I have experience working on Java, JavaScript,
          Spring Boot, React, AWS, MySQL, PostgreSQL, Docker, Kubernetes,
          Jenkins, Git and Jira, and love building innovative solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
