import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <div className="flex items-center gap-4 my-2">
      <a
        className="flex items-center gap-2"
        target="_blank"
        href="https://github.com/layekmia"
      >
        <FaGithub className="text-2xl text-textPrimary" />
      </a>
      <a
        className="flex items-center gap-2"
        target="_blank"
        href="https://www.linkedin.com/in/layekmiah-webdeveloper"
      >
        <FaLinkedin className="text-2xl text-textPrimary" />{" "}
      </a>
      <a
        className="flex items-center gap-2"
        target="_blank"
        href="https://x.com/layekmiahdev"
      >
        <FaTwitterSquare className="text-2xl text-textPrimary" />{" "}
      </a>
    </div>
  );
}
