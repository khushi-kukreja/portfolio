import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSocketdotio,
  SiGit,
  SiGithub,
  SiMui,
  SiReactquery,
  SiOpenjdk,
  SiBootstrap,
  SiTypescript,
} from "react-icons/si";
import {
  MessageCircle,
  Users,
  Lightbulb,
  Eye,
  Network,
} from "lucide-react";

const iconMap = {
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  "React.js": { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#000000" },
  HTML5: { Icon: SiHtml5, color: "#E34F26" },
  CSS3: { Icon: SiCss, color: "#1572B6" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  "Express.js": { Icon: SiExpress, color: "#000000" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
  "REST APIs": { Icon: Network, color: "#7C3AED", lucide: true },
  "Socket.IO": { Icon: SiSocketdotio, color: "#010101" },
  Git: { Icon: SiGit, color: "#F05032" },
  GitHub: { Icon: SiGithub, color: "#181717" },
  "Material UI": { Icon: SiMui, color: "#007FFF" },
  "TanStack Query": { Icon: SiReactquery, color: "#FF4154" },
  Java: { Icon: SiOpenjdk, color: "#ED8B00" },
  Bootstrap: { Icon: SiBootstrap, color: "#7952B3" },
  "Effective communication": { Icon: MessageCircle, color: "#7C3AED", lucide: true },
  Collaboration: { Icon: Users, color: "#7C3AED", lucide: true },
  "Problem solving": { Icon: Lightbulb, color: "#7C3AED", lucide: true },
  "Attention to detail": { Icon: Eye, color: "#7C3AED", lucide: true },
};

export default function SkillIcon({ name, size = 20 }) {
  const entry = iconMap[name];
  if (!entry) return null;

  const { Icon, color, lucide } = entry;

  if (lucide) {
    return (
      <Icon
        size={size}
        className="shrink-0"
        style={{ color }}
        strokeWidth={1.75}
      />
    );
  }

  return <Icon size={size} className="shrink-0" style={{ color }} aria-hidden />;
}
