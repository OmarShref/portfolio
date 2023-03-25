import React from "react";
import contactmePhoto from "../assets/7.png";

const Contactme = () => {
  return (
    <>
      <section
        id="contact-me"
        className="grid h-screen w-screen place-items-center bg-[url('/src/assets/1.jpg')] bg-cover bg-no-repeat pb-14 md:bg-[url('/src/assets/6.jpg')] md:pb-0 md:pl-36"
      >
        <div className="max-w-xs rounded-xl bg-black/80 p-4 text-white backdrop-blur-2xl md:max-w-md md:p-8 lg:max-w-xl lg:p-10">
          <img
            className="mx-auto mb-8 w-72 lg:w-96"
            src={contactmePhoto}
            alt="home image"
          />
          <div className=" flex justify-center gap-8 text-2xl lg:gap-10 lg:text-3xl xl:text-4xl">
            <a href="mailto:mohandesomar@gmail.com">
              <i className="fa-solid fa-envelope transition active:scale-95 active:text-sky-400 md:hover:text-sky-400"></i>
            </a>
            <a href="tel:+201147713736">
              <i className="fa-solid fa-mobile-screen-button transition active:scale-95 active:text-green-400 md:hover:text-green-400"></i>
            </a>
            <a href="https://www.linkedin.com/in/omar-shref-a66890223/">
              <i className="fa-brands fa-linkedin transition active:scale-95 active:text-blue-500 md:hover:text-blue-500"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactme;
