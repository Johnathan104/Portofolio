import { Code2, Server, LineChart } from "lucide-react"
import AnimatedHeader from "./client/AnimatedHeader"
function Services() {
  return (
    <div className='py-[120px]  w-full md:max-w-[800px] border-t border-secondary border-dashed flex flex-col justify-center'>
        <span className='tag eyebrow text-secondary w-fit'>
            Services
        </span>
        <AnimatedHeader text="What i bring to the table"/>
        
        <div className="mt-[40px] flex flex-wrap gap-6 justify-evenly">
            {/* Frontend */}
            <div className="bg-ink max-w-[300px] border rounded-xl border-secondary w-fit text-tertiary p-4">
                <h1 className="mono-text flex items-center text-xl font-bold pb-3 border-b border-dashed border-tertiary/30">
                    <Code2 size={32} className="me-3 shrink-0" />Frontend Development
                </h1>
                <div className="pt-4 text-tertiary/80 mono-text text-sm">
                    <p>
                        I build responsive, modern interfaces with React and Tailwind, focused on clean UX and fast load times.
                    </p>
                </div>
            </div>

            {/* Backend */}
            <div className="bg-ink max-w-[300px] border rounded-xl border-secondary w-fit text-tertiary p-4">
                <h1 className="mono-text flex items-center text-xl font-bold pb-3 border-b border-dashed border-tertiary/30">
                    <Server size={32} className="me-3 shrink-0" />Backend Development
                </h1>
                <div className="pt-4 text-tertiary/80 mono-text text-sm">
                    <p>
                        I design and build REST APIs and server-side systems with Laravel, Go, and Node.js, backed by PostgreSQL or MySQL.
                    </p>
                </div>
            </div>

            {/* Python / Data */}
            <div className="bg-ink max-w-[300px] border rounded-xl border-secondary w-fit text-tertiary p-4">
                <h1 className="mono-text flex items-center text-xl font-bold pb-3 border-b border-dashed border-tertiary/30">
                    <LineChart size={32} className="me-3 shrink-0" />Python & Data Analysis
                </h1>
                <div className="pt-4 text-tertiary/80 mono-text text-sm">
                    <p>
                        I write Python scripts for data processing and analysis, and build ML-backed services using tools like TensorFlow.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services