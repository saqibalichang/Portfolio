"use client"

import { motion } from "framer-motion"
import { MapPin, GraduationCap, Globe } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: MapPin, label: "Based in", value: "Chemnitz, Germany" },
            { icon: GraduationCap, label: "Studying", value: "MSc Business & Economics" },
            { icon: Globe, label: "From", value: "Khairpur, Pakistan" },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card"
            >
              <div className="p-3 rounded-lg bg-primary/10">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <p className="font-medium text-foreground">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-6 text-lg text-foreground/80 leading-relaxed"
        >
          <p>
            I believe that every dataset tells a story — and my job is to find it, translate it, 
            and make it useful. Whether it{"'"}s agricultural statistics at a government ministry or 
            inventory numbers at a retail operation, I see patterns where others see chaos.
          </p>
          <p>
            My journey has taken me from the halls of Quaid-i-Azam University in Islamabad to 
            Chemnitz University of Technology in Germany. Along the way, I{"'"}ve worked across 
            Pakistan{"'"}s public sector — Finance, Planning, and Food Security — gaining firsthand 
            experience in how data shapes policy and drives real-world decisions.
          </p>
          <p>
            But I{"'"}m not just about spreadsheets and reports. I{"'"}ve led volunteer teams for 
            flood relief, built digital systems from scratch, and constantly push myself to learn 
            through certifications from institutions like Rutgers and KAIST.
          </p>
          <p className="text-foreground font-medium">
            What drives me? The intersection of business strategy, operational efficiency, and 
            sustainable growth — especially in contexts where insights can create tangible impact.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
