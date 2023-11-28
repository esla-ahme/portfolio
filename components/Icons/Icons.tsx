import { GithubIcon } from "../Icons/GithubIcon";
import { HashnodeIcon } from "../Icons/HashnodeIcon";
import { LinkedinIcon } from "../Icons/LinkedinIcon";
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
};
export default Icons;
