import Timeline from '@/components/timeline';
import CompanyInfoCard from "@/components/company-info-card";

export const EXPERIENCE_TAG = "<experience>";

export default function Experience() {
    return (
        <section id="experience" className="flex flex-col mt-5 items-center pb-10">
            <p className="mt-4 text-2xl"> {EXPERIENCE_TAG} </p>
            <h2 className="text-5xl mb-8">
              Where have I been?
            </h2>
            
            {/* TIMELINE */}
            <div className="grid grid-cols-1 gap-y-4 xl:gap-y-0 xl:grid-cols-3 justify-items-center">
              {/* GVS */}
              <CompanyInfoCard
                href="/experience#gvs"
                className="hover:scale-110 transition-transform"
                title="Global View Systems"
                time="Oct 2023 - Present"
                imageUri="https://pbs.twimg.com/media/E65z9V1WUAApFiB.jpg"
                imageClass=""
              >
              </CompanyInfoCard>

              <Timeline
                top
                date="September 2023"
                position="left"
                className="hidden xl:flex"
              />

              {/* EMPTY DIV FOR GRID POSITIONING */}
              <div/>
              <div/>

              <Timeline
                date="September 2023"
                position="right"
                className="hidden xl:flex"
              />

              {/* SAUCE */}
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

              {/* PURPLE DOOR */}
              <CompanyInfoCard
                href="/experience#purple-door"
                className="hover:scale-110 transition-transform"
                title="The Purple Door"
                time="Sep 2020 - Apr 2021"
                imageUri="https://i2-prod.hulldailymail.co.uk/incoming/article2120912.ece/ALTERNATES/s615b/0_purple-door.jpg"
                imageClass=""
              >
                My first experience being a software developer was doing freelance work for The Purple Door,
                which is a nightclub located in Hull.
                <br/>
                Whilst The Purple Door was in renovation during 2020,
                I helped designed a table service system to enhance the efficiency of processes throughout
                the nightclub. The client required my to develop a system where a customer sitting at a
                table can press a button to request a wait to order items from the bar.
              </CompanyInfoCard>

              <Timeline
                date="April 2021"
                position="left"
                className="hidden xl:flex"
              />

              {/* EMPTY DIV FOR GRID POSITIONING */}
              <div/>
              <div/>

              <a
                href="/experience"
                className="px-5 py-3 bg-accent-400 rounded-lg mt-5 lg:mt-0 text-center w-full xl:w-fit"
              >
                View All
              </a>

            </div>
          </section>

    )
}