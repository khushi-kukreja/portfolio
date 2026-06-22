import SectionHeading from "./SectionHeading";
import { story } from "../data/portfolio";

function renderParagraph({ text, highlights = [] }) {
  if (!highlights.length) return text;

  const pattern = new RegExp(`(${highlights.join("|")})`, "gi");
  const parts = text.split(pattern);

  return parts.map((part, i) =>
    highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className="text-purple-600 font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export default function MyStory() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <SectionHeading>My Story</SectionHeading>

      <div className="max-w-3xl space-y-6 text-gray-600 leading-relaxed text-left">
        {story.map((paragraph, index) => (
          <p key={index}>{renderParagraph(paragraph)}</p>
        ))}
        <p>
          Let's build something great together{" "}
          <span className="text-purple-600">♥</span>
        </p>
      </div>
    </section>
  );
}
