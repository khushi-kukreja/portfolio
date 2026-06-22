import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
       <Projects />
      <Experience />
      <Education />
      {/* <Contact/> */}
      
    </main>
  );
}
