"use client"

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts"

const skills = [
  { name: "React.js", level: 95 },
  { name: "Node.js", level: 85 },
  { name: "Laravel", level: 85 },
  { name: "Golang", level: 75 },
  { name: "Python", level: 85 },
]

export default function SkillsChart() {
  return (
    <div className="w-full h-[280px] mt-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={skills} layout="vertical" margin={{ left: 10, right: 20 }}>
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis
            type="category"
            dataKey="name"
            width={90}
            tick={{ fill: "var(--color-tertiary)", fontSize: 13, fontFamily: "var(--font-mono)" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: "rgba(255,255,255,0.05)" }}
            contentStyle={{
              background: "var(--color-dark)",
              border: "1px solid rgba(238,243,251,0.2)",
              borderRadius: 8,
              fontFamily: "var(--font-mono)",
              fontSize: 12,
            }}
            labelStyle={{ color: "var(--color-tertiary)" }}
            itemStyle={{ color: "var(--color-tertiary)" }}
            formatter={(value) => [`${value}%`, "Proficiency"]}
          />
          <Bar dataKey="level" radius={[0, 8, 8, 0]} barSize={16}>
            {skills.map((_, i) => (
              <Cell key={i} fill="var(--color-secondary)" opacity={1 - i * 0.08} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}