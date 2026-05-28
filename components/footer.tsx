"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold text-foreground mb-1">
              Saqib Ali
            </p>
            <p className="text-sm text-muted-foreground">
              Business & Economics • TU Chemnitz
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:saqibalichang@gmail.com"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/saqibali-521a56320"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Built with <Heart className="w-4 h-4 text-destructive inline" /> in Chemnitz
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {currentYear} Saqib Ali. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
