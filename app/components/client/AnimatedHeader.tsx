"use client"
import {useRef, useEffect, useState} from "react"
import "./animate.css"
function AnimatedHeader({text="", className=""}) {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [inView, setInView] =  useState(false)
    useEffect(() => {
      const section = sectionRef.current

      if (!section) return
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true)

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
     <div ref={sectionRef} className={inView?`cat-06c ${className}`:`hide-bro ${className}`}>
        <h1 className="mono-text font-bold text-4xl text-tertiary w-fit cat06c__line ">
            <span className={inView?`cat-06c__type flex-wrap`:`hide-bro `}>
                {text}
            </span>
        </h1>
      </div>
  )
}

export default AnimatedHeader