import React from "react";

const Nav = () => {
  return (
    <>
      <div className="fixed top-3 left-4 bg-black/80 p-1 text-white ring-1 ring-white ">
        OS
      </div>
      <section className="fixed bottom-0 flex w-full justify-around rounded-tr-2xl rounded-tl-2xl bg-black/80 text-white backdrop-blur-xl sm:text-lg md:left-0  md:bottom-1/2 md:h-fit md:w-auto md:translate-y-1/2 md:flex-col md:justify-center md:rounded-tl-none md:rounded-br-2xl md:py-4">
        <a
          className="relative py-4 transition md:px-6 md:hover:bg-white/10"
          href="#home"
        >
          Home
        </a>
        <a
          className="relative py-4 transition md:px-6 md:hover:bg-white/10"
          href="#projects"
        >
          Projets
        </a>
        <a
          className="relative py-4 transition md:px-6 md:hover:bg-white/10"
          href="#contact-me"
        >
          Contact me
        </a>
      </section>
    </>
  );
};

export default Nav;
