import { useState } from "react";
import { MessageCircle, Menu, X, Download } from "lucide-react";
import { personal } from "../data/portfolio";

const navLinks = [
  { label: "Home", path: "#home" },
  { label: "Projects", path: "#projects" },
  { label: "Skills", path: "#skills" },
  { label: "About", path: "#about" },
  { label: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold text-gray-900 tracking-tight">
          {personal.shortName}
          <span className="text-purple-600">.</span>
        </a>

        <ul className="hidden sm:flex items-center gap-10">
          {navLinks.map(({ label, path }) => (
            <li key={path}>
              <a
                href={path}
                className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1 text-sm font-semibold text-purple-600 border border-purple-600 rounded-md hover:bg-purple-50 transition-colors"
          >
            {/* <Download size={16} /> */}
            Resume
          </a>
          <a
            href="#contact"
            className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
            aria-label="Contact"
          >
            <MessageCircle size={18} />
          </a>
          <button
            type="button"
            className="sm:hidden w-10 h-10 flex items-center justify-center text-gray-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="sm:hidden border-t border-gray-100 bg-white px-6 py-4">
          {navLinks.map(({ label, path }) => (
            <a
              key={path}
              href={path}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-semibold text-gray-700"
            >
              {label}
            </a>
          ))}
          <a
            href={personal.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 py-3 text-base font-semibold text-purple-600"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
