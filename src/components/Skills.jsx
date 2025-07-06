import {useState} from 'react';
import {assets} from '../assets/assets'
import ScrollIndicator from './ScrollIndicator';

const skills = [
  { name: "HTML", icon: assets.html, category: "web" },
  { name: "CSS", icon: assets.css, category: "web" },
  { name: "JAVASCRIPT", icon: assets.javascript, category: "web" },
  { name: "REACT JS", icon: assets.react, category: "web" },
  { name: "TAILWIND", icon: assets.tailwind, category: "web" },
  { name: "FIREBASE", icon: assets.firebase, category: "web" },
  { name: "NODE JS", icon: assets.node, category: "web" },
  { name: "EXPRESS", icon: assets.express, category: "web" },
  { name: "GIT", icon: assets.git, category: "tools" },
  { name: "GITHUB", icon: assets.github, category: "tools" },
  { name: "FIGMA", icon: assets.figma, category: "tools" },
  { name: "SUPABASE", icon: assets.supabase, category: "tools" },
  { name: "POSTMAN", icon: assets.postman, category: "tools" },
  { name: "MONGODB", icon: assets.mongodb, category: "web" },
  { name: "JWT", icon: assets.jwt, category: "web" },
  { name: "VERCEL", icon: assets.vercel, category: "tools" },
  { name: "NETLIFY", icon: assets.netlify, category: "tools" },
];

export default function SkillsSection() {
  const [filter, setFilter] = useState("web");

  // Filter skills based on selected category
  const filteredSkills = skills.filter((skill) => skill.category === filter);

  return (
    <section className="bg-surface text-white pt-10 ">
      <ScrollIndicator />
      <div className="max-w-[1220px] mx-auto text-center mt-5 py-16 px-6 sm:px-20 lg:px-5">
        <h2 className="text-textAccent text-4xl font-bold mb-4">What I do</h2>
        <p className="text-gray-300 mb-10">
          The skills, tools and technologies I am really good at:
        </p>

        <div className="flex justify-center items-center gap-2 mb-8">
          <div className="bg-textAccent w-2 h-8"></div>
          <span className="text-lg font-semibold uppercase">Skills</span>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {["web", "tools"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full border transition font-medium capitalize
                ${
                  filter === cat
                    ? "bg-textAccent text-black"
                    : "border-textAccent text-textAccent hover:bg-textAccent hover:text-black"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#111] p-4 rounded-md shadow-lg hover:scale-105 transition-transform cursor-pointer"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                title={skill.name}
                className="h-16 mx-auto mb-2"
              />
              <p className="text-center text-sm font-medium mt-2">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
