import mypic1 from "../../assets/mypic-1.png";
import landingPhoto from "../../assets/landing.png";

export default function Landing() {
  return (
    <section className="grid min-h-screen  place-items-center bg-slate-100 p-4 md:p-10">
      <div className="grid h-full w-full grid-rows-2 bg-white shadow-lg md:grid-cols-2 md:grid-rows-1 md:shadow-2xl">
        <div
          className="bg-black/90 bg-contain bg-bottom bg-no-repeat"
          style={{ backgroundImage: `url(${landingPhoto})` }}
        ></div>
        <div className="grid grid-rows-5 text-slate-600">
          <div className="row-span-5 row-start-1 mx-auto flex max-w-sm flex-col items-start justify-center gap-2 px-6 md:row-span-2 md:row-start-4 md:max-w-md md:justify-start">
            <p className="font-serif text-base md:text-xl">OMAR SHARIF</p>
            <p className="text-2xl md:text-3xl">FULL STACK WEB DEVELOPER</p>
            <p className="text-sm md:text-base">
              I can build you whatever you want with tons of experience any
              thing is easy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
