"use client"

import { motion } from "framer-motion"
import { Compass, Rocket, Globe2, Zap } from "lucide-react"

export function VisionSection() {
  return (
    <section id="vision" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Where I{"'"}m Heading
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My vision for the future and the impact I want to create.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 md:p-12 rounded-2xl border border-primary/20 bg-card mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/10">
              <Compass className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground">
              My North Star
            </h3>
          </div>
          <p className="text-lg text-foreground/80 leading-relaxed">
            I{"'"}m building toward a career at the intersection of <span className="text-foreground font-medium">business strategy</span>, {" "}
            <span className="text-foreground font-medium">supply chain optimization</span>, and {" "}
            <span className="text-foreground font-medium">data-driven decision making</span>. 
            I want to be in rooms where insights shape real outcomes — whether that{"'"}s helping 
            organizations run leaner, governments plan smarter, or teams collaborate better across borders.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Rocket,
              title: "Near-Term",
              description: "Secure an internship or entry-level role in operations, supply chain, or business analysis where I can apply my research skills and learn from experienced teams.",
            },
            {
              icon: Globe2,
              title: "Mid-Term",
              description: "Build expertise in international business operations, potentially working across multiple markets and contributing to sustainable growth strategies.",
            },
            {
              icon: Zap,
              title: "Long-Term",
              description: "Lead initiatives that bridge data analytics with strategic decision-making, creating measurable impact in organizations that value innovation and ethical growth.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <div className="p-2 w-fit rounded-lg bg-primary/10 mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-foreground/80 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-muted-foreground mt-12 text-lg"
        >
          Open to internships and entry-level roles in <span className="text-foreground">operations</span>, {" "}
          <span className="text-foreground">supply chain</span>, <span className="text-foreground">business analysis</span>, {" "}
          or <span className="text-foreground">strategy support</span>.
        </motion.p>
      </div>
    </section>
  )
}
