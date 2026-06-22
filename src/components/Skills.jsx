import SectionHeading from "./SectionHeading";
import SkillIcon from "./SkillIcon";
import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 bg-[#F9F9F9]">
      <SectionHeading>Skills</SectionHeading>

      <div className="grid grid-cols-2  lg:grid-cols-5 gap-6">
        {skills.map(({ category, items }) => (
          <div key={category}>
            <h3 className="text-base font-bold text-gray-900 mb-3">{category}</h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-7 h-7 rounded-lg bg-white border border-gray-100 shadow-sm flex items-center justify-center">
                    <SkillIcon name={item} size={16} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
