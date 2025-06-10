import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SocialIconProps {
  icon: IconDefinition;
  href: string;
  color: string;
}

export function SocialIcon({ icon, href, color }: Readonly<SocialIconProps>) {
  return (
    <a href={href} className=" transition-colors">
      <FontAwesomeIcon
        icon={icon}
        size="2x"
        className={`h-6 w-6 ${color} hover:scale-120 duration-300 ease `}
      />
    </a>
  );
}

