import React from "react";
import tam from "../assets/portfolio/tam.png";
import ora from "../assets/portfolio/ora.png";
import bnc from "../assets/portfolio/bnc.png";
import pwpAdmin from "../assets/portfolio/pwpAdmin.png";
import pwpStudio from "../assets/portfolio/pwpStudio.png";
import pwpFront from "../assets/portfolio/pwpFront.png";
// import htmlPortfolio from "../assets/portfolio/htmlPortfolio.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: tam,
      href: "https://tam-development.web.app/login",
    },
    {
      id: 2,
      src: ora,
      href: "https://ora.seizen-seiri.net/login/input",
    },
    {
      id: 3,
      src: pwpStudio,
      href: "https://studio.locophy.com/login"
    },
    {
      id: 4,
      src: pwpAdmin,
      href: "https://admin.locophy.com/login"
    },
    {
      id: 5,
      src: bnc,
      href: "https://bnc-development-bbfbe.web.app/"
    },
    {
      id: 6,
      src: pwpFront,
      href: "http://yutaogawa.com/locophy/publish/"
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 text-white md:h-auto p-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={href}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
