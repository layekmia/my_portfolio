const handleViewAndDownload = () => {
  // 1. Open in new tab
  window.open("/resume.pdf", "_blank");

  // 2. Trigger download
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Layek_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const projects = [
  {
    id: 1,
    title: "WorkSync",
    description:
      "A full-stack role-based employee management app with login, dynamic dashboards (Admin, HR, Employee), real-time charts, and secure APIs (JWT). Built with React, Firebase, Node.js, and MongoDB. UI with Flowbite & Shadcn.",
    techs: [
      "React",
      "Tailwind",
      "Node",
      "Express",
      "MongoDB",
      "Firebase",
      "Jwt",
      "Stripe",
    ],
    liveLink: "https://worksyncemployee.netlify.app/",
    codeLink:
      "https://github.com/layekmia/Employee-managment-Full-stack-app.git",
    image: "https://i.ibb.co/dwpF75mW/worksync.png",
  },
  {
    id: 2,
    title: "ChronicleInk",
    description:
      "ChronicleInk is a full-stack news platform with Firebase Auth, JWT, user roles, premium content, and article submissions. Admin dashboard for managing users, publishers, and approvals. Built with MERN, fully responsive and secure.",
    techs: [
      "React",
      "Tailwind",
      "Node",
      "Express",
      "MongoDB",
      "Firebase",
      "Jwt",
      "Stripe",
    ],
    liveLink: "https://chronicle-ink-full-stack-news-platf.vercel.app/",
    codeLink:
      "https://github.com/layekmia/ChronicleInk-Full-stack-news-articles",
    image: "https://i.ibb.co/5hsrYY5n/news.png",
  },
  {
    id: 3,
    title: "serviceSphere",
    description:
      "ServiSphere is a full-stack web app for booking home services like cleaning, plumbing, and electrical. It includes service listing, booking management, and secure authentication using Firebase and JWT.",
   techs: [
      "React",
      "Tailwind",
      "Node",
      "Express",
      "MongoDB",
      "Firebase",
      "Framer-motion"
    ],
    liveLink: "https://servisphare.netlify.app/",
    codeLink: "https://github.com/layekmia/Services-share-application.git",
    image: "https://i.ibb.co/VpqyHR4s/Capture.png",
  },
];

export default handleViewAndDownload;
