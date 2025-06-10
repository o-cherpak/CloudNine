import {
  faFacebook,
  faInstagram,
  faReddit,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { SocialIcon } from "./SocialIcon";
import { Logo } from "./Logo";
import "../index.css";

export function Header() {
  return (
    <header className="bg-gradient-to-br from-indigo-700 to-blue-600 border-b-2  flex flex-row items-center justify-center md:justify-between p-4 md:px-10 text-white">
      <Logo />

      <div className="hidden md:flex items-center gap-6">
        <SocialIcon icon={faFacebook} href="#" color="text-blue-700" />

        <SocialIcon icon={faInstagram} href="#" color="text-yellow-500" />

        <SocialIcon icon={faTelegram} href="#" color="text-blue-600" />

        <SocialIcon icon={faTwitter} href="#" color="text-blue-600" />

        <SocialIcon icon={faReddit} href="#" color="text-red-600" />
      </div>
    </header>
  );
}
