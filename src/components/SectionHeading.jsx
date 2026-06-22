export default function SectionHeading({ children }) {
  return (
    <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-12">
      {children}
      <span className="text-purple-600">.</span>
    </h2>
  );
}
