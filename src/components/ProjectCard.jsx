import project from "../assets/project.png";

const ProjectCard = ({technologies, className, url, description}) => {
  return (
    <div className={`max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 mt-10 ${className}`}>
      <div className="rounded-tl-xl rounded-bl-xl overflow-hidden p-6 bg-[#374151]">
        <img
          src={project}
          alt="Fiskil Project"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-4 p-10 bg-surface rounded-tr-xl rounded-br-xl">
        <h3 className="text-xl font-semibold text-white">Fiskil</h3>
        <p className="text-gray-400 text-sm">
         {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={url} target="_blank"
          className="inline-block mt-2 text-sm text-blue-400 hover:underline"
        >
          🔗 View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
