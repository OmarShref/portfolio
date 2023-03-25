import React from "react";
import imagedevelopmentVideo from "../assets/imagedevelopment-video.mp4";
import mybookVideo from "../assets/mybook-video.mp4";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="grid h-screen w-screen place-items-center bg-[url('/src/assets/2.png')] bg-cover bg-fixed bg-no-repeat pb-14 md:bg-[url('/src/assets/4.jpg')] md:pb-0 md:pl-36"
      >
        <div className="max-w-xs rounded-xl bg-black/80 p-4 text-white backdrop-blur-2xl md:max-w-md md:p-8 lg:max-w-xl lg:p-10">
          <video
            src={imagedevelopmentVideo}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none"
          ></video>
          <a
            href="https://omarshref.github.io/image-development/"
            target="_blank"
            className="mt-4 block text-2xl lg:text-3xl xl:text-4xl"
          >
            <span className="text-[#cfaf5c]">IMAGE</span>{" "}
            <span className="text-[#4864d7]">DEVELOPMENT</span>
          </a>
          <p className="mt-4 lg:text-lg">
            This project shows static website design with lots of features with
            translation and various ui elements.
          </p>
          <p className="mt-2 lg:text-lg">
            github :{" "}
            <a
              href="https://github.com/OmarShref/image-development.git"
              target="_blank"
            >
              <i className="fa-brands fa-github rounded-xl px-2 text-2xl transition active:scale-95 md:hover:bg-white md:hover:text-black lg:text-3xl"></i>
            </a>
          </p>
        </div>
      </section>
      <section className="grid h-screen w-screen place-items-center bg-[url('/src/assets/2.png')] bg-cover bg-fixed bg-no-repeat pb-14 md:bg-[url('/src/assets/4.jpg')] md:pb-0 md:pl-36">
        <div className="max-w-xs rounded-xl bg-black/80 p-4 text-white backdrop-blur-2xl md:max-w-md md:p-8 lg:max-w-xl lg:p-10">
          <video
            src={mybookVideo}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none"
          ></video>
          <a
            href="https://my-bookrasayely.netlify.app/"
            target="_blank"
            className="mt-4 block text-2xl lg:text-3xl xl:text-4xl"
          >
            <span className="text-sky-500">MY</span>{" "}
            <span className="text-sky-400">BOOK</span>
          </a>
          <p className="mt-4 lg:text-lg">
            This project shows dynamic website design with search, api fetch &
            the ability of manibulating the database.
          </p>
          <p className="mt-2 lg:text-lg">
            github front-end :{" "}
            <a
              href="https://github.com/OmarShref/mybookfrontend"
              target="_blank"
            >
              <i className="fa-brands fa-github rounded-xl px-2 text-2xl transition active:scale-95 md:hover:bg-white md:hover:text-black lg:text-3xl"></i>
            </a>
          </p>
          <p className="lg:text-lg">
            github back-end :{" "}
            <a
              href="https://github.com/OmarShref/mybookbackend"
              target="_blank"
            >
              <i className="fa-brands fa-github rounded-xl px-2 text-2xl transition active:scale-95 md:hover:bg-white md:hover:text-black lg:text-3xl"></i>
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Projects;
