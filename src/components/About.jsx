import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          My name is Kenny Feb Galagar. I am a Front End Developer and Software
          Engineer
        </p>
        <br />
        <p className="text-xl">
          A committed and well-motivated young person who aspires to obtain any
          Engineering, Web Developer and Software Engineer position that
          compensates my qualifications through the best of my knowledge,
          capabilities, and skills to bring out and harness the best of my
          potentials for the Glory of God and for the benefit of the company.
        </p>
      </div>
    </div>
  );
};

export default About;
