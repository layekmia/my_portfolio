import ProjectCard from "./ProjectCard";
import ScrollIndicator from "./ScrollIndicator";

export default function WorkSection() {
  return (
    <div className="py-20">
      <ScrollIndicator />
      <h2 className="py-3 px-8 bg-gray-800 rounded-full w-fit mx-auto text-center mt-10 text-white">
        My Works
      </h2>
      <p className="text-white text-lg text-center mt-3">
        Some of the noteworthy projects I have built:
      </p>

      <div>
        <div className="max-w-5xl mx-auto">
          <ProjectCard
            technologies={[
              "React",
              "Next.js",
              "TypeScript",
              "PostgreSQL",
              "Tailwindcss",
              "Figma",
              "Cypress",
              "Storybook",
              "Git",
            ]}
            description=' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.'
          url='https://goggle.com'
          />
        </div>
      </div>
    </div>
  );
}
