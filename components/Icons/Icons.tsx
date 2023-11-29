import { GithubIcon } from "../Icons/GithubIcon";
import { HashnodeIcon } from "../Icons/HashnodeIcon";
import { LinkedinIcon } from "../Icons/LinkedinIcon";
import { TwitterIcon } from "../Icons/TwitterIcon";
import MoonIcon from "../Icons/MoonIcon";
import SunIcon from "./SunIcon";
import MagicIcon from "./MagicIcon";
const Icons = ({ name, ...props }: { name: string; [key: string]: string }) => {
  if (name === "Github") {
    return <GithubIcon {...props} />;
  }
  if (name === "Hashnode") {
    return <HashnodeIcon {...props} />;
  }
  if (name === "Linkedin") {
    return <LinkedinIcon {...props} />;
  }
  if (name === "Twitter") {
    return <TwitterIcon {...props} />;
  }
  if (name === "Moon") {
    return <MoonIcon {...props} />;
  }
  if (name === "Sun") {
    return <SunIcon {...props} />;
  }
  if (name === "Magic") {
    return <MagicIcon {...props} />;
  }
};
export default Icons;
