"use client"
import { useEffect, useRef, useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { Github } from '@boxicons/react'

interface ProjectData {
    name: string,
    tagline: string,
    thumbnail: ""|string,
    date: string,
    stack: string[],
    other_pics: string[]|null,
    desc: string,
    git_link: string|null
}
interface PropType{
    data:ProjectData
}

function Project({data}:PropType) {
    const ref = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState<boolean>(false);
    const [open, setOpen] = useState(false);
    const [activeImg, setActiveImg] = useState(0);

    useEffect(()=>{
        const section = ref.current
        if (!section) return

        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting){
                setInView(true)
                observer.unobserve(section)
            }
        },
        { threshold: 0.2 }
      )
      observer.observe(section)
      return () => observer.disconnect()
    },[])

    useEffect(() => {
        if (!open) return
        function handleKey(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false)
            if (e.key === "ArrowRight" && data.other_pics) {
                setActiveImg((i) => (i + 1) % data.other_pics!.length)
            }
            if (e.key === "ArrowLeft" && data.other_pics) {
                setActiveImg((i) => (i - 1 + data.other_pics!.length) % data.other_pics!.length)
            }
        }
        window.addEventListener("keydown", handleKey)
        return () => window.removeEventListener("keydown", handleKey)
    }, [open, data.other_pics])

    function openModal() {
        setActiveImg(0)
        setOpen(true)
    }

  return (
    <>
    <div
        ref = {ref}
        key={data.name}
        className={`${inView?"opacity-100 ":"opacity-0 translate-y-12"} duration-400 ease-out bg-dark border border-secondary rounded-xl overflow-hidden flex flex-col sm:flex-row`}
        >
        {/* thumbnail */}
        <div className="w-full sm:w-[240px] h-[160px] sm:h-auto bg-white shrink-0">
            <img src={`${process.env.basePath}${data.thumbnail}`} alt={data.name} className="w-full h-full object-cover" />
        </div>

        {/* content */}
        <div className="p-5 flex flex-col flex-1">
            <div className="flex items-baseline justify-between flex-wrap gap-2">
                <h2 className="mono-text font-bold text-tertiary text-xl">
                {data.name}
                </h2>
                <span className="tag eyebrow text-xs text-tertiary/40">
                {data.date}
                </span>
            </div>
            <p className="mono-text text-sm text-tertiary/60 mt-1">
                {data.tagline}
            </p>
            <p className="text-tertiary/80 text-sm mt-3 leading-relaxed">
                {data.desc}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-4">
                {data.stack.map((tech) => (
                <span
                    key={tech}
                    className="mono-text text-xs px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary/70"
                >
                    {tech}
                </span>
                ))}
            </div>
            <div className="flex flex-row items-center mt-4">
                <button
                    onClick={openModal}
                    className="mono-text text-sm  self-start px-4 py-1.5 rounded-full border border-tertiary/30 text-tertiary/80 hover:bg-tertiary hover:text-dark transition-colors"
                >
                    Details
                </button>
                <a href={"https://github.com/Johnathan104"+data.git_link}>
                    <button className='text-secondary ms-4 h-fit flex mono-text transition ease-out hover:text-tertiary'>
                        <Github pack="brands"/> git
                    </button>
                </a>
            </div>
            
        </div>
    </div>

    {open && (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setOpen(false)}
        >
            <div
                className="bg-dark border border-secondary max-w-2xl w-full rounded-2xl overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-dark/80 text-tertiary hover:text-white transition-colors"
                    aria-label="Close"
                >
                    <X size={18} />
                </button>

                {data.other_pics && data.other_pics.length > 0 && (
                    <div className="relative w-full h-[280px] sm:h-[360px] bg-white">
                        <img
                            src={`${process.env.basePath}${data.other_pics[activeImg]}`}
                            alt={`${data.name} screenshot ${activeImg + 1}`}
                            className="w-full h-full object-contain"
                        />
                        {data.other_pics.length > 1 && (
                            <>
                                <button
                                    onClick={() => setActiveImg((i) => (i - 1 + data.other_pics!.length) % data.other_pics!.length)}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-dark/70 text-tertiary hover:text-white transition-colors"
                                    aria-label="Previous image"
                                >
                                    <ChevronLeft size={18} />
                                </button>
                                <button
                                    onClick={() => setActiveImg((i) => (i + 1) % data.other_pics!.length)}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-dark/70 text-tertiary hover:text-white transition-colors"
                                    aria-label="Next image"
                                >
                                    <ChevronRight size={18} />
                                </button>
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                                    {data.other_pics.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setActiveImg(i)}
                                            className={`w-1.5 h-1.5 rounded-full transition-colors ${i === activeImg ? "bg-tertiary" : "bg-tertiary/30"}`}
                                            aria-label={`Go to image ${i + 1}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                )}

                <div className="p-6">
                    <div className="flex items-baseline justify-between flex-wrap gap-2">
                        <h2 className="mono-text font-bold text-tertiary text-2xl">
                            {data.name}
                        </h2>
                        <span className="tag eyebrow text-xs text-tertiary/40">
                            {data.date}
                        </span>
                    </div>
                    <p className="mono-text text-sm text-tertiary/60 mt-1">
                        {data.tagline}
                    </p>
                    <p className="text-tertiary/80 text-sm mt-4 leading-relaxed">
                        {data.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                        {data.stack.map((tech) => (
                            <span
                                key={tech}
                                className="mono-text text-xs px-2 py-0.5 rounded-full bg-tertiary/10 text-tertiary/70"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )}
    </>
  )
}

export default Project