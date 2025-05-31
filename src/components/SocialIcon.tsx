import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SocialIconProps {
  icon: IconDefinition;
  href: string;
  color: string;
}

function SocialIcon({ icon, href, color }: Readonly<SocialIconProps>) {
  return (
    <a href={href} className={color}>
      <FontAwesomeIcon icon={icon} size="2x" />
    </a>
  );
}

export default SocialIcon;
