export default function PurpleWave({ className = "" }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full ${className}`}
      viewBox="0 0 400 240"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <path
        d="M-20 180 C80 80, 160 220, 260 120 S380 60, 420 140"
        stroke="#7c3aed"
        strokeWidth="28"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
      <path
        d="M-40 200 C60 100, 180 240, 280 140 S400 80, 440 160"
        stroke="#a78bfa"
        strokeWidth="12"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
      />
    </svg>
  );
}
