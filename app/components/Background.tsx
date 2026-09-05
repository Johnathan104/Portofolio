import { BriefcaseAlt2, Education, Calendar } from "@boxicons/react"
import ExperienceTimeline from "./client/ExperienceTimeline"
import TimelineCard from "./client/TimelineCard"
import "./background.css"
import Skills from "./Skills"
import AnimatedHeader from "./client/AnimatedHeader"

function Background() {
  return (
    <div className="flex flex-col border-t border-secondary border-dashed items-center justify-center w-full min-h-[100vh]">
      <span className="tag eyebrow mt-[20px] text-secondary">
        Background
      </span>
      <AnimatedHeader text="Education and Experience"/>
       

      <div className="w-full md:max-w-[800px] bg-gradient-to-br from-ink to-dark mt-4 grid grid-col md:grid-cols-2 gap-4 p-4 rounded-xl shadow-lg border-secondary border  ">
        <div className="w-full p-4 md:border-r border-tertiary/30 border-dashed">
          <h1 className="mono-text font-bold text-tertiary text-4xl w-fit mt-1 flex items-center border-b border-tertiary/40 border-dashed py-2 my-2">
            <Education pack="filled" size="md" className="me-2" /> Education
          </h1>
          <div className="timeline">
            <TimelineCard>
              <h2 className="date tag eyebrow mono-text text-tertiary">
                Ukrida | <Calendar size="xs" /> 2022-2026
              </h2>
              <div className="p-4 flex max-sm:flex-wrap max-sm:justify-center">
                <img src="/images/logo_ukrida.png" alt="ukrida" width={20} height={20} className="w-[4rem] h-fit max-sm:w-[8rem] max-sm:mb-4" />
                <div className="ml-2">
                  <span className="mono-text mt-2 text-sm font-bold text-tertiary">
                    GPA: 3.64/4.00 | Cum Laude
                  </span>
                  <p className="text-tertiary/80 text-[12px] mt-2">
                    Graduated in Informatics Engineering,
                    with a focus on creating and devloping software.
                  </p>
                </div>
              </div>
            </TimelineCard>
            <TimelineCard>
              <h2 className="date tag eyebrow mono-text text-tertiary flex flex-wrap">
                SMP-SMA Providentia | <Calendar size="xs" /> 2016-2022
              </h2>
              <div className="p-4 flex max-sm:flex-wrap justify-center">
                <img src="/images/provi.png" alt="ukrida" width={20} height={20} className="w-[4rem] h-fit max-sm:w-[8rem] max-sm:mb-4" />
                <div className="ml-2">
                  <p className="text-tertiary/80 text-[12px] mt-2">
                    Completed secondary education with a specialization in Natural Sciences
                  </p>
                </div>
              </div>
            </TimelineCard>
          </div>
        </div>

        <div className="w-full p-4 border-dashed">
          <h1 className="mono-text font-bold text-tertiary text-4xl w-fit mt-1 flex items-center border-b border-tertiary/40 border-dashed py-2 my-2">
            <BriefcaseAlt2 pack="filled" size="md" className="me-2" /> Experience
          </h1>
          <ExperienceTimeline />
        </div>
      </div>
      <div className="py-8">
      <AnimatedHeader text="Technical Skills" className="py-[100px] p-4"/>
        
      </div>
        
        <div className="bg-gradient-to-br from-secondary/60 to-primary p-4 rounded-xl border border-secondary">
        <Skills></Skills>
        </div>
    </div>
  )
}

export default Background