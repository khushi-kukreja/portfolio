import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 bg-white">
      <SectionHeading>Education</SectionHeading>

      <div className="relative">
        {/* <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gray-200 hidden sm:block" /> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((item) => (
            <article key={`${item.school}-${item.degree}`} className="relative">
              {/* <div className="hidden sm:flex absolute left-0 top-1 w-10 h-10 rounded-full bg-purple-50 border-2 border-purple-600 items-center justify-center">
                <GraduationCap size={18} className="text-purple-600" />
              </div> */}

              <div className="bg-[#F9F9F9] rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow">
                {/* <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-purple-600">{item.degree}</h3>
                    <p className="text-gray-900 font-semibold mt-1">{item.school}</p>
                    {item.location && (
                      <p className="text-sm text-gray-400 mt-0.5">{item.location}</p>
                    )}
                  </div>
                  <p className="text-sm text-gray-400 font-medium shrink-0">{item.period}</p>
                </div> */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-purple-50 border-2 border-purple-600 flex items-center justify-center shrink-0">
                    <GraduationCap size={18} className="text-purple-600" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-purple-600">
                          {item.degree}
                        </h3>
                        <p className="text-gray-900 font-semibold mt-1">
                          {item.school}
                        </p>
                        {item.location && (
                          <p className="text-sm text-gray-400 mt-0.5">
                            {item.location}
                          </p>
                        )}
                      </div>

                      <p className="text-sm text-gray-400 font-medium shrink-0">
                        {item.period}
                      </p>
                    </div>
                  </div>
                </div>

                {item.detail && (
                  <p className="text-gray-600 mt-3 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-600" />
                    {item.detail}
                  </p>
                )}

                {item.highlights?.map((point) => (
                  <p key={point} className="text-gray-600 mt-2 flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-400" />
                    {point}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
