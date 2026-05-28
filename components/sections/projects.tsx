"use client"

import { motion } from "framer-motion"
import { Lightbulb, Target, TrendingUp } from "lucide-react"

interface Project {
  title: string
  context: string
  period: string
  problem: string
  approach: string
  outcome: string
}

const projects: Project[] = [
  {
    title: "Navigating Success: Strategies and Challenges for Startups in Pakistan",
    context: "Research Project at Quaid-e-Azam University",
    period: "Sept 2023 – Oct 2024",
    problem: "Pakistan's startup ecosystem faces unique challenges — limited access to funding, regulatory hurdles, and market validation difficulties. There was a lack of comprehensive research on what actually makes startups succeed in this context.",
    approach: "Conducted extensive case studies and entrepreneur interviews across multiple sectors. Combined qualitative insights with quantitative analysis to identify key success factors and common failure patterns.",
    outcome: "Produced actionable recommendations for aspiring entrepreneurs and policy makers. The research deepened my understanding of entrepreneurship dynamics and sparked my interest in international business strategy.",
  },
  {
    title: "Financial Statement Analysis of Pakistan's Fertilizer Industry",
    context: "Course Project",
    period: "Sept 2021 – May 2022",
    problem: "The fertilizer industry is critical to Pakistan's agricultural economy, yet financial health indicators across major companies were not systematically compared or analyzed for stakeholders.",
    approach: "Analyzed income statements, balance sheets, and cash flow statements of major fertilizer companies. Applied financial ratios and trend analysis to evaluate profitability, liquidity, and operational efficiency.",
    outcome: "Developed a comprehensive financial health assessment framework. Enhanced my ability to interpret complex financial data and understand sector-specific business dynamics for informed decision-making.",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Research & Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Case study-driven work focused on real problems and measurable outcomes.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 rounded-2xl border border-border bg-card"
            >
              <div className="mb-6">
                <p className="text-sm text-primary font-medium mb-2">
                  {project.context} • {project.period}
                </p>
                <h3 className="font-display text-2xl font-semibold text-foreground text-balance">
                  {project.title}
                </h3>
              </div>

              <div className="grid gap-6">
                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-destructive/10">
                    <Lightbulb className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">The Problem</h4>
                    <p className="text-foreground/80 leading-relaxed">{project.problem}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-primary/10">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">My Approach</h4>
                    <p className="text-foreground/80 leading-relaxed">{project.approach}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2 h-fit rounded-lg bg-accent/10">
                    <TrendingUp className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">The Outcome</h4>
                    <p className="text-foreground/80 leading-relaxed">{project.outcome}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
