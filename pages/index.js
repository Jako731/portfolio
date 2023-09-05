import NavBar from "@/components/navbar";
import InfoCard from "@/components/info-card";
import { Carousel } from "@material-tailwind/react";


export const ROLE_TAG = "<developer>";

export const EftelingImg = () => {
    return (
        <img
          src="/images/efteling.jpg"
          alt="Me at Efteling"
          className="h-full w-full object-cover"
        />
    );
}

export const TuplipImg = () => {
    return (
        <img
            src="/images/tulip.jpg"
            alt="Me stood next to a big tuplip"
            className="h-full w-full object-cover"
        />
    );
}

export const CadetsImg = () => {
    return (
        <img
            src="/images/cadets.jpg"
            alt="Me winning an award with the Army Cadets"
            className="h-full w-full object-cover"
        />
    );
}

export default function HomePage() {
  return (
      <>
        <NavBar/>

        {/* IMAGE WELCOME */}
        <section>
          <div className="hidden md:grid grid-cols-3 w-[100vw] h-full opacity-30">
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
        
        <main className="p-6 w-full">
          {/* ABOUT ME SECTION */}
          <section id="about">
            <h3 className="mt-5">
              About Me!
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 items-center gap-x-5 order-last md:order-1 justify-center">
              <p>
                I am a 19 year old currently working in the tech industry as a junior software developer.
                I have been programming since I was 13 and immediately loved the problem-solving aspect of it.
                I wanted to use my programming skills in my career, so I decided, for A-Levels, to move to <a className="font-bold text-accent-400 hover:text-accent-500 underline" href="https://www.rondearingutc.com">Ron Dearing UTC</a> to expand on my knowledge and to set me up for the world of work.
                I left Ron Dearing to join <a className="font-bold text-accent-400 hover:text-accent-500 underline" href="https://sauce.dev"> Sauce Consultants Ltd.</a> who specialise in working with large corporates as their digital partner, who make software, despoke to the company themselves.
              </p>
              <div className="flex justify-center w-full">
                <img
                  src="/images/tulip.jpg"
                  alt="Me stood next to a big tuplip"
                  className="w-1/2 object-cover aspect-square"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-5 items-center gap-x-5">
              <div className="flex justify-center w-full">
                <img
                  src="/images/efteling.jpg"
                  alt="Me stood next to a big tuplip"
                  className="w-1/2 object-cover aspect-square"
                />
              </div>
              <p>
                I am also very passionate in music. Firstly I play a variety of instruments, piano, guitar, drums; and have been playing for up to 10 years for some. I also collect vinyl records and love to play them. I’ve been steadily building my collection over the years to what I think is a good display piece I have for my home. My most treasured album that I have got is The Dark Side of the Moon by Pink Floyd, and the most recent one I have picked up is Back to the Water Below by Royal Blood
              </p>
            </div>
          </section>

          <section id="experience">

          </section>

          <section id="skills">
            
          </section>

          <section id="projects">
            
          </section>
        </main>
      </>
  );
}
