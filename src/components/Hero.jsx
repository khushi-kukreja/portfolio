import { Link } from "react-router-dom";
import { personal } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 sm:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="text-left">
          {/* <p className="text-gray-600 text-lg mb-4">{personal.greeting}</p> */}
          <h1 className="text-2xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight leading-[1.1] mb-6">
            {/* <span className="text-purple-600">{personal.titleHighlight}</span>
            <span className="text-gray-900"> Developer</span> */}
            <span>{personal.greeting}</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-md mb-8">
            {personal.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors"
            >
              Get In Touch
            </Link>
            <Link
              to="/projects"
              className="px-6 py-3 border border-gray-300 text-gray-800 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-200 scale-110" />
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden">
              <img
                src={personal.profileImage}
                alt={personal.name}
                className="w-full h-full object-cover object-top scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
