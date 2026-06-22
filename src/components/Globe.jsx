export default function Globe() {
  const dots = [];
  for (let lat = -80; lat <= 80; lat += 12) {
    for (let lng = -180; lng < 180; lng += 12) {
      const x = 200 + lng * 0.85;
      const y = 200 + lat * 1.1;
      const dist = Math.sqrt((x - 230) ** 2 + (y - 175) ** 2);
      const isIndia = dist < 18;
      dots.push({ x, y, key: `${lat}-${lng}`, highlight: isIndia });
    }
  }

  return (
    <div className="flex items-center justify-center h-full min-h-[280px]">
      <svg viewBox="0 0 400 400" className="w-full max-w-[280px]" aria-hidden="true">
        <circle cx="200" cy="200" r="160" fill="#1a1a2e" />
        {dots.map(({ x, y, key, highlight }) => (
          <circle
            key={key}
            cx={x}
            cy={y}
            r={highlight ? 5 : 2}
            fill={highlight ? "#7c3aed" : "rgba(255,255,255,0.35)"}
          />
        ))}
        {dots
          .filter((d) => d.highlight)
          .slice(0, 1)
          .map(({ x, y, key }) => (
            <circle
              key={`glow-${key}`}
              cx={x}
              cy={y}
              r="12"
              fill="none"
              stroke="#7c3aed"
              strokeWidth="1.5"
              opacity="0.5"
            />
          ))}
      </svg>
    </div>
  );
}
