import { Mail, Phone } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { personal } from "../data/portfolio";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#F9F9F9]">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeading>Get In Touch</SectionHeading>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md mb-10 -mt-6">
              Open to opportunities, collaborations, and exciting projects. Let's connect and create something meaningful together.
            </p>

            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-700">
                  <Mail size={20} strokeWidth={1.5} />
                </span>
                <a
                  href={`mailto:${personal.email}`}
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  {personal.email}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center text-gray-700">
                  <Phone size={20} strokeWidth={1.5} />
                </span>
                <a
                  href={`tel:${personal.phone.replace(/\s/g, "")}`}
                  className="text-gray-700 hover:text-purple-600 transition-colors"
                >
                  {personal.phone}
                </a>
              </li>
            </ul>
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
    </main>
  );
}
