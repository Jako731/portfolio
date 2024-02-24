import ProjectInfoCard from "@/components/project-info-card";

export const PROJECTS_TAG = "<projects>";

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col items-center mb-10">
            <p className="mt-4 text-2xl"> {PROJECTS_TAG} </p>
            <h2 className="text-4xl md:text-5xl mb-10">
              What Projects Have I Worked On?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <ProjectInfoCard
                title="Freedom Festival"
                imageUri="https://i0.wp.com/www.hullccnews.co.uk/wp-content/uploads/2022/08/MopontBrest-17cm.jpeg?resize=777%2C437&ssl=1"
              >
                This is just some test
              </ProjectInfoCard>

              <ProjectInfoCard
                title="Tommy Coyle Health & Wellbeing"
                imageUri="https://wearesauce.io/wp-content/uploads/2023/07/coyle-mockup-1.jpg"
              >
                This is just some test
              </ProjectInfoCard>

              <ProjectInfoCard
                title="Rubicon Bridge"
                imageUri="https://rubicon-bridge.com/wp-content/uploads/2023/02/Rubicon-bridge-logo-1x.png"
                imageClass="bg-black p-5"
              >
                This is just some test
              </ProjectInfoCard>

              <ProjectInfoCard
                title="MediMusic"
                imageUri="https://medimusic.co/wp-content/uploads/2020/08/MediMusic-Logo_Gradient.png"
                imageClass="px-20 py-10 bg-white"
              >
                This is just some test
              </ProjectInfoCard>

              <ProjectInfoCard
                title="Pride in Hull"
                imageUri="https://prideinhull.co.uk/wp-content/uploads/2019/10/Pride-in-Hull-2019-654.jpg"
              >
                This is just some test
              </ProjectInfoCard>

              <ProjectInfoCard
                title="Humber Street Sesh"
                imageUri="https://www.humberstreetsesh.co.uk/wp-content/uploads/2022/11/64.-Jason-Shipley-Photography299468667_813192796721059_8339555096258341317_n-1200x800.jpg"
              >
                This is just some test
              </ProjectInfoCard>
            </div>
          </section>

    )
}