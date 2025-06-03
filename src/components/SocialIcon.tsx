import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SocialIconProps {
  icon: IconDefinition;
  href: string;
  color: string;
}

export function SocialIcon({ icon, href, color }: Readonly<SocialIconProps>) {
  return (
    <a href={href} className="hover:opacity-80 transition-colors">
      <FontAwesomeIcon
        icon={icon}
        size="2x"
        className={`h-6 w-6 text-gray-200 hover:${color} transition-colors`}
      />
    </a>
  );
}

