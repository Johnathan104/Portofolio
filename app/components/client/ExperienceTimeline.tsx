"use client"

import { Calendar, ChevronDown, ChevronUp } from "@boxicons/react"
import { useState } from "react"
import TimelineCard  from "./TimelineCard"

const experiences = [
  {
    name: "ISCCO",
    date: "Jan 2026 ",
    desc: "Sole developer — design change tracking platform (Laravel, Inertia, React) with a custom IFC viewer for 3D BIM models, plus a Flask ML service predicting cost-overrun risk",
  },
  {
    name: "ACCESSA",
    date: "Dec 2025 ",
    desc: "Sole developer — accessibility-focused school navigation site (React) with voice-guided navigation and an offline Vosk speech-to-text backend for visually impaired students",
  },
  {
    name: "MyKip",
    date: "Sep 2025 ",
    desc: "Co-developer — Android allowance tracking app (Kotlin) with Firebase real-time database, commissioned by a university lecturer",
  },
  {
    name: "Tokoali",
    date: "Apr 2025 ",
    desc: "Sole developer — stock management system for a local shop, React frontend with a Go REST API backend",
  },
  {
    name: "Simanteb",
    date: "Jan 2025 ",
    desc: "Sole developer — full-stack school facility maintenance system (React, Laravel) tracking sensor-based temperature and electricity data",
  },
]

export default function ExperienceTimeline() {
  const [expanded, setExpanded] = useState(false)
  const visibleExperiences = expanded ? experiences : experiences.slice(0, 2)

  return (
    <>
      <div className="timeline">
        {visibleExperiences.map((exp, i) => (
        <TimelineCard key={exp.name} >
            <h2 className="date tag eyebrow mono-text text-tertiary  flex flex-wrap">
            {exp.name} | <Calendar size="xs" /> {exp.date}
            </h2>
            <div className="p-4 flex max-sm:flex-wrap justify-center">
            <div className="ml-2 text-[12px]">
                <p className="text-tertiary mt-2">{exp.desc}</p>
            </div>
            </div>
        </TimelineCard>
        ))}
      </div>

      {experiences.length > 2 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="tag eyebrow mono-text text-secondary
          flex items-center gap-1 mt-4 mx-auto border border-secondary border-dashed rounded-sm px-3 py-1.5 hover:bg-secondary hover:text-tertiary transition-colors"
        >
          {expanded ? (
            <>Show less <ChevronUp size="xs" /></>
          ) : (
            <>Show {experiences.length - 2} more <ChevronDown size="xs" /></>
          )}
        </button>
      )}
    </>
  )
}