import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MessageCircle, Menu, X, Download } from "lucide-react";
import { personal } from "../data/portfolio";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-gray-900 tracking-tight">
          {personal.shortName}
          <span className="text-purple-600">.</span>
        </Link>

        <ul className="hidden sm:flex items-center gap-10">
          {navLinks.map(({ label, path }) => (
            <li key={path}>
              <Link
                to={path}
                className={`text-sm font-semibold transition-colors ${
                  location.pathname === path
                    ? "text-purple-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={personal.resume}
            download="Khushi_Kukreja_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-purple-600 border border-purple-600 rounded-xl hover:bg-purple-50 transition-colors"
          >
            <Download size={16} />
            Resume
          </a>
          <Link
            to="/contact"
            className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white hover:bg-gray-800 transition-colors"
            aria-label="Contact"
          >
            <MessageCircle size={18} />
          </Link>
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
            <Link
              key={path}
              to={path}
              onClick={() => setOpen(false)}
              className={`block py-3 text-base font-semibold ${
                location.pathname === path ? "text-purple-600" : "text-gray-700"
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href={personal.resume}
            download="Khushi_Kukreja_Resume.pdf"
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
