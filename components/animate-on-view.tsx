"use client"

import { motion, useInView } from "framer-motion"
import { useRef, type ReactNode } from "react"

interface AnimateOnViewProps {
  children: ReactNode
  variant?: "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scale" | "slideUp"
  delay?: number
  duration?: number
  className?: string
}

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  slideUp: {
    hidden: { y: 100 },
    visible: { y: 0 },
  },
}

export function AnimateOnView({
  children,
  variant = "fadeUp",
  delay = 0,
  duration = 0.6,
  className,
}: AnimateOnViewProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
