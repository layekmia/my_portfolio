import { useEffect } from "react";
import { assets } from "../assets/assets";
import ScrollIndicator from "./ScrollIndicator";
import AOS from "aos";

export default function About() {
 useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  

  return (
    <div className="max-w-[1220px] mx-auto sm:px-20 lg:px-5 px-5 py-[80px]">
      <div className="mb-[80px]">
        <ScrollIndicator />
      </div>
      <div className="grid lg:grid-cols-[3fr_1.5fr] gap-[80px]  lg:gap-[30px]">
        <div data-aos='fade-right' className="max-w-[700px] mx-auto">
          <button className="border-4 border-textAccent rounded-[30px_0_30px_0] py-3 px-8 text-white text-3xl sm:text-5xl font-sans">
            About me
          </button>
          <div className="mt-12 py-5 px-7 rounded-lg bg-surface">
            <span className="text-textPrimary text-sm">&lt;p&gt;</span>
            <p className="text-3xl font-medium text-textAccent my-3">Hello!</p>
            <p className="ml-4 text-white">
              I’m <span className="font-semibold">Layek Miah</span>, a
              passionate Front-End Developer from Bangladesh who builds clean,
              responsive, and scalable web applications.
              <br />
              <br />
              My main stack includes{" "}
              <span className="text-textPrimary font-medium">
                Next.js
              </span>,{" "}
              <span className="text-textPrimary font-medium">React</span>,{" "}
              <span className="text-textPrimary font-medium">Node.js</span>,{" "}
              <span className="text-textPrimary font-medium">Express</span>, and{" "}
              <span className="text-textPrimary font-medium">MongoDB</span>. I
              also implement{" "}
              <span className="text-textPrimary font-medium">JWT</span> for
              secure authentication in full-stack projects.
              <br />
              <br />I love building real-world projects that focus on
              performance, accessibility, and great user experience. From
              single-page interfaces to full-stack applications, I’m always
              excited to bring ideas to life with code.
            </p>
            <span className="text-textPrimary text-sm">&lt;/p&gt;</span>
          </div>
        </div>
        <div data-aos='fade-left' className="max-lg:max-w-[450px] mx-auto md:h-[400px] hover:scale-105 transition-transform duration-300 cursor-pointer">
          <img
            className="w-full h-full object-contain md:object-cover rounded-2xl brightness-110"
            src={assets.about}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
