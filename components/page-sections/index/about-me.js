export const ABOUT_TAG = "<about>";

export default function AboutMe() {
    return (
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
    )
}