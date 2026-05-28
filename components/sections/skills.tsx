"use client"

import { motion } from "framer-motion"

interface SkillCategory {
  name: string
  color: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    name: "Data & Analytics",
    color: "hsl(220, 70%, 55%)",
    skills: ["SQL", "Python", "R", "Stata", "SAS", "SPSS", "Excel (Advanced)", "MATLAB"],
  },
  {
    name: "Visualization",
    color: "hsl(200, 75%, 50%)",
    skills: ["Tableau", "Excel Charts", "R Shiny", "Google Analytics"],
  },
  {
    name: "Business & Strategy",
    color: "hsl(170, 60%, 45%)",
    skills: ["Financial Analysis", "Market Research", "Business Strategy", "Project Management"],
  },
  {
    name: "Operations",
    color: "hsl(260, 60%, 55%)",
    skills: ["Supply Chain", "Process Optimization", "Digital Transformation", "Report Preparation"],
  },
  {
    name: "Soft Skills",
    color: "hsl(30, 80%, 55%)",
    skills: ["Team Leadership", "Cross-team Coordination", "Problem Solving", "Communication"],
  },
]

const certifications = [
  { name: "Supply Chain Logistics", institution: "Rutgers University" },
  { name: "Supply Chain Management", institution: "KAIST" },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A versatile toolkit built through academics, internships, and real-world projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card group hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: category.color }}
                />
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {category.name}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Certifications card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-6 rounded-xl border border-primary/30 bg-primary/5"
          >
            <h3 className="font-display text-lg font-semibold text-foreground mb-4">
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-start gap-3">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">{cert.name}</p>
                    <p className="text-sm text-muted-foreground">{cert.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="font-display text-xl font-semibold text-foreground text-center mb-6">
            Languages
          </h3>
          <div className="grid grid-cols-3 gap-4">
            {[
              { name: "English", level: "B2 – Professional" },
              { name: "Urdu", level: "Native" },
              { name: "German", level: "A1 – Basic" },
            ].map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-4 rounded-xl border border-border bg-card"
              >
                <p className="font-medium text-foreground mb-1">{lang.name}</p>
                <p className="text-sm text-muted-foreground">{lang.level}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
