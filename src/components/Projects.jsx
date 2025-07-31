import ScrollIndicator from "./ScrollIndicator";
import { projects } from "../util/helper";
import { TfiWorld } from "react-icons/tfi";

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto py-20 relative px-5">
      <div>
        <ScrollIndicator />
        <h2 className="my-4 text-center text-textAccent text-4xl font-bold">
          My Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#0f172a] border border-cyan-800 rounded-md overflow-hidden shadow-md hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02]"
          >
            <a href={project.liveLink}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] object-cover transition-transform duration-300 group-hover:scale-105 hover:scale-105 hover:-translate-y-1"
              />
            </a>
            <div className="p-5 flex flex-col gap-4">
              <h2 className="text-textAccent text-xl font-bold uppercase tracking-wide">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech, index) => (
                  <span
                    key={index}
                    className=" text-textAccent text-[11px] font-semibold px-2 py-1 rounded-full border border-cyan-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex justify-between">
                <a
                  href={project.liveLink}
                  target="_blank"
                  className=" bg-textAccent flex items-center gap-1 text-black hover:bg-cyan-300 text-sm px-4 py-1 rounded transition border border-transparent"
                >
                  <TfiWorld className="text-xs" /> Live
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  className="  flex items-center gap-1 hover:bg-textAccent border border-cyan-800 text-sm px-4 py-1 rounded transition text-textAccent hover:text-black"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-center">
        <a href="https://github.com/layekmia" target="_blank" className="py-2 px-5 rounded border border-textAccent text-textAccent font-medium hover:bg-textAccent hover:text-black transition">
          See More Project
        </a>
      </div>
    </div>
  );
}
