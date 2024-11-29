import React from "react";
import html from "../assets/experiences/html.png";
import css from "../assets/experiences/css.png";
import reactImage from "../assets/experiences/reactImage.png";
import javascript from "../assets/experiences/javascript.png";
import java from "../assets/experiences/java.png";
import springboot from "../assets/experiences/springboot.png";
import github from "../assets/experiences/github.png";
import microservices from "../assets/experiences/microservices.png";
import docker from "../assets/experiences/docker.png";
import aws from "../assets/experiences/aws.png";
import jenkins from "../assets/experiences/jenkins.png";
import jira from "../assets/experiences/jira.png";
import kubernetes from "../assets/experiences/kubernetes.png";
import mysql from "../assets/experiences/mysql.png";
import postgresql from "../assets/experiences/postgresql.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-600",
    },
    {
      id: 5,
      src: java,
      title: "Java",
      style: "shadow-red-600",
    },
    {
      id: 6,
      src: springboot,
      title: "Springboot",
      style: "shadow-green-600",
    },
    {
      id: 7,
      src: github,
      title: "Github",
      style: "shadow-gray-500",
    },
    {
      id: 8,
      src: microservices,
      title: "Microservices",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: docker,
      title: "Docker",
      style: "shadow-cyan-500",
    },
    {
      id: 10,
      src: aws,
      title: "AWS",
      style: "shadow-orange-500",
    },
    {
      id: 11,
      src: jenkins,
      title: "Jenkins",
      style: "shadow-red-500",
    },
    {
      id: 12,
      src: jira,
      title: "Jira",
      style: "shadow-blue-500",
    },
    {
      id: 13,
      src: kubernetes,
      title: "Kubernetes",
      style: "shadow-blue-500",
    },
    {
      id: 14,
      src: mysql,
      title: "MySQL",
      style: "shadow-orange-500",
    },
    {
      id: 14,
      src: postgresql,
      title: "PostreSQL",
      style: "shadow-cyan-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black p-4 text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
