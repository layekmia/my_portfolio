import Sidebar from "./Sidebar";
import profile from "../assets/profile.png";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section className="lg:h-[750px] bg-surface flex items-center justify-center flex-col">
      <div className="hide-1024-1320 max-sm:hidden">
        <Sidebar />
      </div>
      <div className="max-w-6xl mx-auto px-5  py-12">
        {/* Heading */}
        <h2 className="text-[80px] font-sans text-textPrimary max-md:hidden text-center mb-2">
          Developer
        </h2>
        {/* main content */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] items-center gap-[60px] lg:gap-[50px] justify-between">
          {/* card */}
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
                HTML
              </button>
              <button className="bg-textPrimary rounded-full text-gray-700 text-sm py-1 px-2">
                CSS
              </button>
              <button className="bg-textPrimary rounded-full text-gray-700 text-sm py-1 px-2">
                JS
              </button>
              <button className="bg-textPrimary rounded-full text-gray-700 text-sm py-1 px-2">
                REACT
              </button>
            </div>
            <button className="my-8 py-2 px-8 bg-white rounded-full">
              Hire Me
            </button>
          </div>
          {/* details */}
          <div className="flex items-center gap-6 flex-col lg:flex-row  sm:px-10 md:px-14  lg:px-0">
            <div>
              <span className="text-textPrimary text-sm"> &lt;h1&gt;</span>
              <h1 className="text-[32px] sm:text-[55px] text-white font-sans leading-[36px] sm:leading-[70px] ml-3">
                Hey, <br /> I'm <span className="text-textAccent">Layek</span>,{" "}
                <br /> Front-End developer
              </h1>
              <span className="text-textPrimary text-sm mb-5 inline-block">
                {" "}
                &lt;h1/&gt;
              </span>
              <br />
              <span className="text-textPrimary text-sm"> &lt;p&gt;</span>
              <p className="text-white ml-3">
                I help business grow by crafting amazing web experiences. If
                you’re looking for a developer that likes to get stuff done,
              </p>
              <span className="text-textPrimary text-sm"> &lt;p/&gt;</span>{" "}
              <br />
              <button className="flex items-center text-3xl text-textAccent gap-2 my-4">
                let’s talk <MdEmail className="text-gray-500" />
              </button>
            </div>
            {/* Stats */}
            <div className="py-12 px-7 bg-surfaceDark flex items-center flex-col justify-center gap-10 rounded-full">
              <p className="text-base text-white flex items-center ">
                <span className="text-4xl text-textAccent font-medium mr-3 ">
                  4
                </span>{" "}
                Programming <br />
                Language
              </p>
              <p className="text-base text-white flex items-center ">
                <span className="text-4xl text-textAccent font-medium mr-3 ">
                  6
                </span>{" "}
                Development <br />
                Tools
              </p>
              <p className="text-base text-white flex items-center ">
                <span className="text-4xl text-textAccent font-medium mr-3 ">
                  8
                </span>{" "}
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
