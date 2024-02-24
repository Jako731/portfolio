import { Carousel } from "@material-tailwind/react";

export const EftelingImg = () => {
    return (
        <img
          src="/images/efteling.jpg"
          alt="Me at Efteling"
          className="h-[100vh] w-full object-cover"
        />
    );
}

export const TuplipImg = () => {
    return (
        <img
            src="/images/tulip.jpg"
            alt="Me stood next to a big tuplip"
            className="h-[100vh] w-full object-cover"
        />
    );
}

export const CadetsImg = () => {
    return (
        <img
            src="/images/cadets.jpg"
            alt="Me winning an award with the Army Cadets"
            className="h-[100vh] w-full object-cover"
        />
    );
}

export const ROLE_TAG = "<developer>";

export default function Welcome() {
    return (
        <section>
          <div className="hidden md:grid grid-cols-3 h-[100vh] xl:h-auto opacity-30">
            <EftelingImg />
            <TuplipImg />
            <CadetsImg />
          </div>
          
          <Carousel
            autoplay={true}
            loop={true}
            prevArrow={() => {}}
            nextArrow={() => {}}
            navigation={() => {}}
            className="md:hidden w-[100vw] h-[100vh] opacity-30"
          >
            <EftelingImg/>
            <TuplipImg />
            <CadetsImg/>
          </Carousel>
          <div className="absolute top-0 w-[100vw] h-[100vh] flex justify-center items-center p-4">
            <div className="max-w-md lg:col-span-2 pt-3 lg:pt-0 text-white">
              <p className="text-center text-2xl"> {ROLE_TAG} </p>
              <h2 className="text-center pt-2">
                Hi, I'm Jake!
              </h2>
              <p className="text-center pt-3">
                I'm an enthusiastic
                <span className="font-bold text-accent-400"> junior developer </span>
                based in Yorkshire with a solid background in software and web development using
                <span className="font-bold text-accent-400"> agile methodologies</span>.
                My entrance into the tech realm began with a deep-seated drive to tackle challenges through coding, and I've been embarking on a thrilling path of perpetual growth ever since.
              </p>
            </div>
          </div>
        </section>
    )
}