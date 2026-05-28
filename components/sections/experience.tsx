"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"

interface TimelineItem {
  type: "work" | "education"
  title: string
  organization: string
  location: string
  period: string
  highlights: string[]
  current?: boolean
}

const timeline: TimelineItem[] = [
  {
    type: "education",
    title: "MSc Business & Economics",
    organization: "Chemnitz University of Technology",
    location: "Chemnitz, Germany",
    period: "Oct 2025 – Present",
    current: true,
    highlights: [
      "Innovation Economics & Market Research",
      "Strategic IT Management & Project Management",
      "Quantitative Methods & Digital Business Tools",
    ],
  },
  {
    type: "work",
    title: "Graduate Research Intern",
    organization: "Ministry of Planning, Development & Special Initiatives",
    location: "Islamabad, Pakistan",
    period: "Jan 2025 – Sept 2025",
    highlights: [
      "Supported analysis of development project data",
      "Drafted reports and policy documentation",
      "Conducted research for strategic planning activities",
    ],
  },
  {
    type: "work",
    title: "Retail Operations Coordinator",
    organization: "PAK PVC Pipes Industry",
    location: "Peshawar, Pakistan",
    period: "Sept 2024 – Jan 2025",
    highlights: [
      "Streamlined product distribution and supply chain operations",
      "Transitioned from manual to digital inventory tracking system",
      "Leveraged market insights to optimize pricing and promotions",
    ],
  },
  {
    type: "education",
    title: "BBA Business Administration",
    organization: "Quaid-i-Azam University",
    location: "Islamabad, Pakistan",
    period: "Sept 2020 – Oct 2024",
    highlights: [
      "Computer Applications in Business & MIS",
      "Financial Management & Market Research",
      "Organizational Behaviour & Strategic Management",
    ],
  },
  {
    type: "work",
    title: "Internship",
    organization: "Ministry of Finance",
    location: "Islamabad, Pakistan",
    period: "July 2023 – Sept 2023",
    highlights: [
      "Analyzed financial and economic data for government reports",
      "Prepared economic growth summaries for policy decisions",
      "Researched global economic trends for policy input",
    ],
  },
  {
    type: "work",
    title: "Internship",
    organization: "Ministry of National Food Security & Research",
    location: "Islamabad, Pakistan",
    period: "July 2022 – Sept 2022",
    highlights: [
      "Collected and analyzed agricultural distribution data",
      "Supported preparation of crop sustainability reports",
      "Assisted research on national food security issues",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through government ministries, private sector operations, 
            and academic institutions across two continents.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {timeline.map((item, index) => (
            <motion.div
              key={`${item.organization}-${item.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Icon */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full border-4 border-background bg-primary -translate-x-1/2 mt-6" />

              {/* Content */}
              <div className={`flex-1 ml-16 md:ml-0 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                <div className={`p-6 rounded-xl border border-border bg-card ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className={`p-2 rounded-lg ${item.type === "education" ? "bg-accent/10" : "bg-primary/10"}`}>
                      {item.type === "education" ? (
                        <GraduationCap className={`w-5 h-5 ${item.type === "education" ? "text-accent" : "text-primary"}`} />
                      ) : (
                        <Briefcase className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    {item.current && (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-primary font-medium mb-1">{item.organization}</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {item.location} • {item.period}
                  </p>

                  <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-foreground/80 flex items-start gap-2">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0 ${index % 2 === 0 ? "md:order-last md:ml-2" : ""}`} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
