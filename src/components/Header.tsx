import {
  faFacebook,
  faInstagram,
  faReddit,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import SocialIcon from "./SocialIcon";
import Logo from "./Logo";
import "../index.css";

function Header() {
  return (
    <header className="bg-white flex flex-row items-center justify-between p-4 px-10">
      <Logo />

      <div className="flex flex-row gap-10">
        <SocialIcon icon={faFacebook} href="#" color="text-blue-700" />
        <SocialIcon icon={faInstagram} href="#" color="text-yellow-500" />
        <SocialIcon icon={faTelegram} href="#" color="text-blue-600" />
        <SocialIcon icon={faTwitter} href="#" color="text-blue-500" />
        <SocialIcon icon={faReddit} href="#" color="text-red-600" />
      </div>
    </header>
  );
}

export default Header;
