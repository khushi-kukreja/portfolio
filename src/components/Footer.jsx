import { Link, useLocation } from "react-router-dom";
import { Mail, Globe } from "lucide-react";
import { personal } from "../data/portfolio";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Footer() {
  const location = useLocation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-16">
          <nav className="flex flex-wrap gap-6 sm:gap-10">
            {footerLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`text-sm font-bold transition-colors ${
                  location.pathname === path
                    ? "text-purple-600"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              aria-label="GitHub"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href={personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              aria-label="LeetCode"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3h8l4 9-4 9H8l-4-9 4-9z" />
                <path d="M12 7v10" />
              </svg>
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-gray-600 hover:text-purple-600 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} strokeWidth={1.5} />
            </a>
            {/* <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 transition-colors"
              aria-label="Website"
            >
              <Globe size={20} strokeWidth={1.5} />
            </a> */}
          </div>
        </div>

        {/* <div className="mb-10">
          <h3 className="text-lg font-bold text-gray-900 mb-6">
            Interested in working together
            <span className="text-purple-600">?</span>
          </h3>
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
              Browse Projects
            </Link>
          </div>
        </div> */}

        <p className="text-sm text-gray-400 text-center">
          ©{year} All Rights Reserved. Made with{" "}
          <span className="text-purple-600">♥</span> by {personal.name}
        </p>
      </div>
    </footer>
  );
}
