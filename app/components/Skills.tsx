"use client"

import { useEffect, useRef } from "react"
import "./skills.css"
const skillGroups = [
  {
    category: "Frontend",
    skills: ["React.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Laravel", "Golang", "Python"],
  },
  {
    category: "Mobile",
    skills: ["Android (Java/Kotlin)"],
  },
  {
    category: "Data & ML",
    skills: ["PostgreSQL", "MySQL", "TensorFlow"],
  },
  {
    category: "Tools",
    skills: ["Git / GitHub"],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("skills-visible")
          observer.unobserve(section)
        }
      },
      {
        threshold: 0.2,
      }
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={sectionRef}
      className="skills-section w-full md:max-w-[800px] mt-4"
    >
      <span className="skills-label tag eyebrow text-ink">
        Toolbox
      </span>

      <h1 className="skills-title mono-text font-bold text-4xl w-fit mt-1 text-tertiary">
        Skills
      </h1>

      <div className="skills-card bg-tertiary/20 mt-4 w-full rounded-xl shadow-lg p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-ink">
        {skillGroups.map((group, groupIndex) => (
          <div
            key={group.category}
            className="skill-group"
            style={
              {
                "--group-delay": `${groupIndex * 100 + 200}ms`,
              } as React.CSSProperties
            }
          >
            <h3 className="mono-text text-tertiary text-xs tracking-widest uppercase mb-3">
              {group.category}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, skillIndex) => (
                <span
                  key={skill}
                  className="skill-pill mono-text text-sm px-3 py-1.5 rounded-full border border-tertiary/20 text-tertiary hover:border-tertiary/80 hover:bg-tertiary/5"
                  style={
                    {
                      "--pill-delay": `${groupIndex * 100 + skillIndex * 70 + 350}ms`,
                    } as React.CSSProperties
                  }
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

