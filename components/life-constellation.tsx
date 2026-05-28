"use client"

import React from "react"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface ConstellationNode {
  id: string
  x: number
  y: number
  label: string
  category: "education" | "experience" | "skill" | "value" | "milestone"
  description: string
  year?: string
  connections: string[]
  size: number
}

const nodes: ConstellationNode[] = [
  // Core - Center
  {
    id: "core",
    x: 50,
    y: 50,
    label: "Saqib Ali",
    category: "value",
    description: "Turning messy information into clear, useful insights for policy, operations, and business decisions.",
    size: 18,
    connections: ["qau", "tuc", "data", "global"],
  },
  // Education
  {
    id: "qau",
    x: 25,
    y: 30,
    label: "QAU",
    category: "education",
    description: "Bachelor of Business Administration from Quaid-i-Azam University, Islamabad. Foundation in financial analysis, research methods, and management principles.",
    year: "2020-2024",
    size: 14,
    connections: ["core", "research", "finance-intern", "startup-research"],
  },
  {
    id: "tuc",
    x: 75,
    y: 25,
    label: "TU Chemnitz",
    category: "education",
    description: "Master of Science in Business & Economics. Focus on innovation economics, project management, and strategic IT management.",
    year: "2025-2027",
    size: 14,
    connections: ["core", "global", "supply-chain"],
  },
  // Values
  {
    id: "global",
    x: 80,
    y: 50,
    label: "Global Mindset",
    category: "value",
    description: "From Pakistan to Germany - embracing international perspectives and cross-cultural collaboration in every endeavor.",
    size: 12,
    connections: ["core", "tuc", "planning-intern"],
  },
  {
    id: "data",
    x: 35,
    y: 65,
    label: "Data-Driven",
    category: "value",
    description: "Passionate about transforming raw data into actionable insights. SQL, Python, Tableau, and advanced Excel as tools of choice.",
    size: 12,
    connections: ["core", "research", "finance-intern"],
  },
  // Experience
  {
    id: "finance-intern",
    x: 20,
    y: 55,
    label: "Ministry of Finance",
    category: "experience",
    description: "Analyzed financial and economic data, prepared growth summaries, and researched global economic trends for policy input.",
    year: "2023",
    size: 11,
    connections: ["qau", "data", "food-intern"],
  },
  {
    id: "food-intern",
    x: 15,
    y: 75,
    label: "Food Security",
    category: "experience",
    description: "Ministry of National Food Security & Research. Collected agricultural data and supported sustainability reports.",
    year: "2022",
    size: 11,
    connections: ["finance-intern", "research"],
  },
  {
    id: "planning-intern",
    x: 65,
    y: 70,
    label: "Planning Ministry",
    category: "experience",
    description: "Ministry of Planning, Development & Special Initiatives. Supported development project analysis and policy research.",
    year: "2025",
    size: 11,
    connections: ["global", "retail", "supply-chain"],
  },
  {
    id: "retail",
    x: 50,
    y: 80,
    label: "PAK PVC",
    category: "experience",
    description: "Retail Operations Coordinator. Streamlined distribution, implemented digital inventory systems, and optimized operations.",
    year: "2024-2025",
    size: 11,
    connections: ["planning-intern", "supply-chain"],
  },
  // Skills
  {
    id: "research",
    x: 30,
    y: 40,
    label: "Research",
    category: "skill",
    description: "Deep expertise in qualitative and quantitative research methods, literature reviews, and academic publication support.",
    size: 10,
    connections: ["qau", "data", "startup-research"],
  },
  {
    id: "supply-chain",
    x: 70,
    y: 40,
    label: "Supply Chain",
    category: "skill",
    description: "Certified in Supply Chain Logistics (Rutgers) and Supply Chain Management (KAIST). Focus on optimization and sustainable growth.",
    size: 10,
    connections: ["tuc", "retail", "planning-intern"],
  },
  // Projects
  {
    id: "startup-research",
    x: 40,
    y: 20,
    label: "Startup Research",
    category: "milestone",
    description: "Navigating Success: Strategies and Challenges for Startups in the Pakistani Business Landscape - Research project analyzing entrepreneurship.",
    year: "2023-2024",
    size: 9,
    connections: ["qau", "research"],
  },
  // Volunteering
  {
    id: "wall-of-hope",
    x: 85,
    y: 75,
    label: "Wall of Hope",
    category: "milestone",
    description: "Head of Volunteer. Led winter drives, food distribution, and flood relief efforts for underprivileged communities.",
    year: "2020-Present",
    size: 10,
    connections: ["global"],
  },
]

const categoryColors = {
  education: { main: "hsl(220, 70%, 55%)", glow: "hsl(220, 70%, 65%)" },
  experience: { main: "hsl(200, 75%, 50%)", glow: "hsl(200, 75%, 60%)" },
  skill: { main: "hsl(170, 60%, 45%)", glow: "hsl(170, 60%, 55%)" },
  value: { main: "hsl(260, 60%, 55%)", glow: "hsl(260, 60%, 65%)" },
  milestone: { main: "hsl(30, 80%, 55%)", glow: "hsl(30, 80%, 65%)" },
}

const categoryLabels = {
  education: "Education",
  experience: "Experience",
  skill: "Skill",
  value: "Core Value",
  milestone: "Milestone",
}

export function LifeConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedNode, setSelectedNode] = useState<ConstellationNode | null>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 })
  const animationRef = useRef<number>(0)
  const timeRef = useRef(0)

  const getNodePosition = useCallback((node: ConstellationNode) => {
    return {
      x: (node.x / 100) * dimensions.width,
      y: (node.y / 100) * dimensions.height,
    }
  }, [dimensions])

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setDimensions({ width: rect.width, height: rect.height })
      }
    }
    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = dimensions.width * dpr
    canvas.height = dimensions.height * dpr
    ctx.scale(dpr, dpr)

    const animate = () => {
      timeRef.current += 0.01
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)

      // Draw connections
      nodes.forEach((node) => {
        const pos = getNodePosition(node)
        node.connections.forEach((connId) => {
          const connNode = nodes.find((n) => n.id === connId)
          if (connNode) {
            const connPos = getNodePosition(connNode)
            const isHighlighted = hoveredNode === node.id || hoveredNode === connId

            ctx.beginPath()
            ctx.moveTo(pos.x, pos.y)
            ctx.lineTo(connPos.x, connPos.y)
            ctx.strokeStyle = isHighlighted
              ? "rgba(148, 163, 184, 0.6)"
              : "rgba(148, 163, 184, 0.15)"
            ctx.lineWidth = isHighlighted ? 2 : 1
            ctx.stroke()
          }
        })
      })

      // Draw nodes
      nodes.forEach((node) => {
        const pos = getNodePosition(node)
        const colors = categoryColors[node.category]
        const isHovered = hoveredNode === node.id
        const pulseScale = 1 + Math.sin(timeRef.current * 2 + node.x) * 0.1
        const size = node.size * (isHovered ? 1.3 : pulseScale)

        // Glow effect
        const gradient = ctx.createRadialGradient(
          pos.x, pos.y, 0,
          pos.x, pos.y, size * 2
        )
        gradient.addColorStop(0, isHovered ? colors.glow : colors.main)
        gradient.addColorStop(1, "transparent")
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, size * 2, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2)
        ctx.fillStyle = colors.main
        ctx.fill()

        // Inner highlight
        ctx.beginPath()
        ctx.arc(pos.x - size * 0.3, pos.y - size * 0.3, size * 0.3, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
        ctx.fill()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(animationRef.current)
  }, [dimensions, hoveredNode, getNodePosition])

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    for (const node of nodes) {
      const pos = getNodePosition(node)
      const dist = Math.sqrt((x - pos.x) ** 2 + (y - pos.y) ** 2)
      if (dist < node.size * 2) {
        setSelectedNode(node)
        return
      }
    }
  }

  const handleCanvasMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    for (const node of nodes) {
      const pos = getNodePosition(node)
      const dist = Math.sqrt((x - pos.x) ** 2 + (y - pos.y) ** 2)
      if (dist < node.size * 2) {
        setHoveredNode(node.id)
        return
      }
    }
    setHoveredNode(null)
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            My Life Constellation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            An interactive map of my journey — each star represents a milestone, skill, or experience.
            Click any star to explore how they connect.
          </p>
        </motion.div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(categoryColors).map(([key, colors]) => (
            <div key={key} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: colors.main }}
              />
              <span className="text-sm text-muted-foreground capitalize">
                {categoryLabels[key as keyof typeof categoryLabels]}
              </span>
            </div>
          ))}
        </div>

        <div
          ref={containerRef}
          className="relative w-full h-[500px] md:h-[600px] rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden"
        >
          <canvas
            ref={canvasRef}
            onClick={handleCanvasClick}
            onMouseMove={handleCanvasMove}
            className="w-full h-full cursor-pointer"
            style={{ width: dimensions.width, height: dimensions.height }}
          />

          {/* Node labels */}
          {nodes.map((node) => {
            const pos = getNodePosition(node)
            return (
              <motion.div
                key={node.id}
                className="absolute pointer-events-none"
                style={{
                  left: pos.x,
                  top: pos.y + node.size + 8,
                  transform: "translateX(-50%)",
                }}
                animate={{
                  opacity: hoveredNode === node.id || node.id === "core" ? 1 : 0.6,
                  scale: hoveredNode === node.id ? 1.1 : 1,
                }}
              >
                <span className="text-xs font-medium text-foreground whitespace-nowrap bg-background/80 px-2 py-0.5 rounded">
                  {node.label}
                </span>
              </motion.div>
            )
          })}
        </div>

        {/* Selected node detail */}
        <AnimatePresence>
          {selectedNode && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-8 p-6 rounded-xl border border-border bg-card"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: categoryColors[selectedNode.category].main }}
                  />
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground">
                      {selectedNode.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {categoryLabels[selectedNode.category]}
                      {selectedNode.year && ` • ${selectedNode.year}`}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedNode(null)}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
              <p className="text-foreground leading-relaxed">
                {selectedNode.description}
              </p>
              {selectedNode.connections.length > 0 && (
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-2">Connected to:</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedNode.connections.map((connId) => {
                      const connNode = nodes.find((n) => n.id === connId)
                      return connNode ? (
                        <button
                          key={connId}
                          onClick={() => setSelectedNode(connNode)}
                          className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground hover:bg-muted transition-colors"
                        >
                          {connNode.label}
                        </button>
                      ) : null
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
