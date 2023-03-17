import React from "react";

const Nav = () => {
  return (
    <>
      <section className="fixed bottom-0 flex w-full justify-around bg-black/80 text-white backdrop-blur-xl sm:text-lg  md:left-0 md:h-full md:w-auto md:flex-col md:justify-center">
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
