"use client"

import { motion } from "framer-motion"
import { Heart, Users, Award } from "lucide-react"

export function VolunteeringSection() {
  return (
    <section id="volunteering" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Leadership & Volunteering
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Impact beyond the workplace — community service and student leadership that shaped who I am.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Wall of Hope - Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 p-8 rounded-2xl border border-border bg-card"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    Wall of Hope
                  </h3>
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
                    Head of Volunteer
                  </span>
                </div>
                <p className="text-muted-foreground mb-6">Dec 2020 – Present</p>
                
                <p className="text-foreground/80 leading-relaxed mb-6">
                  What started as a simple act of giving became a defining part of my journey. 
                  Leading volunteer teams through winter drives, food distribution, and flood relief 
                  efforts taught me that leadership is{"'"}nt about titles — it{"'"}s about showing up 
                  when it matters most.
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { label: "Winter & Food Drives", desc: "Essential supplies for underprivileged children" },
                    { label: "Flood Relief", desc: "Emergency aid to affected families" },
                    { label: "Community Outreach", desc: "Seasonal and emergency donation drives" },
                  ].map((item, i) => (
                    <div key={item.label} className="p-4 rounded-lg bg-muted/50">
                      <p className="font-medium text-foreground text-sm mb-1">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Student Leadership Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 rounded-xl border border-border bg-card"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  QASMS Executive Club
                </h3>
                <p className="text-sm text-primary font-medium mb-2">Head of Management</p>
                <p className="text-sm text-muted-foreground mb-3">2021</p>
                <p className="text-sm text-foreground/80">
                  Led club operations and event management, coordinating cross-functional 
                  teams to deliver successful student initiatives.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 rounded-xl border border-border bg-card"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-chart-3/20">
                <Award className="w-5 h-5 text-chart-3" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  QASMS Entrepreneurial Society
                </h3>
                <p className="text-sm text-primary font-medium mb-2">Financial Advisor</p>
                <p className="text-sm text-muted-foreground mb-3">2022</p>
                <p className="text-sm text-foreground/80">
                  Provided financial guidance for society initiatives and helped students 
                  understand budgeting and financial planning for their ventures.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
