import NavBar from "@/components/navbar";
import InfoCard from "@/components/info-card";
import { Carousel } from "@material-tailwind/react";


export const ROLE_TAG = "<developer>";

export default function HomePage() {
  return (
      <>
        <NavBar/>
        <Carousel
          className="w-[100vw] h-[100vh] opacity-30"
        >
          <img
            src="/images/efteling.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="/images/tulip.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="/images/cadets.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
        <main className="p-6">
          <section className="absolute top-0 w-full h-[100vh] flex justify-center items-center">
                  <div className="max-w-md lg:col-span-2 pt-3 lg:pt-0 text-white">
              <p className="text-center text-2xl"> {ROLE_TAG} </p>
              <h2 className="text-center pt-2">
                Hi, I'm Jake!
              </h2>
              <p className="text-center pt-3">
                I'm an enthusiastic
                <span className="font-bold text-amber-400"> junior developer </span>
                based in Yorkshire with a solid background in software and web development using
                <span className="font-bold text-amber-400"> agile methodologies</span>.
                My entrance into the tech realm began with a deep-seated drive to tackle challenges through coding, and I've been embarking on a thrilling path of perpetual growth ever since.
              </p>
            </div>
          </section>
        </main>
      </>
  );
}
