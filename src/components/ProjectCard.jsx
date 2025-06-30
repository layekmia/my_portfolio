export default function ProjectCard({
  technologies,
  url,
  description,
  img,
  reverse = false,
  name
}) {
  return (
    <div
      className={`max-w-[1220px] mx-auto mt-10 flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } px-4 sm:px-20 lg:px-5`}
    >
      <div
        className={`flex-1 ${
          !reverse
            ? "rounded-tl-xl lg:rounded-bl-xl rounded-tr-xl lg:rounded-tr-none"
            : "rounded-tr-xl lg:rounded-br-xl rounded-tl-xl lg:rounded-tl-none"
        } overflow-hidden p-10 bg-[#374151]`}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            src={img}
            alt="project"
            className="object-cover hover:scale-105 transition-transform duration-300 rounded-xl"
          />
        </a>
      </div>
      <div
        className={`flex-1 space-y-4 p-10 bg-surface ${
          reverse
            ? "lg:rounded-tl-xl rounded-bl-xl rounded-br-xl lg:rounded-br-none"
            : "lg:rounded-tr-xl rounded-br-xl rounded-bl-xl lg:rounded-bl-none"
        } `}
      >
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
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
          href={url}
          target="_blank"
          className="inline-block mt-2 text-sm text-blue-400 hover:underline"
        >
          🔗 View Project
        </a>
      </div>
    </div>
  );
}
