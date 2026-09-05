import AnimatedHeader from "./client/AnimatedHeader"
import Project from "./client/Project"

const projects = [
  {
    name: "Simanteb",
    tagline: "School Building Maintenance System",
    thumbnail: "/images/simanteb/thumb.png",
    date: "Jan 2025 – Present",
    stack: ["React", "Laravel"],
    other_pics: ["/images/simanteb/1.png", "/images/simanteb/2.png", "/images/simanteb/3.png", "/images/simanteb/4.png"],
    desc: "Full-stack maintenance management system for school facilities, built around temperature and electricity sensor data. RESTful API connecting a React frontend to a Laravel backend, giving maintenance staff a CRUD interface to monitor readings and manage tasks.",
  },
  {
    name: "ISCCO",
    tagline: "Design Change Tracking for Bridge Construction",
    date: "Jan 2026 – Present",
    thumbnail: "/images/iscco/thumb.png",
    stack: ["Laravel", "Inertia", "React", "Flask", "ML"],
    other_pics: ["/images/iscco/1.png", "/images/iscco/2.png", "/images/iscco/3.png", "/images/iscco/4.png", "/images/iscco/5.png", "/images/iscco/6.png"],
    desc: "Full-stack project-tracking platform with a custom IFC viewer mapping design changes onto 3D BIM models, plus a separate Flask service running a custom ML model that predicts cost-overrun risk from user-input factors.",
  },
  {
    name: "ACCESSA",
    tagline: "Accessible School Navigation",
    thumbnail: "/images/accessa/thumb.png",
    date: "Dec 2025 – Present",
    stack: ["React", "Python", "Vosk"],
    other_pics: ["/images/accessa/1.png", "/images/accessa/2.png"],
    desc: "Website built for accessibility, aimed at visually impaired students. React frontend with a voice module for spoken navigation options, connected to a Python backend running Vosk for offline speech-to-text and choice-based navigation.",
  },
  {
    name: "Tokoali",
    tagline: "Stock Management System",
    thumbnail: "/images/toko-ali/thumb.png",
    date: "Apr 2025 – Present",
    stack: ["React", "Go", "REST API"],
    other_pics: ["/images/toko-ali/1.png", "/images/toko-ali/2.png", "/images/toko-ali/3.png"],
    desc: "Stock management website built for a local shop. React frontend connecting to a REST API backend built in Go — chosen deliberately to broaden backend language experience.",
  },
]

function Projects() {
  return (
    <div className="w-full md:max-w-[800px] mt-4">
      <span className="tag eyebrow text-secondary">Work</span>
      <AnimatedHeader text="Projects"/>

      <div className="mt-4 flex flex-col gap-6">
        {projects.map((project) => (
        <Project data={project} key = {project.name}/>
        ))}
      </div>
    </div>
  )
}

export default Projects