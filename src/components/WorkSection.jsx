import ProjectCard from "./ProjectCard";
import ScrollIndicator from "./ScrollIndicator";

export default function WorkSection() {
  return (
    <div className="py-20 ">
      <ScrollIndicator />
      <h2 className="py-3 text-textAccent px-8 bg-gray-800 rounded-full w-fit mx-auto text-center mt-10 ">
        Featured Projects
      </h2>
      <p className="text-white text-lg text-center mt-3">
        Some of the noteworthy projects I have built:
      </p>

      <div >
          <ProjectCard
            technologies={[
              "React",
              "Tailwindcss",
              "Figma",
              "Git",
              "Mongodb",
              "Express",
              "Node",
              "Redux",
              "React Router",
            ]}
            description="Wingie is a modern flight booking platform that allows users to search, compare, and book airline tickets from hundreds of airlines across the world. The platform offers a smooth user experience with powerful features like real-time flight search, price filtering, date flexibility, and multi-language support. It’s optimized for both desktop and mobile users."
            url="https://www.wingie.com/"
            img="https://i.ibb.co/Ps1Ybdhr/project-pepehousing.webp"
            name="FlyNest"
          />
          <ProjectCard
            technologies={[
              "React",
              "Tailwindcss",
              "Figma",
              "Git",
              "Mongodb",
              "Express",
              "Node",
              "Redux",
              "React Router",
            ]}
            description=" A student housing platform that helps international students find verified rooms, apartments, and flats for rent across European cities — especially Poland."
            url="https://www.fiskil.com/"
            img="https://i.ibb.co/m5ZXXyB1/project-wingie.webp"
            reverse={true}
            name="Pepe Housing"
          />
          <ProjectCard
            technologies={[
              "React",
              "Tailwindcss",
              "Figma",
              "Git",
              "Mongodb",
              "Express",
              "Node",
              "Redux",
              "React Router",
            ]}
            description=" Fiskil is a B2B API platform enabling secure and compliant data sharing for financial institutions (banks, credit unions) and energy providers. It supports Open Banking, Australia’s CDR, and global frameworks like FDX and Section 1033"
            url="https://pepehousing.com/"
            img="https://i.ibb.co/PsTfRsGr/project-fiskil.webp"
            name="Fiskil"
          />
      </div>
    </div>
  );
}
