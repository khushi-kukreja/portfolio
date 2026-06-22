import { useState } from "react";
import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolio";

export default function Experience() {
  const [active, setActive] = useState(0);
  const current = experience[active];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeading>Experience</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 md:gap-16">
        <div className="relative flex md:flex-col gap-6 md:gap-0 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          {experience.map((item, index) => (
            <button
              key={item.company}
              onClick={() => setActive(index)}
              className={`relative text-left px-0 md:pl-6 py-3 text-lg font-semibold whitespace-nowrap transition-colors ${
                active === index
                  ? "text-purple-600"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {active === index && (
                <span className="hidden md:block absolute left-0 top-3 bottom-3 w-0.5 bg-purple-600 -translate-x-px" />
              )}
              {item.company}
            </button>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-bold text-purple-600 mb-1">
            {current.role} @ {current.company}
          </h3>
          <p className="text-sm text-gray-400 mb-6">{current.period}</p>
          <ul className="space-y-4">
            {current.highlights.map((point) => (
              <li key={point} className="flex gap-3 text-gray-600 leading-relaxed">
                <Check
                  size={18}
                  className="text-purple-600 shrink-0 mt-1"
                  strokeWidth={2.5}
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
