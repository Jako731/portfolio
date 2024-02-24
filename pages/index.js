import NavBar from "@/components/navbar";
import Welcome from "@/components/page-sections/index/welcome";
import AboutMe from "@/components/page-sections/index/about-me";
import Experience from "@/components/page-sections/index/experience";
import Skills from "@/components/page-sections/index/skills";
import Projects from "@/components/page-sections/index/projects";

export default function HomePage() {
  return (
      <>
        <NavBar/>
        <Welcome/>
                
        <main className="p-6 w-full divide-y-2 divide-primary-900 space-y-2">
          <AboutMe/>
          <Experience/>
          <Skills/>
          <Projects/>
          <hr/>
        </main>

        <footer className="text-center text-gray-300 text-uppercase py-5">
          <a href="#">Back to top ↑</a>
        </footer>
      </>
  );
}
