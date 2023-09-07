import NavBar from "@/components/navbar";
import InfoCard from "@/components/info-card";
import { Carousel } from "@material-tailwind/react";
import CompanyInfoCard from "@/components/company-info-card";
import Timeline from '@/components/timeline'


export const ROLE_TAG = "<developer>";
export const ABOUT_TAG = "<about>";
export const EXPERIENCE_TAG = "<experience>";
export const SKILLS_TAG = "<skills>";
export const PROJECTS_TAG = "<projects>";

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

export default function HomePage() {
  return (
      <>
        <NavBar/>

        {/* IMAGE WELCOME */}
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
        
        <main className="p-6 w-full divide-y-2 divide-primary-900 space-y-2">
          {/* ABOUT ME SECTION */}
          <section id="about" className="flex flex-col items-center mb-10">
            <p className="mt-4 text-2xl"> {ABOUT_TAG} </p>
            <h2 className="text-5xl">
              Who am I?
            </h2>
            <div className="w-full xl:w-3/4 grid grid-cols-1 md:grid-cols-2 mt-5 items-center gap-y-5 gap-x-8 justify-center">
              <p className="text-justify">
                I am a 19 year old currently working in the tech industry as a junior software developer.
                I have been programming since I was 13 and immediately loved the problem-solving aspect of it.
                I wanted to use my programming skills in my career, so I decided, for A-Levels, to move to <a className="font-bold text-accent-400 hover:text-accent-500 underline" href="https://www.rondearingutc.com">Ron Dearing UTC</a> to expand on my knowledge and to set me up for the world of work.
                I left Ron Dearing to join <a className="font-bold text-accent-400 hover:text-accent-500 underline" href="https://sauce.dev"> Sauce Consultants Ltd.</a> who specialise in working with large corporates as their digital partner, who make software, despoke to the company themselves.
              </p>
              <div className="flex flex-col space-y-4 items-center md:items-start w-full">
                <img
                  src="/images/sauce-start.png"
                  alt="Me along with 3 other trainees joining Sauce"
                  className="w-1/2 object-cover aspect-square rounded-lg hover:scale-110 transition-transform"
                />
                <a
                  className="text-sm text-primary-200 text-center hover:text-primary-300 underline"
                  href="https://www.thehullstory.com/allarticles/ron-dearing-utc-hull-destinations-2022"
                >
                  Image from The Hull Story
                </a>
              </div>
            </div>
            <div className="w-full xl:w-3/4 grid grid-cols-1 md:grid-cols-2 mt-5 items-center gap-y-5 gap-x-10 justify-center">
              <div className="flex justify-center w-full md:justify-end order-last md:order-first">
                <img
                  src="/images/bttwb.jpg"
                  alt="Back to the Water Below vinyl"
                  className="w-1/2 object-cover aspect-square ml-5 rounded-lg hover:scale-110 transition-transform"
                />
              </div>
              <p className="text-justify">
                I am also very passionate in music. Firstly I play a variety of instruments, piano, guitar, drums; and have been playing for up to 10 years for some. I also collect vinyl records and love to play them. I’ve been steadily building my collection over the years to what I think is a good display piece I have for my home. My most treasured album that I have got is The Dark Side of the Moon by Pink Floyd, and the most recent one I have picked up is Back to the Water Below by Royal Blood
              </p>
            </div>
          </section>


          <section id="experience" className="flex flex-col mt-5 items-center pb-10">
            <p className="mt-4 text-2xl"> {EXPERIENCE_TAG} </p>
            <h2 className="text-5xl mb-8">
              Where have I been?
            </h2>
            
            <div className="grid grid-cols-1 gap-y-4 lg:gap-y-0 lg:grid-cols-3 justify-items-center">
              <CompanyInfoCard
                href="/experience#sauce"
                className="hover:scale-110 transition-transform"
                title="Sauce"
                time="Apr 2022 - Sep 2023"
                imageUri="https://wearesauce.io/wp-content/uploads/2022/10/Logo@2x.png"
                imageClass="bg-black px-5 py-10"
              >
                I embarked on my journey at Sauce as an eager Intern Developer, driven by a passion for technology and a thirst for knowledge. Over the course of my tenure, I've grown both personally and professionally, steadily advancing to the role of Trainee Developer.
                <br/>
                During my time at Sauce, I've gained invaluable insights into the world of software development. I've honed my technical skills, delving into various programming languages and development tools.But more importantly, I've learned the importance of collaboration, adaptability, and continuous learning in the ever-evolving tech industry.
              </CompanyInfoCard>

              <Timeline
                top
                date="September 2023"
                className="hidden lg:flex"
              />

              <div/>
              <div />
              
              <Timeline
                date="April 2021"
                position="right"
                className="hidden lg:flex"
              />

              <CompanyInfoCard
                href="/experience#purple-door"
                className="hover:scale-110 transition-transform"
                title="The Purple Door"
                time="Sep 2020 - Apr 2021"
                imageUri="https://i2-prod.hulldailymail.co.uk/incoming/article2120912.ece/ALTERNATES/s615b/0_purple-door.jpg"
                imageClass="opacity-70"
              >
                My first experience being a software developer was doing freelance work for The Purple Door,
                which is a nightclub located in Hull.
                <br/>
                Whilst The Purple Door was in renovation during 2020,
                I helped designed a table service system to enhance the efficiency of processes throughout
                the nightclub. The client required my to develop a system where a customer sitting at a
                table can press a button to request a wait to order items from the bar.
              </CompanyInfoCard>

              <div/>

              <a
                href="/experience"
                className="px-5 py-3 bg-accent-400 rounded-lg"
              >
                View All
              </a>

            </div>
          </section>

          <section id="skills">
            <h3 className="mt-5 self-start">
              What Skills Do I Have?
            </h3>

          </section>

          <section id="projects">
            <h3 className="mt-5 self-start">
              What Projects Have I Worked On?
            </h3>

          </section>
        </main>
      </>
  );
}
