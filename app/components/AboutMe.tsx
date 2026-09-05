import AnimatedHeader from "./client/AnimatedHeader"
import SkillsChart from "./client/SkillsChart"

function AboutMe() {
  return (
    <div className="w-full md:max-w-[800px] mt-4 border-t border-secondary border-dashed ">
      <span className="tag eyebrow text-secondary">Information</span>
      <AnimatedHeader text="About Me" />

      <div className="bg-ink/80 border-secondary border mt-4 w-full rounded-xl shadow-lg p-6 text-tertiary">
        <p className="text-tertiary/80 leading-relaxed">
          I'm James, a full-stack developer and recent Informatics graduate (Cum Laude) from
          Universitas Kristen Krida Wacana. I work across the stack — building React frontends,
          Laravel and Go backends, and everything from IoT sensor dashboards to offline
          speech-recognition systems. I like picking up new languages and tools on real projects
          rather than in isolation, which is part of why I chose Go for one client build and Kotlin
          for another — broadening what I can ship, not just what I already know.
        </p>
        <p className="text-tertiary/60 leading-relaxed mt-4 text-sm">
          Outside of freelance work, I served as Vice Secretary for my university's Informatics
          student association, handling documentation and event coordination.
        </p>

        <h3 className="mono-text text-xs tracking-widest uppercase text-tertiary/50 mt-8 mb-2">
          Core Proficiency
        </h3>
        <SkillsChart />
      </div>
    </div>
  )
}

export default AboutMe