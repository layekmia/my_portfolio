import {
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
      <a
        className="flex items-center gap-2"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=layek.webdev@gmail.com&su=Service%20Inquiry&body=Hello%20Layek%2C%0AI%20am%20interested%20in%20your%20services.%20Please%20provide%20more%20details."
        target="_blank"
        rel="noopener noreferrer"
      >
        <MdEmail className="text-2xl text-textPrimary" />
      </a>

      <a
        className="flex items-center gap-2"
        href="https://wa.me/8801794700226?text=Hi%20Layek!%20I%20saw%20your%20portfolio%20and%20I’m%20interested%20in%20hiring%20you%20for%20a%20web%20project."
        target="_blank"
      >
        <FaWhatsapp className="text-2xl text-textPrimary" />{" "}
      </a>
    </div>
  );
}
