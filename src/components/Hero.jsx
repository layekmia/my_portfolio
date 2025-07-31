import Sidebar from "./Sidebar";
import profile from "../assets/profile.jpg";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import SocialMedia from "./SocialMedia";

export default function Hero() {
  return (
    <section className="lg:h-[750px] bg-surface flex items-center justify-center flex-col">
      <div className="hide-1024-1320 max-lg:hidden">
        <Sidebar />
      </div>
      <div className="max-w-[1220px] mx-auto px-5  py-12">
        <h2 className="text-[80px] font-sans text-textPrimary max-md:hidden text-center mb-2">
          Developer
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] items-center gap-[60px] lg:gap-[50px] justify-between">
          <div className=" w-[320px] mx-auto border-4 border-white rounded-[160px_0px_160px_0px] shadow-[-4px_-4px_2px_0px_rgb(18,_247,_214)] p-5 flex items-center flex-col justify-center">
            <img
              src={profile}
              alt=""
              className="w-[100px] rounded-full object-cover h-[100px] border-2 border-textAccent"
            />
            <div className="mt-3 mb-6">
              <h2 className="font-medium text-3xl  mb-1 text-white">
                Layek Miah
              </h2>
              <p className="text-sm text-white text-center">
                Front-End Developer
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 text-sm text-white">
              <span>layek.webdev@gmail.com</span>
              <span>Bangladesh</span>
              <span>Full-time / Freelancer</span>
              <span>www.layekmiahdev.com</span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <button className="bg-textPrimary rounded-full text-gray-700 text-sm py-1 px-2">
                JS
              </button>
              <button className="bg-textPrimary rounded-full text-gray-700 text-sm py-1 px-2">
                React
              </button>
              <button className="bg-textPrimary rounded-full text-gray-700 text-sm py-1 px-2">
                NEXT
              </button>
              <button className="bg-textPrimary rounded-full text-gray-700 text-sm py-1 px-2">
                MERN
              </button>
            </div>
            <a
              href="https://wa.me/8801794700226?text=Hi%20Layek!%20I%20saw%20your%20portfolio%20and%20I’m%20interested%20in%20hiring%20you%20for%20a%20web%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="my-8 py-2 px-8 bg-textAccent rounded-full"
            >
              Hire Me
            </a>
          </div>
          {/* details */}
          <div className="flex items-center mt-2 gap-6 flex-col lg:flex-row  sm:px-10 md:px-14  lg:px-0">
            <div>
              <span className="text-textPrimary text-sm"> &lt;h1&gt;</span>
              <h1 className="text-[30px] sm:text-[55px] text-white font-sans leading-[36px] sm:leading-[70px] ml-3">
                <span className="sm:text-3xl"> Hi,</span> <br /> I'm{" "}
                <span className="">Layek</span>,
                <br />
                <span className="text-textAccent">
                  <Typewriter
                    words={[
                      "Front-End Developer",
                      "MERN Stack Builder",
                      "Next.js Enthusiast",
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <span className="text-textPrimary text-sm mb-5 inline-block">
                &lt;h1/&gt;
              </span>
              <br />
              <span className="text-textPrimary text-sm"> &lt;p&gt;</span>
              <p className="text-white ml-3">
                A passionate Front-End Developer crafting clean, responsive, and
                user-focused websites with modern technologies like{" "}
                <span className="font-medium text-secondaryText">React</span>,{" "}
                <span className="font-medium text-secondaryText">
                  JavaScript
                </span>
                , and
                <span className="font-medium text-secondaryText">
                  Tailwind CSS
                </span>
                . I bring digital ideas to life through beautiful UI and smooth
                UX.
              </p>
              <span className="text-textPrimary text-sm inline-block mb-2">
                {" "}
                &lt;p/&gt;
              </span>
              <br />
              <SocialMedia />
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="flex items-center text-3xl text-textAccent gap-2 my-4 cursor-pointer"
              >
                let’s talk <MdEmail className="text-gray-500" />
              </Link>
            </div>
            {/* Stats */}
            <div className="py-12 px-7 bg-surfaceDark flex items-center flex-col justify-center gap-10 rounded-full">
              <p className="text-base text-white flex items-center text-center">
                <span className="text-4xl text-textAccent font-medium mr-3">
                  1
                </span>
                Programming <br />
                Language
              </p>
              <p className="text-base text-white flex items-center text-center">
                <span className="text-4xl text-textAccent font-medium mr-3">
                  8
                </span>
                Development <br />
                Tools
              </p>
              <p className="text-base text-white flex items-center text-center">
                <span className="text-4xl text-textAccent font-medium mr-3">
                  2
                </span>
                Years of <br />
                Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
