import React from "react";
import landingPhoto from "../assets/8.png";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="grid h-screen w-screen place-items-center bg-[url('/src/assets/3.jpg')] bg-cover bg-no-repeat pb-14 md:bg-[url('/src/assets/5.jpg')] md:pb-0 md:pl-36"
      >
        <div className="max-w-xs rounded-xl bg-black/50 p-4 text-white backdrop-blur-2xl md:max-w-md md:p-8 lg:max-w-xl lg:p-10">
          <img
            className="mx-auto mb-8 w-44 md:w-48 lg:w-56"
            src={landingPhoto}
            alt="home image"
          />
          <p className="text-xs lg:text-sm">OMAR SHARIF ZAKI</p>
          <p className="text-xl lg:text-3xl">FULL STACK WEB DEVELOPER</p>
          <p className="mt-4 lg:text-lg">
            I can build you whatever you want with alot of experience any thing
            sall be easy
          </p>
          <button className="mt-4 rounded-md bg-gray-900 px-6 py-4 transition active:scale-95 active:bg-gray-800 md:hover:bg-gray-800 lg:text-xl">
            See Projects
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
