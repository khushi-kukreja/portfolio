import { Star } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Globe from "../components/Globe";
import { stackTags } from "../data/portfolio";

export default function About() {
  return (
    <main className="min-h-screen bg-white  ">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <SectionHeading>About me</SectionHeading>

        <div className="flex gap-4 max-w-2xl">
          <div className="w-1 bg-purple-600 rounded-full shrink-0" />
          <p className="text-gray-600 text-lg leading-relaxed">
            I’m passionate about creating impactful digital solutions and continuously learning new technologies to improve my craft. I enjoy working on projects that challenge me to think critically, solve problems, and deliver value. Beyond development, I also have an interest in design and am familiar with Figma, which helps me approach projects with a broader perspective.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Stack<span className="text-purple-600">.</span>
            </h3>
            <div className="bg-gray-100 rounded-3xl p-8 min-h-[320px] relative overflow-hidden">
              <div className="flex flex-wrap gap-3">
                {stackTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Star
                size={20}
                className="absolute top-6 right-8 text-purple-600"
                strokeWidth={1.5}
              />
              <Star
                size={14}
                className="absolute bottom-12 left-12 text-purple-400"
                strokeWidth={1.5}
              />
              <Star
                size={16}
                className="absolute top-1/2 right-16 text-purple-500"
                strokeWidth={1.5}
              />
            </div>
          </div>

          {/* <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              My Special Place<span className="text-purple-600">.</span>
            </h3>
            <div className="bg-gray-100 rounded-3xl p-6 min-h-[320px]">
              <Globe />
            </div>
          </div> */}
        </div>
      </section>
    </main>
  );
}
