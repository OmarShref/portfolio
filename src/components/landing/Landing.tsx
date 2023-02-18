import mypic1 from "../../assets/mypic-1.png";
import landingPhoto from "../../assets/landing.png";

export default function Landing() {
  return (
    <section className="grid min-h-screen  place-items-center bg-slate-100 p-4 md:p-10">
      <div className="grid h-full w-full grid-rows-2 bg-white shadow-lg md:grid-cols-2 md:grid-rows-1 md:shadow-2xl">
        <div
          className=" bg-slate-900 bg-contain bg-bottom bg-no-repeat"
          style={{ backgroundImage: `url(${landingPhoto})` }}
        >
          <div className="m-3 grid h-10 w-10 place-items-center border-2 bg-transparent text-lg text-white">
            OS
          </div>
        </div>
        <div className="grid grid-rows-5 text-slate-600">
          <div className="row-span-5 row-start-1 mx-auto flex max-w-sm flex-col items-start justify-center gap-3 px-6 md:row-span-3 md:row-start-3 md:max-w-md md:justify-start lg:justify-center">
            <p className="font-serif text-base md:text-xl">OMAR SHARIF</p>
            <p className="text-2xl md:text-3xl">FULL STACK WEB DEVELOPER</p>
            <p className="text-sm md:text-base">
              I can build you whatever you want with tons of experience any
              thing is easy
            </p>
            <button className="relative z-10 select-none border-2 border-slate-900 p-4 shadow-grayBoxShadow_4 transition active:text-slate-800 lg:hover:translate-x-1 lg:hover:-translate-y-1 lg:hover:shadow-grayBoxShadow_10">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
