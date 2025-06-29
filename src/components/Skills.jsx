import React from "react";
import html from "../assets/html.png"
import css from "../assets/css.png"
import tailwind from "../assets/tailwind.svg"
import javascript from "../assets/javascript.png"
import react from "../assets/react.png"
import github from "../assets/github.webp"
import node from "../assets/node.svg"
import firebase from "../assets/firebase.png"
import mongodb from "../assets/mongo.png"
import git from "../assets/git.png"


const skills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "TAILWIND", icon: tailwind },
  { name: "JAVASCRIPT", icon: javascript },
  { name: "REACT JS", icon: react },
  { name: "GITHUB", icon: github },
  { name: "NODE JS", icon:node },
  { name: "FIREBASE", icon: firebase },
  { name: "MONGODB", icon: mongodb },
  { name: "GIT", icon: git },
];

export default function SkillsSection() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-yellow-400 text-4xl font-bold mb-4">What I do</h2>
        <p className="text-gray-300 mb-10">
         The skills, tools and technologies I am really good at:
        </p>
        <div className="flex justify-center items-center gap-2 mb-8">
          <div className="bg-yellow-400 w-2 h-8"></div>
          <span className="text-lg font-semibold uppercase">Skills</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#111] p-4 rounded shadow-lg hover:scale-105 transition-transform"
            >
              <img src={skill.icon} alt={skill.name} className="h-16 mx-auto mb-2" />
              <p className="text-center text-sm font-medium mt-2">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
