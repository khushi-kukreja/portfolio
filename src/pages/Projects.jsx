import { ExternalLink } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import PurpleWave from "../components/PurpleWave";
import { projects } from "../data/portfolio";

function ProjectCard({ title, description, github, live, backend, image }) {
  return (
    <article>
      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="group block relative aspect-[16/10] bg-gray-200 rounded-3xl overflow-hidden"
      >
        <PurpleWave />
        <img
          src={image}
          alt={`${title} preview`}
          className="relative z-10 w-[82%] h-[78%] object-cover object-top rounded-2xl shadow-2xl mx-auto mt-[6%] group-hover:scale-[1.02] transition-transform duration-300"
        />
      </a>

      <div className="mt-6">
        <div className="flex items-center gap-3 flex-wrap">
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>

        <p className="text-gray-500 mt-2 max-w-md leading-relaxed">{description}</p>

        <div className="flex flex-wrap items-center gap-3 mt-4">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-purple-600 border border-purple-200 rounded-xl hover:bg-purple-50 transition-colors"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {backend && (
            <a
              href={backend}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <ExternalLink size={14} />
              Backend API
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[#F9F9F9]">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeading>Projects</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </section>
  );
}
