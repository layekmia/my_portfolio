import coding from "../assets/about.jpeg";
import ScrollIndicator from "./ScrollIndicator";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-[80px]">
      <div className="mb-[80px]">
        <ScrollIndicator />
      </div>
      <div className="grid lg:grid-cols-[3fr_2fr] gap-[80px]  lg:gap-[30px]">
        <div className="max-w-[700px] mx-auto"> 
          <button className="border-4 border-textAccent rounded-[30px_0_30px_0] py-3 px-8 text-white text-3xl sm:text-5xl font-sans">
            About me
          </button>
          <div className="mt-12 py-5 px-7 rounded-lg bg-surface ">
            <span className="text-textPrimary text-sm"> &lt;p&gt;</span>
            <p className="text-3xl font-medium text-textAccent my-3">Hello!</p>
            <p className="ml-4 text-white">
              I’m <span className="font-semibold">Layek Miah</span>, a
              passionate Front-End Developer from Bangladesh who loves turning
              ideas into beautifully crafted, responsive websites. With strong
              skills in{" "}
              <span className="text-textPrimary font-medium">HTML</span>,{" "}
              <span className="text-textPrimary font-medium">CSS</span>,{" "}
              <span className="text-textPrimary font-medium">JavaScript</span>,
              and <span className="text-textPrimary font-medium">React</span>
              , I build clean and scalable user interfaces that provide real
              value.
              <br />
              <br />I enjoy solving problems, learning new technologies, and
              delivering projects that combine performance, accessibility, and
              great design. Whether it’s a personal blog or a complex web app,
              I’m always excited to bring digital experiences to life.
            </p>
            <span className="text-textPrimary text-sm"> &lt;p/&gt;</span>
          </div>
        </div>
        <div className="max-lg:max-w-[450px] mx-auto md:h-[400px] hover:scale-105 transition-transform duration-300 cursor-pointer">
          <img
            className="w-full h-full object-contain md:object-cover rounded-2xl brightness-110"
            src={coding}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
