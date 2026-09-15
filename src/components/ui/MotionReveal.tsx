"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

export const LUXURY_EASE = [0.16, 1, 0.3, 1] as const;

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
  once?: boolean;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  direction = "up",
  distance = 28,
  className = "",
  once = true,
  ...props
}) => {
  const getInitialPos = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
        return { x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getInitialPos() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "0px 0px -40px 0px", amount: 0.05 }}
      transition={{
        duration,
        delay,
        ease: LUXURY_EASE,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

interface ScaleInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  initialScale?: number;
  className?: string;
  once?: boolean;
}

export const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  delay = 0,
  duration = 1.1,
  initialScale = 1.05,
  className = "",
  once = true,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, margin: "0px 0px -40px 0px", amount: 0.05 }}
      transition={{
        duration,
        delay,
        ease: LUXURY_EASE,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const UnderlineReveal: React.FC<{
  className?: string;
  delay?: number;
  duration?: number;
}> = ({ className = "w-[60px] sm:w-[80px] h-[2px] bg-[#0A0C0C]", delay = 0.2, duration = 0.8 }) => {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -40px 0px", amount: 0.05 }}
      transition={{ duration, delay, ease: LUXURY_EASE }}
      className={className}
    />
  );
};

export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
}> = ({
  children,
  staggerDelay = 0.1,
  delayChildren = 0.05,
  className = "",
}) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -40px 0px", amount: 0.05 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  distance?: number;
  duration?: number;
  hoverY?: number;
}> = ({
  children,
  className = "",
  direction = "up",
  distance = 24,
  duration = 0.75,
  hoverY,
}) => {
  const getInitialPos = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...getInitialPos() },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: {
            duration,
            ease: LUXURY_EASE,
          },
        },
      }}
      whileHover={hoverY !== undefined ? { y: hoverY } : undefined}
      className={`h-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const CardLift: React.FC<{
  children: React.ReactNode;
  className?: string;
  liftY?: number;
}> = ({ children, className = "", liftY = -4 }) => {
  return (
    <motion.div
      whileHover={{ y: liftY }}
      transition={{ duration: 0.25, ease: LUXURY_EASE }}
      className={`h-full ${className}`}
    >
      {children}
    </motion.div>
  );
};
