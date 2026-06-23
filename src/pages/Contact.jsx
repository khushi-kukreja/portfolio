import { Mail, Phone } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { personal } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#F9F9F9]">
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

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <form
              action="https://formspree.io/f/xaqgnony"
              method="POST"
              className="space-y-4"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Portfolio Contact Form Submission"
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-purple-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl resize-none focus:outline-none focus:border-purple-600"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-xl font-medium hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </section>
  );
}
