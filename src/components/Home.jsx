import React from "react";

const Home = () => {
  return (
    <>
      <section className="grid h-screen w-screen place-items-center bg-[url('/src/assets/3.jpg')] bg-cover bg-no-repeat pb-14 md:bg-[url('/src/assets/5.jpg')] md:pb-0 md:pl-36">
        <div className="max-w-xs rounded-xl bg-black/50 p-4 text-white backdrop-blur-2xl">
          <img className="w-40" src="/src/assets/8.png" alt="home image" />
          <p className="text-xs">OMAR SHARIF ZAKI</p>
          <p className="text-xl">FULL STACK WEB DEVELOPER</p>
          <p className="mt-4">
            I can build you whatever you want with alot of experience any thing
            sall be easy
          </p>
          <button className="my-4 rounded-md bg-gray-900 px-6 py-4 transition active:scale-95 active:bg-gray-800 md:hover:bg-gray-800">
            See Projects
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
